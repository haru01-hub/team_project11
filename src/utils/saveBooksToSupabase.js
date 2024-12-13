// utils/saveBooksToSupabase.js
import { createClient } from '@supabase/supabase-js'
import fetchBookData from 'utils/fetchBookData'

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_ANON_KEY
)

const saveBooksToSupabase = async () => {
  const books = await fetchBookData() // 네이버 API에서 책 데이터 가져오기

  if (books.length === 0) {
    console.log('No books to insert')
    return
  }

  for (const book of books) {
    const { error } = await supabase.from('books').upsert([
      {
        title: book.title,
        author: book.author,
        image: book.image,
        description: book.description,
      },
    ])

    if (error) {
      console.error('Error inserting book:', error)
    } else {
      console.log('Book inserted successfully:', book.title)
    }
  }
}

// 실행
saveBooksToSupabase()
