import { NextRequest, NextResponse } from "next/server"
import { stripe } from "@/lib/stripe"
import { prisma } from "@/lib/prisma"
import { z } from "zod"
import { generateOrderNumber } from "@/lib/utils"

const checkoutSchema = z.object({
  items: z.array(z.object({
    serviceId: z.string(),
    optionId: z.string().optional(),
    quantity: z.number().default(1),
  })),
  customerEmail: z.string().email(),
  customerName: z.string().optional(),
  customerPhone: z.string().optional(),
  promoCode: z.string().optional(),
  successUrl: z.string().optional(),
  cancelUrl: z.string().optional(),
})

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const data = checkoutSchema.parse(body)

    // Get services details
    const serviceIds = data.items.map((item) => item.serviceId)
    const services = await prisma.service.findMany({
      where: { id: { in: serviceIds } },
      include: { options: true },
    })

    // Calculate totals
    let subtotal = 0
    const lineItems: {
      price_data: {
        currency: string
        product_data: {
          name: string
          description?: string
        }
        unit_amount: number
      }
      quantity: number
    }[] = []

    for (const item of data.items) {
      const service = services.find((s) => s.id === item.serviceId)
      if (!service) continue

      let price = service.price
      let name = service.name

      if (item.optionId) {
        const option = service.options.find((o) => o.id === item.optionId)
        if (option) {
          price += option.price
          name += ` + ${option.name}`
        }
      }

      subtotal += price * item.quantity

      lineItems.push({
        price_data: {
          currency: "eur",
          product_data: {
            name,
            description: service.shortDesc || undefined,
          },
          unit_amount: Math.round(price * 100), // Stripe uses cents
        },
        quantity: item.quantity,
      })
    }

    // Apply promo code if provided
    let discount = 0
    let promoCodeRecord = null
    if (data.promoCode) {
      promoCodeRecord = await prisma.promoCode.findFirst({
        where: {
          code: data.promoCode.toUpperCase(),
          active: true,
          validFrom: { lte: new Date() },
          OR: [
            { validUntil: null },
            { validUntil: { gte: new Date() } },
          ],
        },
      })

      if (promoCodeRecord) {
        if (promoCodeRecord.discountType === "percentage") {
          discount = subtotal * (promoCodeRecord.discountValue / 100)
        } else {
          discount = promoCodeRecord.discountValue
        }
      }
    }

    const total = subtotal - discount

    // Create order in database
    const order = await prisma.order.create({
      data: {
        orderNumber: generateOrderNumber(),
        guestEmail: data.customerEmail,
        guestName: data.customerName,
        guestPhone: data.customerPhone,
        status: "pending",
        paymentStatus: "pending",
        subtotal,
        discount,
        total,
        promoCodeId: promoCodeRecord?.id,
        items: {
          create: data.items.map((item) => {
            const service = services.find((s) => s.id === item.serviceId)!
            const option = item.optionId 
              ? service.options.find((o) => o.id === item.optionId)
              : null
            const price = service.price + (option?.price || 0)
            return {
              serviceId: item.serviceId,
              optionId: item.optionId,
              quantity: item.quantity,
              price,
              total: price * item.quantity,
            }
          }),
        },
      },
    })

    // Create Stripe checkout session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: lineItems,
      mode: "payment",
      success_url: data.successUrl || `${process.env.NEXT_PUBLIC_SITE_URL}/commande/confirmation?order=${order.orderNumber}`,
      cancel_url: data.cancelUrl || `${process.env.NEXT_PUBLIC_SITE_URL}/panier`,
      customer_email: data.customerEmail,
      metadata: {
        orderId: order.id,
        orderNumber: order.orderNumber,
      },
      ...(discount > 0 && {
        discounts: [{
          coupon: await createStripeCoupon(discount, subtotal),
        }],
      }),
    })

    // Update order with Stripe session ID
    await prisma.order.update({
      where: { id: order.id },
      data: { stripePaymentId: session.id },
    })

    return NextResponse.json({
      sessionId: session.id,
      url: session.url,
      orderNumber: order.orderNumber,
    })
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: "Validation error", details: error.errors },
        { status: 400 }
      )
    }
    console.error("Error creating checkout session:", error)
    return NextResponse.json(
      { error: "Erreur lors de la création du paiement" },
      { status: 500 }
    )
  }
}

async function createStripeCoupon(discount: number, subtotal: number): Promise<string> {
  const coupon = await stripe.coupons.create({
    amount_off: Math.round(discount * 100),
    currency: "eur",
    duration: "once",
    name: "Réduction",
  })
  return coupon.id
}


