import { NextRequest, NextResponse } from 'next/server'
import { createServerClient } from '@/lib/supabase'

export async function GET() {
  try {
    const supabase = createServerClient()
    if (!supabase) return NextResponse.json([])
    
    const { data, error } = await supabase
      .from('leads')
      .select('*')
      .order('created_at', { ascending: false })

    if (error) throw error
    return NextResponse.json(data || [])
  } catch (error) {
    console.error('Error fetching leads:', error)
    return NextResponse.json([])
  }
}

export async function POST(request: NextRequest) {
  try {
    const supabase = createServerClient()
    if (!supabase) return NextResponse.json({ error: 'Database not configured' }, { status: 503 })
    
    const body = await request.json()
    
    // Map form fields to database columns
    const leadData = {
      email: body.email || `${Date.now()}@lead.numelite.fr`, // Email requis par la BDD
      first_name: body.name?.split(' ')[0] || body.first_name || '',
      last_name: body.name?.split(' ').slice(1).join(' ') || body.last_name || '',
      phone: body.phone || null,
      message: body.message || null,
      source: body.source || 'website',
      status: body.status || 'new',
      company: body.company || null,
    }
    
    const { data, error } = await supabase
      .from('leads')
      .insert(leadData)
      .select()
      .single()

    if (error) {
      console.error('Supabase error:', error)
      throw error
    }
    return NextResponse.json(data, { status: 201 })
  } catch (error) {
    console.error('Error creating lead:', error)
    return NextResponse.json({ error: 'Failed to create lead' }, { status: 500 })
  }
}
