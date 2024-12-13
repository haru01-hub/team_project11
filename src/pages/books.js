import { useState, useEffect } from 'react'
import axios from 'axios'

const BooksPage = () => {
  const [query, setQuery] = useState('')
  const [books, setBooks] = useState([]) // 검색된 책 목록
  const [selectedBooks, setSelectedBooks] = useState({}) // 선택된 책 상태 관리
  const [savedBooks, setSavedBooks] = useState([]) // 저장된 책 목록

  // 검색된 책 불러오기
  const handleSearch = async () => {
    try {
      const response = await axios.get('/api/searchBooks', {
        params: { query },
      })
      setBooks(response.data.books) // 검색된 책 목록 업데이트
    } catch (error) {
      console.error('Error fetching books:', error)
    }
  }

  // 개별 책 선택/해제 함수
  const handleSelectBook = (book) => {
    setSelectedBooks((prev) => {
      const updatedSelection = { ...prev }
      if (updatedSelection[book.id]) {
        delete updatedSelection[book.id] // 선택 해제
      } else {
        updatedSelection[book.id] = book // 새로 선택
      }
      return updatedSelection
    })
  }

  // 선택된 책을 Supabase에 저장
  const saveSelectedBooks = async () => {
    try {
      const response = await axios.post('/api/saveBooks', {
        books: Object.values(selectedBooks),
      })
      console.log('Selected books saved:', response.data)
      // 저장 후 목록 다시 불러오기
      fetchSavedBooks()
    } catch (error) {
      console.error('Error saving books:', error)
    }
  }

  // 저장된 책 불러오기
  const fetchSavedBooks = async () => {
    try {
      const response = await axios.get('/api/getSelectedBooks')
      setSavedBooks(response.data.books)
    } catch (error) {
      console.error('Error fetching saved books:', error)
    }
  }

  // 저장된 책 삭제
  const handleDeleteBook = async (id) => {
    try {
      const response = await axios.post('/api/deleteBook', { id })
      if (response.status === 200) {
        setSavedBooks((prevBooks) => prevBooks.filter((book) => book.id !== id))
        console.log('Book deleted successfully')
      }
    } catch (error) {
      console.error('Error deleting book:', error)
    }
  }

  // 컴포넌트 로드 시 저장된 책 목록 불러오기
  useEffect(() => {
    fetchSavedBooks()
  }, [])

  return (
    <div>
      <h1>Books Page</h1>

      {/* 검색 섹션 */}
      <div>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="책 제목을 입력하세요"
        />
        <button onClick={handleSearch}>검색</button>
      </div>

      {/* 검색 결과 */}
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            <h2>{book.title}</h2>
            <p>{book.author}</p>
            <img src={book.image} alt={book.title} />
            <p>{book.description}</p>
            <button onClick={() => handleSelectBook(book)}>
              {selectedBooks[book.id] ? '선택 해제' : '선택'}
            </button>
          </li>
        ))}
      </ul>

      {/* 선택된 책 저장 버튼 */}
      <button onClick={saveSelectedBooks}>선택한 책 저장</button>

      {/* 선택된 책 목록 */}
      <h3>선택된 책들:</h3>
      <ul>
        {Object.values(selectedBooks).map((book) => (
          <li key={book.id}>
            <h2>{book.title}</h2>
            <p>{book.author}</p>
            <img src={book.image} alt={book.title} />
            <p>{book.description}</p>
          </li>
        ))}
      </ul>

      {/* 저장된 책 목록 */}
      <h3>저장된 책들:</h3>
      <ul>
        {savedBooks.map((book) => (
          <li key={book.id}>
            <h2>{book.title}</h2>
            <p>{book.author}</p>
            <img src={book.image} alt={book.title} />
            <p>{book.description}</p>
            <button onClick={() => handleDeleteBook(book.id)}>삭제</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default BooksPage
