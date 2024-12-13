// src/components/SelectedBooksPage.tsx
import { useState, useEffect } from 'react'
import axios from 'axios'
import Link from 'next/link'

// Book 데이터 타입 정의
interface Book {
  id: number
  image: string
  title: string
  author: string
}

const SelectedBooksPage = () => {
  const [books, setBooks] = useState<Book[]>([]) // 타입을 Book[]로 설정

  useEffect(() => {
    const fetchSelectedBooks = async () => {
      try {
        const response = await axios.get('/api/getSelectedBooks')
        setBooks(response.data.books) // 타입이 맞는지 확인
      } catch (error) {
        console.error('Error fetching selected books:', error)
      }
    }

    fetchSelectedBooks()
  }, [])

  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '50px' }}>
      <h1>with books</h1>
      <ul
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '16px',
        }}
      >
        {books.map((book) => (
          <li
            key={book.id}
            style={{
              border: '1px solid gray',
              padding: '10px',
              listStyle: 'none',
              boxSizing: 'border-box',
              borderRadius: '8px',
            }}
          >
            <img
              src={book.image}
              alt={book.title}
              style={{ width: '100%', objectFit: 'cover' }}
            />
            <h2 className="text-lg font-semibold">{book.title}</h2>
            <p className="text-sm text-gray-500">{book.author}</p>
            <div className="flex text-gray-800">
              <Link href="/review-01">
                <p className="p-2 bg-gray-100 rounded-xl mt-5 mr-5 hover:bg-gray-300">
                  리뷰보러가기
                </p>
              </Link>
              {/* <Link href="/product">
                <p className="p-2 bg-gray-100 rounded-xl mt-5 hover:bg-gray-300">
                  구매하기
                </p>
              </Link> */}
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default SelectedBooksPage
