'use client'

import Link from 'next/link'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

export function Write() {
  const [title, setTitle] = useState('') // 독후감 제목 상태
  const [content, setContent] = useState('') // 독후감 내용 상태
  const router = useRouter() // Next.js 라우터

  const handleSave = () => {
    // 로컬 스토리지에 저장 (또는 API를 통해 서버에 저장)
    const storedReviews = localStorage.getItem('reviews')
    const reviews = storedReviews ? JSON.parse(storedReviews) : [] // null 체크 추가
    reviews.push({ title, content })
    localStorage.setItem('reviews', JSON.stringify(reviews))

    // 작성된 독후감 보기 페이지로 이동
    router.push('/write') // write 페이지로 이동
  }

  const handleShare = () => {
    // 공유하기 페이지로 이동 (로그인 확인 로직 필요)
    router.push('/book-SNS')
  }

  return (
    <div>
      {/* 독후감 제목과 내용 작성 글상자 추가 */}
      <div className="ml-auto mr-auto w-full max-w-xl mt-5 flex flex-col items-center">
        {' '}
        {/* 최대 너비 조정 */}
        {/* 제목 입력 */}
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="독후감 제목"
          className="w-full p-2 border border-gray-300 rounded-md mb-2"
        />
        {/* 내용 입력 (글상자 크기 조정) */}
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="독후감 내용을 작성하세요..."
          className="w-full h-[200px] p-2 border border-gray-300 rounded-md resize-none mb-2" // 높이를 조정하여 글상자 크기 증가
          style={{ minHeight: '150px' }} // 최소 높이를 설정하여 줄어드는 것을 방지
        />
        {/* 저장 및 공유 버튼을 같은 줄에 배치 */}
        <div className="flex justify-between mt-2 w-full">
          {' '}
          {/* flexbox 사용하여 버튼을 같은 줄에 배치 */}
          {/* 작성된 독후감 보기 링크를 왼쪽에 배치 */}
          {/* <Link href="/write" className="underline hover:text-gray-400 mr-auto">
            ▶ 작성된 독후감 보기
          </Link> */}
          {/* 오른쪽 정렬을 위한 flexbox */}
          <div className="flex justify-end">
            <button
              onClick={handleSave}
              className="p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 mr-2" // 오른쪽 여백 추가
            >
              저장하기
            </button>
            <button
              onClick={handleShare}
              className="p-2 bg-green-500 text-white rounded-md hover:bg-green-600"
            >
              공유하기
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
