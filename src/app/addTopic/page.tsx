'use client' // 브라우저에서 실행되는 클라이언트 컴포넌트임을 명시

import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import React, { useState, useEffect } from 'react'

export default function AddTopicPage() {
  const { status, data: session } = useSession()
  const router = useRouter()

  const [title, setTitle] = useState('') // 사용자 입력을 받아 저장
  const [description, setDescription] = useState('')

  useEffect(() => {
    // 세션이 없는 경우 로그인 페이지로 리다이렉트
    if (status === 'unauthenticated') {
      router.push('/login')
    }
  }, [status, router])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!title || !description) {
      alert('Title, description, and rating are required')
      return
    }
    try {
      const res = await fetch('/api/topics', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title, description }), // 별점 포함
      })
      if (res.ok) {
        alert('Topic successfully created!')
        setTitle('') // 제목 초기화
        setDescription('') // 설명 초기화
        router.push('/review-01')
      } else {
        throw new Error('Failed to create a topic')
      }
    } catch (error) {
      console.error(error)
    }
  }

  // 세션 확인 중이면 로딩 메시지 표시
  if (status === 'loading') {
    return <div>Loading...</div>
  }

  return (
    <div className="items-center px-10">
      {/* 세로 정렬은 flex-col, gap은 항목 간 간격 */}
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <input
          className="border border-slate-700 p-4"
          type="text"
          placeholder="Topic Title"
          value={title}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setTitle(e.target.value)
          }
        />
        <textarea
          className="border border-slate-500 p-4 h-40"
          placeholder="Topic Description"
          value={description}
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
            setDescription(e.target.value)
          }
        />
        <button className="bg-emerald-300 text-white font-bold px-6 py-3 w-fit rounded-md mt-8">
          Add Topic
        </button>
      </form>
    </div>
  )
}
