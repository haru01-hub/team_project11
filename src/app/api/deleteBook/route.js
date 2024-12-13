// src/app/api/deleteBook/route.js
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_ANON_KEY
)

export async function POST(request) {
  const { id } = await request.json() // 삭제할 책의 ID를 가져옴

  if (!id) {
    return new Response(JSON.stringify({ error: 'Book ID is required' }), {
      status: 400,
    })
  }

  try {
    const { error } = await supabase.from('books').delete().eq('id', id)

    if (error) {
      console.error('Error deleting book:', error)
      return new Response(JSON.stringify({ error: 'Failed to delete book' }), {
        status: 500,
      })
    }

    return new Response(
      JSON.stringify({ message: 'Book deleted successfully' }),
      { status: 200 }
    )
  } catch (error) {
    console.error('Error deleting book:', error)
    return new Response(JSON.stringify({ error: 'Error deleting book' }), {
      status: 500,
    })
  }
}
