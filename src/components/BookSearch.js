import { useState } from 'react'
import axios from 'axios'

const BookSearch = () => {
  const [query, setQuery] = useState('')
  const [books, setBooks] = useState([])

  const searchBooks = async (query) => {
    try {
      const response = await axios.get(`/api/naver-books?query=${query}`)
      setBooks(response.data.items)
    } catch (error) {
      console.error('책 검색 중 오류:', error)
    }
  }

  const handleSearch = () => {
    if (query.trim()) {
      searchBooks(query)
    }
  }

  return (
    <div className="pl-10">
      <h1 className="text-2xl font-bold mb-4"> 네이버 책 검색</h1>
      <input
        type="text"
        placeholder="검색어 입력"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 ease-in-out shadow-sm hover:border-gray-400"
      />
      <button
        onClick={handleSearch}
        className="p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 ease-in-out shadow-sm hover:bg-blue-600 text-gray-400"
      >
        검색
      </button>

      <div>
        {books.map((book, index) => (
          <div key={index}>
            <h3>{book.title}</h3>
            <p>{book.author}</p>
            <img src={book.image} alt={book.title} />
            <a href={book.link} target="_blank" rel="noopener noreferrer">
              상세보기
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}

export default BookSearch
