// src/app/api/saveBooks/route.js
import { createClient } from '@supabase/supabase-js'
import { NextResponse } from 'next/server'

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_ANON_KEY
)

export async function POST(request) {
  try {
    const { books } = await request.json() // 요청 본문에서 데이터 추출

    for (const book of books) {
      const { error } = await supabase.from('books').insert([
        {
          title: book.title,
          author: book.author,
          image: book.image,
          description: book.description,
        },
      ])
      if (error) {
        console.error('Error saving book:', error)
        return NextResponse.json(
          { error: `Failed to save book: ${book.title}` },
          { status: 500 }
        )
      }
    }

    return NextResponse.json(
      { message: 'Books saved successfully' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error saving books:', error)
    return NextResponse.json({ error: 'Error saving books' }, { status: 500 })
  }
}
