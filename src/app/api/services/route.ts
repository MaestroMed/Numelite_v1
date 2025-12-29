import { NextRequest, NextResponse } from 'next/server'
import { createServerClient } from '@/lib/supabase'

export async function GET() {
  try {
    const supabase = createServerClient()
    
    if (!supabase) {
      return NextResponse.json([], { status: 200 })
    }
    
    const { data, error } = await supabase
      .from('services')
      .select('*')
      .order('order_index', { ascending: true })

    if (error) throw error
    return NextResponse.json(data || [])
  } catch (error) {
    console.error('Error fetching services:', error)
    return NextResponse.json([], { status: 200 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const supabase = createServerClient()
    
    if (!supabase) {
      return NextResponse.json({ error: 'Database not configured' }, { status: 503 })
    }
    
    const body = await request.json()
    
    const { data, error } = await supabase
      .from('services')
      .insert(body)
      .select()
      .single()

    if (error) throw error
    return NextResponse.json(data, { status: 201 })
  } catch (error) {
    console.error('Error creating service:', error)
    return NextResponse.json({ error: 'Failed to create service' }, { status: 500 })
  }
}

