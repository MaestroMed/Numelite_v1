import { NextRequest, NextResponse } from 'next/server'
import { createServerClient } from '@/lib/supabase'

export async function GET() {
  try {
    const supabase = createServerClient()
    if (!supabase) return NextResponse.json([])
    
    const { data, error } = await supabase
      .from('portfolio_items')
      .select('*')
      .order('created_at', { ascending: false })

    if (error) throw error
    return NextResponse.json(data || [])
  } catch (error) {
    console.error('Error fetching portfolio items:', error)
    return NextResponse.json([])
  }
}

export async function POST(request: NextRequest) {
  try {
    const supabase = createServerClient()
    if (!supabase) return NextResponse.json({ error: 'Database not configured' }, { status: 503 })
    
    const body = await request.json()
    
    const { data, error } = await supabase
      .from('portfolio_items')
      .insert(body)
      .select()
      .single()

    if (error) throw error
    return NextResponse.json(data, { status: 201 })
  } catch (error) {
    console.error('Error creating portfolio item:', error)
    return NextResponse.json({ error: 'Failed to create portfolio item' }, { status: 500 })
  }
}

