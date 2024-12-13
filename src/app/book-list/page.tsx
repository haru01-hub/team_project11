// 방법 1: 클라이언트 컴포넌트로 유지
'use client'
import Link from 'next/link'
import SelectedBooksPage from 'src/components/SelectedBooksPage'

export default function BookRank() {
  // async 제거
  return (
    <div>
      <SelectedBooksPage />
    </div>
  )
}
