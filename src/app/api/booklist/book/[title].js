import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

export default function BookDetail() {
  const router = useRouter()
  const { title } = router.query

  const [bookDetails, setBookDetails] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (title) {
      const fetchBookDetails = async () => {
        try {
          const response = await fetch(`/api/books?title=${title}`)
          const data = await response.json()
          setBookDetails(data[0] || null)
        } catch (error) {
          console.error('Error fetching book details:', error)
        } finally {
          setLoading(false)
        }
      }

      fetchBookDetails()
    }
  }, [title])

  if (loading) return <p>로딩 중...</p>

  if (!bookDetails) return <p>책 정보를 찾을 수 없습니다.</p>

  return (
    <div>
      <h1>{bookDetails.TITLE}</h1>
      <p>
        <strong>저자:</strong> {bookDetails.AUTHOR}
      </p>
      <p>
        <strong>출판사:</strong> {bookDetails.PUBLISHER}
      </p>
      <p>
        <strong>발행연도:</strong> {bookDetails.PUB_YEAR}
      </p>
      <button onClick={() => alert('장바구니에 추가되었습니다!')}>
        장바구니에 추가
      </button>
    </div>
  )
}
