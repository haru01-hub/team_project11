//src
'use client'

import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useState, useEffect } from 'react'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'

interface BookReport {
  id: string
  title: string
  content: string
  user_id: string
  created_at: string
}

export default function BookReport() {
  const { data: session, status } = useSession()
  const router = useRouter()
  const supabase = createClientComponentClient()

  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [reports, setReports] = useState<BookReport[]>([])

  // 로그인 체크
  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/login')
    }
  }, [status, router])

  // 독후감 목록 가져오기
  useEffect(() => {
    const fetchReports = async () => {
      if (session?.user?.email) {
        const { data, error } = await supabase
          .from('book_report')
          .select('*')
          .eq('user_id', session.user.email)
          .order('created_at', { ascending: false })

        if (error) {
          console.error('Error fetching reports:', error)
        } else {
          setReports(data || [])
        }
      }
    }

    fetchReports()
  }, [session, supabase])

  // 독후감 저장
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!title || !content) {
      alert('제목과 내용을 모두 입력해주세요.')
      return
    }

    try {
      const { error } = await supabase.from('book_report').insert([
        {
          title,
          content,
          user_id: session?.user?.email,
        },
      ])

      if (error) throw error

      // 입력 필드 초기화
      setTitle('')
      setContent('')

      // 목록 새로고침
      const { data } = await supabase
        .from('book_report')
        .select('*')
        .eq('user_id', session?.user?.email)
        .order('created_at', { ascending: false })

      setReports(data || [])
    } catch (error) {
      console.error('Error inserting report:', error)
      alert('독후감 저장에 실패했습니다.')
    }
  }

  // 독후감 삭제
  const handleDelete = async (id: string) => {
    if (confirm('정말 삭제하시겠습니까?')) {
      try {
        const { error } = await supabase
          .from('book_report')
          .delete()
          .eq('id', id)

        if (error) throw error

        setReports(reports.filter((report) => report.id !== id))
      } catch (error) {
        console.error('Error deleting report:', error)
        alert('삭제에 실패했습니다.')
      }
    }
  }

  if (status === 'loading') {
    return <div>Loading...</div>
  }

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">나도 작가!</h1>

      {/* 독후감 작성 폼 */}
      <form onSubmit={handleSubmit} className="mb-8">
        <div className="mb-4">
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="제목을 입력하세요"
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-4">
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="내용을 입력하세요"
            className="w-full p-2 border border-gray-300 rounded h-40"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          저장하기
        </button>
      </form>

      {/* 독후감 목록 */}
      <div className="space-y-4">
        <h2 className="text-xl font-bold">나의 글 목록</h2>
        {reports.length === 0 ? (
          <p>작성한 글이 없습니다.</p>
        ) : (
          reports.map((report) => (
            <div key={report.id} className="p-4 border border-gray-200 rounded">
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-lg font-bold">{report.title}</h3>
                <button
                  onClick={() => handleDelete(report.id)}
                  className="text-red-500 hover:text-red-700"
                >
                  삭제
                </button>
              </div>
              <p className="whitespace-pre-wrap">{report.content}</p>
              <p className="text-sm text-gray-500 mt-2">
                {new Date(report.created_at).toLocaleDateString()}
              </p>
            </div>
          ))
        )}
      </div>
    </div>
  )
}
