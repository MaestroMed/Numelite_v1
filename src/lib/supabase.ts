import { createClient, SupabaseClient } from '@supabase/supabase-js'
import type { Database } from './database.types'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ''
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''

// Check if Supabase is configured
export const isSupabaseConfigured = () => {
  return supabaseUrl.startsWith('http') && supabaseAnonKey.length > 0
}

// Client-side Supabase client (only create if configured)
export const supabase: SupabaseClient<Database> | null = isSupabaseConfigured() 
  ? createClient<Database>(supabaseUrl, supabaseAnonKey)
  : null

// Server-side Supabase client (for API routes)
export function createServerClient(): SupabaseClient<Database> | null {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  
  if (!url || !url.startsWith('http') || !key) {
    return null
  }
  
  return createClient<Database>(url, key)
}

