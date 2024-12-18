// 방법 1: 클라이언트 컴포넌트로 유지
'use client'
import Link from 'next/link'
import SelectedBooksPage from '../../components/SelectedBooksPage'
import BookSearch from 'src/components/BookSearch'

export default function BookRank() {
  return (
    <div>
      <SelectedBooksPage />
      <BookSearch />
    </div>
  )
}
