import { NextRequest, NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"
import { z } from "zod"

const bookingSchema = z.object({
  email: z.string().email(),
  phone: z.string().min(10),
  name: z.string().min(2),
  serviceType: z.string(),
  date: z.string(),
  time: z.string(),
  address: z.string().optional(),
  city: z.string().optional(),
  postalCode: z.string().optional(),
  problem: z.string().optional(),
  notes: z.string().optional(),
})

// GET /api/booking - Get available slots
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const date = searchParams.get("date")

    if (!date) {
      return NextResponse.json(
        { error: "Date parameter required" },
        { status: 400 }
      )
    }

    // Get existing bookings for the date
    const startOfDay = new Date(date)
    startOfDay.setHours(0, 0, 0, 0)
    const endOfDay = new Date(date)
    endOfDay.setHours(23, 59, 59, 999)

    const existingBookings = await prisma.booking.findMany({
      where: {
        date: {
          gte: startOfDay,
          lte: endOfDay,
        },
        status: { notIn: ["cancelled"] },
      },
      select: { time: true },
    })

    const bookedTimes = existingBookings.map((b) => b.time)

    // Generate available slots
    const allSlots = ["09:00", "10:00", "11:00", "14:00", "15:00", "16:00", "17:00"]
    const availableSlots = allSlots.filter((slot) => !bookedTimes.includes(slot))

    return NextResponse.json({ availableSlots, bookedTimes })
  } catch (error) {
    console.error("Error fetching slots:", error)
    return NextResponse.json(
      { error: "Failed to fetch available slots" },
      { status: 500 }
    )
  }
}

// POST /api/booking - Create a booking
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const data = bookingSchema.parse(body)

    // Check if slot is still available
    const bookingDate = new Date(data.date)
    const existingBooking = await prisma.booking.findFirst({
      where: {
        date: bookingDate,
        time: data.time,
        status: { notIn: ["cancelled"] },
      },
    })

    if (existingBooking) {
      return NextResponse.json(
        { error: "Ce créneau n'est plus disponible" },
        { status: 409 }
      )
    }

    // Create or find lead
    let lead = await prisma.lead.findFirst({
      where: { email: data.email },
    })

    if (!lead) {
      lead = await prisma.lead.create({
        data: {
          email: data.email,
          phone: data.phone,
          firstName: data.name.split(" ")[0],
          lastName: data.name.split(" ").slice(1).join(" "),
          source: "booking_form",
          status: "new",
        },
      })
    }

    // Create booking
    const booking = await prisma.booking.create({
      data: {
        leadId: lead.id,
        email: data.email,
        phone: data.phone,
        name: data.name,
        serviceType: data.serviceType,
        date: bookingDate,
        time: data.time,
        notes: data.notes || `${data.problem || ""}\nAdresse: ${data.address}, ${data.postalCode} ${data.city}`,
        status: "pending",
      },
    })

    // Track conversion
    await prisma.conversion.create({
      data: {
        type: "booking",
        source: "booking_form",
        metadata: JSON.stringify({ serviceType: data.serviceType }),
      },
    })

    // TODO: Send confirmation email
    // TODO: Notify admin

    return NextResponse.json({
      booking,
      message: "Réservation confirmée",
    }, { status: 201 })
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: "Validation error", details: error.errors },
        { status: 400 }
      )
    }
    console.error("Error creating booking:", error)
    return NextResponse.json(
      { error: "Erreur lors de la réservation" },
      { status: 500 }
    )
  }
}


