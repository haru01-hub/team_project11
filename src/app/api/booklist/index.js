import { useSession, signIn, signOut } from 'next-auth/react'
import { useState } from 'react'
import Link from 'next/link'

export default function Home() {
  const { data: session } = useSession()
  const [books, setBooks] = useState([])
  const [searchTitle, setSearchTitle] = useState('')
  const [loading, setLoading] = useState(false)

  const fetchBooks = async () => {
    setLoading(true)
    try {
      const response = await fetch(`/api/books?title=${searchTitle}`)
      const data = await response.json()
      setBooks(data || [])
    } catch (error) {
      console.error('Error fetching books:', error)
    } finally {
      setLoading(false)
    }
  }

  if (!session) {
    return (
      <div>
        <h1>책 쇼핑몰</h1>
        <p>로그인 후 이용 가능합니다.</p>
        <button onClick={() => signIn()}>로그인</button>
      </div>
    )
  }

  return (
    <div>
      <h1>환영합니다, {session.user.name}님!</h1>
      <button onClick={() => signOut()}>로그아웃</button>
      <div>
        <input
          type="text"
          placeholder="책 제목을 입력하세요"
          value={searchTitle}
          onChange={(e) => setSearchTitle(e.target.value)}
        />
        <button onClick={fetchBooks}>검색</button>
      </div>
      {loading ? (
        <p>검색 중...</p>
      ) : (
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '20px',
          }}
        >
          {books.map((book, index) => (
            <div
              key={index}
              style={{ border: '1px solid #ccc', padding: '10px' }}
            >
              <h3>{book.TITLE}</h3>
              <p>{book.AUTHOR}</p>
              <Link href={`/book/${encodeURIComponent(book.TITLE)}`}>
                <a>자세히 보기</a>
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
