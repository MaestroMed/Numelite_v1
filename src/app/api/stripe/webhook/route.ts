import { NextRequest, NextResponse } from "next/server"
import { stripe } from "@/lib/stripe"
import { prisma } from "@/lib/prisma"
import { generateInvoiceNumber } from "@/lib/utils"
import Stripe from "stripe"

export async function POST(request: NextRequest) {
  const body = await request.text()
  const signature = request.headers.get("stripe-signature")

  if (!signature) {
    return NextResponse.json(
      { error: "Missing stripe-signature header" },
      { status: 400 }
    )
  }

  let event: Stripe.Event

  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET!
    )
  } catch (err) {
    console.error("Webhook signature verification failed:", err)
    return NextResponse.json(
      { error: "Webhook signature verification failed" },
      { status: 400 }
    )
  }

  try {
    switch (event.type) {
      case "checkout.session.completed": {
        const session = event.data.object as Stripe.Checkout.Session
        await handleCheckoutComplete(session)
        break
      }

      case "payment_intent.succeeded": {
        const paymentIntent = event.data.object as Stripe.PaymentIntent
        await handlePaymentSucceeded(paymentIntent)
        break
      }

      case "payment_intent.payment_failed": {
        const paymentIntent = event.data.object as Stripe.PaymentIntent
        await handlePaymentFailed(paymentIntent)
        break
      }

      default:
        console.log(`Unhandled event type: ${event.type}`)
    }

    return NextResponse.json({ received: true })
  } catch (error) {
    console.error("Error processing webhook:", error)
    return NextResponse.json(
      { error: "Webhook processing failed" },
      { status: 500 }
    )
  }
}

async function handleCheckoutComplete(session: Stripe.Checkout.Session) {
  const orderId = session.metadata?.orderId
  if (!orderId) return

  // Update order status
  const order = await prisma.order.update({
    where: { id: orderId },
    data: {
      status: "confirmed",
      paymentStatus: "paid",
      stripePaymentId: session.payment_intent as string,
    },
  })

  // Create payment record
  await prisma.payment.create({
    data: {
      orderId: order.id,
      amount: (session.amount_total || 0) / 100,
      method: "stripe",
      status: "completed",
      stripePaymentId: session.payment_intent as string,
    },
  })

  // Create invoice
  await prisma.invoice.create({
    data: {
      invoiceNumber: generateInvoiceNumber(),
      orderId: order.id,
    },
  })

  // Track conversion
  await prisma.conversion.create({
    data: {
      type: "order",
      value: (session.amount_total || 0) / 100,
      metadata: JSON.stringify({
        orderNumber: order.orderNumber,
        paymentIntent: session.payment_intent,
      }),
    },
  })

  // Update promo code usage if applicable
  if (order.promoCodeId) {
    await prisma.promoCode.update({
      where: { id: order.promoCodeId },
      data: { usedCount: { increment: 1 } },
    })
  }

  // TODO: Send confirmation email
  // TODO: Create notification for admin
}

async function handlePaymentSucceeded(paymentIntent: Stripe.PaymentIntent) {
  // Find order by payment intent
  const order = await prisma.order.findFirst({
    where: { stripePaymentId: paymentIntent.id },
  })

  if (order && order.paymentStatus !== "paid") {
    await prisma.order.update({
      where: { id: order.id },
      data: { paymentStatus: "paid" },
    })
  }
}

async function handlePaymentFailed(paymentIntent: Stripe.PaymentIntent) {
  // Find order by payment intent
  const order = await prisma.order.findFirst({
    where: { stripePaymentId: paymentIntent.id },
  })

  if (order) {
    await prisma.order.update({
      where: { id: order.id },
      data: { paymentStatus: "pending" },
    })

    // TODO: Send payment failed email
  }
}


