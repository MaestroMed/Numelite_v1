import { NextRequest, NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"
import { z } from "zod"

const contactSchema = z.object({
  firstName: z.string().min(1, "Prénom requis"),
  lastName: z.string().min(1, "Nom requis"),
  email: z.string().email("Email invalide"),
  phone: z.string().optional(),
  subject: z.string().min(1, "Sujet requis"),
  message: z.string().min(10, "Message trop court"),
  newsletter: z.boolean().optional(),
})

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const data = contactSchema.parse(body)

    // Create or update lead
    let lead = await prisma.lead.findFirst({
      where: { email: data.email },
    })

    if (!lead) {
      lead = await prisma.lead.create({
        data: {
          email: data.email,
          phone: data.phone,
          firstName: data.firstName,
          lastName: data.lastName,
          source: "contact_form",
          status: "new",
        },
      })
    }

    // Add activity
    await prisma.leadActivity.create({
      data: {
        leadId: lead.id,
        type: "email",
        content: `Formulaire de contact - ${data.subject}: ${data.message}`,
      },
    })

    // Track conversion
    await prisma.conversion.create({
      data: {
        type: "lead",
        source: "contact_form",
        metadata: JSON.stringify({ subject: data.subject }),
      },
    })

    // TODO: Send confirmation email to user
    // TODO: Send notification email to admin

    return NextResponse.json({
      success: true,
      message: "Message envoyé avec succès",
    })
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: "Validation error", details: error.errors },
        { status: 400 }
      )
    }
    console.error("Error processing contact form:", error)
    return NextResponse.json(
      { error: "Erreur lors de l'envoi du message" },
      { status: 500 }
    )
  }
}


