// src/app/api/getSelectedBooks/route.js
import { createClient } from '@supabase/supabase-js'
import { NextResponse } from 'next/server'

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_ANON_KEY
)

export async function GET() {
  try {
    const { data, error } = await supabase.from('books').select('*')
    if (error) throw error

    return NextResponse.json({ books: data })
  } catch (error) {
    console.error('Error fetching selected books:', error)
    return NextResponse.json(
      { error: 'Failed to fetch selected books' },
      { status: 500 }
    )
  }
}
