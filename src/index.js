import { useState } from 'react'
import axios from 'axios'

export default function Home() {
  const [query, setQuery] = useState('')
  const [books, setBooks] = useState([])

  const handleSearch = async () => {
    if (!query.trim()) {
      alert('검색어를 입력하세요.')
      return
    }

    try {
      const response = await axios.get(`/api/naver-books?query=${query}`)
      setBooks(response.data.items) // 네이버 API 결과에서 책 목록 설정
    } catch (error) {
      console.error('API Error:', error)
      alert('책 정보를 가져오는 데 실패했습니다.')
    }
  }

  return (
    <div style={{ padding: '20px' }}>
      <h1>네이버 책 검색</h1>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="책 제목을 입력하세요"
        style={{ marginRight: '10px' }}
      />
      <button onClick={handleSearch}>검색</button>

      <div style={{ marginTop: '20px' }}>
        {books.length > 0 ? (
          <ul>
            {books.map((book, index) => (
              <li key={index} style={{ marginBottom: '20px' }}>
                <img
                  src={book.image}
                  alt={book.title}
                  style={{ width: '100px', height: '150px' }}
                />
                <h3>{book.title}</h3>
                <p>{book.author}</p>
                <a href={book.link} target="_blank" rel="noopener noreferrer">
                  책 보러가기
                </a>
              </li>
            ))}
          </ul>
        ) : (
          <p>검색 결과가 없습니다.</p>
        )}
      </div>
    </div>
  )
}
