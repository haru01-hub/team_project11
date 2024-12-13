import Link from 'next/link'

// 책 데이터 타입 정의
type Book = {
  id: string
  name: string
  slug: string
  // 기타 필요한 책 속성들
  description?: string
  price?: number
  image?: string
}

// props 타입 정의
interface BookListProps {
  books: Book[]
}

export default function BookList({ books }: BookListProps) {
  return (
    <div>
      {books.map((book: Book) => (
        <Link key={book.id} href={`/product/${book.slug}`}>
          <div>
            <h3>{book.name}</h3>
            {/* 기타 책 정보 */}
          </div>
        </Link>
      ))}
    </div>
  )
}
