// 'use client' // 브라우저에서 실행되는 클라이언트 컴포넌트임을 명시

// import { useSession } from 'next-auth/react'
// import { useRouter } from 'next/navigation'
// import React, { useState, useEffect } from 'react'

// export default function AddTopicPage() {
//   const { status, data: session } = useSession()
//   const router = useRouter()

//   useEffect(() => {
//     // 세션이 없는 경우 로그인 페이지로 리다이렉트
//     if (status === 'unauthenticated') {
//       router.push('/login')
//     }
//   }, [status, router])

//   const [title, setTitle] = useState('') // 사용자 입력을 받아 저장
//   const [description, setDescription] = useState('')

//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault()
//     if (!title || !description) {
//       alert('Title and description are required')
//       return
//     }
//     try {
//       const res = await fetch('/api/topics', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ title, description }),
//       })
//       if (res.ok) {
//         router.push('/write')
//         router.refresh()
//       } else {
//         throw new Error('Failed to create a topic')
//       }
//     } catch (error) {
//       console.error(error)
//     }
//   }

//   // 세션 확인 중이면 로딩 메시지 표시
//   if (status === 'loading') {
//     return <div>Loading...</div>
//   }

//   return (
//     <div className="items-center px-10">
//       {/* 세로 정렬은 flex-col, gap은 항목 간 간격 */}
//       <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
//         <input
//           className="border border-slate-700 p-4"
//           type="text"
//           placeholder="Topic Title"
//           value={title}
//           onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
//             setTitle(e.target.value)
//           }
//         />
//         <textarea
//           className="border border-slate-500 p-4 h-40"
//           placeholder="Topic Description"
//           value={description}
//           onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
//             setDescription(e.target.value)
//           }
//         />
//         <button className="bg-emerald-300 text-white font-bold px-6 py-3 w-fit rounded-md mt-8">
//           Add Topic
//         </button>
//       </form>
//     </div>
//   )
// }
// ================
// 'use client' // 브라우저에서 실행되는 클라이언트 컴포넌트임을 명시

// import { useSession } from 'next-auth/react'
// import { useRouter } from 'next/navigation'
// import React, { useState, useEffect } from 'react'
// import { AiFillStar, AiOutlineStar } from 'react-icons/ai'

// export default function AddTopicPage() {
//   const { status, data: session } = useSession()
//   const router = useRouter()

//   const [title, setTitle] = useState('') // 사용자 입력을 받아 저장
//   const [description, setDescription] = useState('')
//   const [rating, setRating] = useState(0) // 별점 상태 추가

//   useEffect(() => {
//     // 세션이 없는 경우 로그인 페이지로 리다이렉트
//     if (status === 'unauthenticated') {
//       router.push('/login')
//     }
//   }, [status, router])

//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault()
//     if (!title || !description || rating === 0) {
//       alert('Title, description, and rating are required')
//       return
//     }
//     try {
//       const res = await fetch('/api/topics', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ title, description, rating }), // 별점 포함
//       })
//       if (res.ok) {
//         router.push('/write')
//         router.refresh()
//       } else {
//         throw new Error('Failed to create a topic')
//       }
//     } catch (error) {
//       console.error(error)
//     }
//   }

//   // 세션 확인 중이면 로딩 메시지 표시
//   if (status === 'loading') {
//     return <div>Loading...</div>
//   }

//   return (
//     <div className="items-center px-10">
//       {/* 세로 정렬은 flex-col, gap은 항목 간 간격 */}
//       <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
//         <input
//           className="border border-slate-700 p-4"
//           type="text"
//           placeholder="Topic Title"
//           value={title}
//           onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
//             setTitle(e.target.value)
//           }
//         />
//         <textarea
//           className="border border-slate-500 p-4 h-40"
//           placeholder="Topic Description"
//           value={description}
//           onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
//             setDescription(e.target.value)
//           }
//         />
//         {/* 별점 선택 UI */}
//         <div className="flex items-center gap-2">
//           <p className="text-gray-600 font-bold">Rate:</p>
//           {Array.from({ length: 5 }, (_, index) => {
//             const starIndex = index + 1
//             return (
//               <button
//                 type="button"
//                 key={starIndex}
//                 onClick={() => setRating(starIndex)}
//                 className="p-1 text-yellow-500"
//               >
//                 {starIndex <= rating ? (
//                   <AiFillStar size={24} />
//                 ) : (
//                   <AiOutlineStar size={24} />
//                 )}
//               </button>
//             )
//           })}
//         </div>
//         <button className="bg-emerald-300 text-white font-bold px-6 py-3 w-fit rounded-md mt-8">
//           Add Topic
//         </button>
//       </form>
//     </div>
//   )
// }

'use client'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

export default function AddTopicPage() {
  const { status } = useSession()
  const router = useRouter()

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!title || !description) return alert('Title and description required')

    try {
      const res = await fetch('/api/topics', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title, description }),
      })

      if (res.ok) {
        router.push('/share_review')
      } else {
        throw new Error('Failed to create topic')
      }
    } catch (err) {
      console.error(err)
    }
  }

  if (status === 'loading') return <div>Loading...</div>
  if (status === 'unauthenticated') {
    router.push('/login')
    return null
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="border p-2"
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="border p-2"
      />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2">
        Add Topic
      </button>
    </form>
  )
}
