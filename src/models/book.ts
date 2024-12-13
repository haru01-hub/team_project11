import { supabase } from '../lib/supabase'

// Book 타입 정의
export interface Book {
  new_id: number
  title: string
  author: string
  cover_image: string
  // 필요한 다른 필드들 추가
}

// insertBooksToDatabase 함수 정의
export async function insertBooksToDatabase(books: Book[]) {
  // 새로 추가할 데이터들 순차적으로 처리
  for (let book of books) {
    // 먼저 해당 book이 존재하는지 확인
    const { data: existingBooks, error: selectError } = await supabase
      .from('books')
      .select('new_id')
      .eq('new_id', book.new_id) // 'new_id' 기준으로 조회

    if (selectError) {
      console.error('Error fetching existing book:', selectError.message)
      continue
    }

    if (existingBooks.length === 0) {
      // 'new_id'가 없다면 새로 삽입
      const { data, error } = await supabase.from('books').insert([book])

      if (error) {
        console.error('Error inserting book:', error.message)
      } else {
        console.log('Book inserted:', data)
      }
    } else {
      // 'new_id'가 이미 있다면 업데이트 처리
      const { data, error } = await supabase
        .from('books')
        .update(book)
        .eq('new_id', book.new_id) // 'new_id' 기준으로 업데이트

      if (error) {
        console.error('Error updating book:', error.message)
      } else {
        console.log('Book updated:', data)
      }
    }
  }
}
