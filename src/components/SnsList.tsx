// 'use client'

// import React, { useEffect, useState } from 'react'
// import RemoveBtn from 'src/components/RemoveBtn' // 삭제 버튼 컴포넌트
// import Link from 'next/link'
// import { HiPencilAlt } from 'react-icons/hi'

// interface Review {
//   userId: string
//   rating: number
//   review: string
// }

// interface Sns {
//   _id: string
//   title: string
//   description: string
//   authorName: string
//   createdAt: string
//   updatedAt: string
//   reviews: Review[] // 리뷰 배열 추가
// }

// export default function SnsList() {
//   const [snsList, setSnsList] = useState<Sns[]>([])
//   const [loading, setLoading] = useState(true)
//   const [error, setError] = useState<string | null>(null)

//   useEffect(() => {
//     async function fetchSns() {
//       try {
//         const res = await fetch(`/api/sns`)
//         if (!res.ok) {
//           throw new Error('Failed to fetch SNS list')
//         }
//         const data = await res.json()
//         setSnsList(data.sns) // API 응답에서 sns 배열 가져오기
//       } catch (error) {
//         console.error('Error loading SNS:', error)
//         setError('Failed to load SNS')
//       } finally {
//         setLoading(false)
//       }
//     }
//     fetchSns()
//   }, [])

//   if (loading) return <p>Loading SNS...</p>
//   if (error) return <p>Error: {error}</p>
//   if (!snsList || snsList.length === 0) return <p>No SNS found</p>

//   const formatDate = (dateString: string) => {
//     return new Date(dateString).toLocaleString()
//   }

//   return (
//     <>
//       {snsList.map((sns) => (
//         <div
//           key={sns._id}
//           className="p-4 border border-slate-300 my-3 flex justify-between items-start gap-5"
//         >
//           <div>
//             <h2 className="text-2xl font-bold">{sns.title}</h2>
//             <div>{sns.description}</div>
//             <div className="flex gap-4">
//               <p>Author: {sns.authorName}</p>
//               <p>Created: {formatDate(sns.createdAt)}</p>
//               <p>Updated: {formatDate(sns.updatedAt)}</p>
//             </div>
//             {/* 리뷰 표시 */}
//             {sns.reviews.length > 0 && (
//               <div className="mt-2">
//                 <h3 className="font-semibold">Reviews:</h3>
//                 <ul>
//                   {sns.reviews.map((review, index) => (
//                     <li key={index}>
//                       <strong>{review.userId}:</strong> {review.review} (Rating:{' '}
//                       {review.rating})
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             )}
//           </div>
//           <div className="flex gap-2">
//             <RemoveBtn id={sns._id} />
//             <Link href={`/editSns/${sns._id}`}>
//               <HiPencilAlt size={24} />
//             </Link>
//           </div>
//         </div>
//       ))}
//     </>
//   )
// }

// 'use client'

// import React, { useEffect, useState } from 'react'
// import RemoveBtn from 'src/components/RemoveBtn' // 삭제 버튼 컴포넌트
// import Link from 'next/link'
// import { HiPencilAlt } from 'react-icons/hi'

// interface Review {
//   userId: string
//   rating: number
//   review: string
// }

// interface Sns {
//   _id: string
//   title: string
//   description: string
//   authorName: string
//   createdAt: string
//   updatedAt: string
//   reviews: Review[] // 리뷰 배열 추가
// }

// export default function SnsList() {
//   const [snsList, setSnsList] = useState<Sns[]>([])
//   const [loading, setLoading] = useState(true)
//   const [error, setError] = useState<string | null>(null)

//   useEffect(() => {
//     async function fetchSns() {
//       try {
//         // API 경로 수정: app/api/sns/route.ts로 요청
//         const res = await fetch('/api/sns')
//         if (!res.ok) {
//           throw new Error('Failed to fetch SNS list')
//         }
//         const data = await res.json()
//         setSnsList(data.sns) // API 응답에서 sns 배열 가져오기
//       } catch (error) {
//         console.error('Error loading SNS:', error)
//         setError('Failed to load SNS')
//       } finally {
//         setLoading(false)
//       }
//     }
//     fetchSns()
//   }, [])

//   if (loading) return <p>Loading SNS...</p>
//   if (error) return <p>Error: {error}</p>
//   if (!snsList || snsList.length === 0) return <p>No SNS found</p>

//   const formatDate = (dateString: string) => {
//     return new Date(dateString).toLocaleString()
//   }

//   return (
//     <>
//       {snsList.map((sns) => (
//         <div
//           key={sns._id}
//           className="p-4 border border-slate-300 my-3 flex justify-between items-start gap-5"
//         >
//           <div>
//             <h2 className="text-2xl font-bold">{sns.title}</h2>
//             <div>{sns.description}</div>
//             <div className="flex gap-4">
//               <p>Author: {sns.authorName}</p>
//               <p>Created: {formatDate(sns.createdAt)}</p>
//               <p>Updated: {formatDate(sns.updatedAt)}</p>
//             </div>
//             {/* 리뷰 표시 */}
//             {sns.reviews.length > 0 && (
//               <div className="mt-2">
//                 <h3 className="font-semibold">Reviews:</h3>
//                 <ul>
//                   {sns.reviews.map((review, index) => (
//                     <li key={index}>
//                       <strong>{review.userId}:</strong> {review.review} (Rating:{' '}
//                       {review.rating})
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             )}
//           </div>
//           <div className="flex gap-2">
//             <RemoveBtn id={sns._id} />
//             <Link href={`/editSns/${sns._id}`}>
//               <HiPencilAlt size={24} />
//             </Link>
//           </div>
//         </div>
//       ))}
//     </>
//   )
// }
// components/SnsList.tsx
// 'use client'

// import React, { useEffect, useState } from 'react'
// import RemoveBtn from 'src/components/RemoveBtn'
// import Link from 'next/link'
// import { HiPencilAlt } from 'react-icons/hi'

// interface Review {
//   _id: string
//   userId: string
//   rating: number
//   review: string
//   replies: { userId: string; reply: string; createdAt: string }[] // 대댓글
// }

// interface Sns {
//   _id: string
//   title: string
//   description: string
//   authorName: string
//   createdAt: string
//   updatedAt: string
//   reviews: Review[] // 리뷰 배열
// }

// export default function SnsList() {
//   const [snsList, setSnsList] = useState<Sns[]>([])
//   const [loading, setLoading] = useState(true)
//   const [error, setError] = useState<string | null>(null)
//   const [newReplies, setNewReplies] = useState<Record<string, string>>({})

//   useEffect(() => {
//     async function fetchSns() {
//       try {
//         const res = await fetch('/api/sns')
//         if (!res.ok) {
//           throw new Error('Failed to fetch SNS list')
//         }
//         const data = await res.json()
//         setSnsList(data.sns)
//       } catch (error) {
//         console.error('Error loading SNS:', error)
//         setError('Failed to load SNS')
//       } finally {
//         setLoading(false)
//       }
//     }
//     fetchSns()
//   }, [])

//   const handleReplyChange = (
//     e: React.ChangeEvent<HTMLInputElement>,
//     reviewId: string
//   ) => {
//     setNewReplies((prev) => ({
//       ...prev,
//       [reviewId]: e.target.value, // 각 리뷰별로 대댓글 값을 관리
//     }))
//   }

//   const handleReplySubmit = async (snsId: string, reviewId: string) => {
//     const newReply = newReplies[reviewId]
//     if (!newReply) return

//     const response = await fetch(`/api/sns/${snsId}/reviews/${reviewId}`, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({
//         userId: 'CurrentUser', // 실제 사용자 ID로 바꿔주세요
//         reply: newReply,
//       }),
//     })

//     if (response.ok) {
//       // 대댓글을 추가한 후 SNS 목록을 새로 고침하거나 해당 SNS 업데이트
//       const updatedSns = await response.json()
//       setSnsList((prevList) =>
//         prevList.map((sns) => (sns._id === snsId ? updatedSns.sns : sns))
//       )
//       setNewReplies((prev) => ({
//         ...prev,
//         [reviewId]: '', // 대댓글 입력 후 초기화
//       }))
//     } else {
//       alert('Failed to add reply')
//     }
//   }

//   if (loading) return <p>Loading SNS...</p>
//   if (error) return <p>Error: {error}</p>
//   if (!snsList || snsList.length === 0) return <p>No SNS found</p>

//   const formatDate = (dateString: string) => {
//     return new Date(dateString).toLocaleString()
//   }

//   return (
//     <>
//       {snsList.map((sns) => (
//         <div
//           key={sns._id}
//           className="p-4 border border-slate-300 my-3 flex justify-between items-start gap-5"
//         >
//           <div>
//             <h2 className="text-2xl font-bold">{sns.title}</h2>
//             <div>{sns.description}</div>
//             <div className="flex gap-4">
//               <p>Author: {sns.authorName}</p>
//               <p>Created: {formatDate(sns.createdAt)}</p>
//               <p>Updated: {formatDate(sns.updatedAt)}</p>
//             </div>

//             {/* 리뷰 표시 */}
//             {sns.reviews.length > 0 && (
//               <div className="mt-2">
//                 <h3 className="font-semibold">Reviews:</h3>
//                 <ul>
//                   {sns.reviews.map((review) => (
//                     <li key={review._id}>
//                       <strong>{review.userId}:</strong> {review.review} (Rating:{' '}
//                       {review.rating})
//                       <div>
//                         {/* replies가 배열인지 확인하고, 배열일 경우에만 처리 */}
//                         {Array.isArray(review.replies) &&
//                           review.replies.length > 0 && (
//                             <ul>
//                               {review.replies.map((reply, idx) => (
//                                 <li key={idx}>
//                                   <strong>{reply.userId}:</strong> {reply.reply}
//                                 </li>
//                               ))}
//                             </ul>
//                           )}
//                         {/* 대댓글 입력 */}
//                         <input
//                           type="text"
//                           value={newReplies[review._id] || ''} // 각 리뷰에 대해 상태를 다르게 처리
//                           onChange={(e) => handleReplyChange(e, review._id)} // 해당 리뷰의 _id를 넘겨줌
//                           placeholder="Write a reply..."
//                         />
//                         <button
//                           onClick={() => handleReplySubmit(sns._id, review._id)}
//                         >
//                           Reply
//                         </button>
//                       </div>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             )}
//           </div>
//           <div className="flex gap-2">
//             <RemoveBtn id={sns._id} />
//             <Link href={`/editSns/${sns._id}`}>
//               <HiPencilAlt size={24} />
//             </Link>
//           </div>
//         </div>
//       ))}
//     </>
//   )
// }
'use client'

import React, { useEffect, useState } from 'react'
import RemoveBtn from 'src/components/RemoveBtn'
import Link from 'next/link'
import { HiPencilAlt } from 'react-icons/hi'

interface Review {
  _id: string
  userId: string
  rating: number
  review: string
  replies: { userId: string; reply: string; createdAt: string }[]
}

interface Sns {
  _id: string
  title: string
  description: string
  authorName: string
  createdAt: string
  updatedAt: string
  reviews: Review[]
}

export default function SnsList() {
  const [snsList, setSnsList] = useState<Sns[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  // 상태를 각 리뷰별로 구분할 수 있도록 변경
  const [replies, setReplies] = useState<{ [key: string]: string }>({})

  useEffect(() => {
    async function fetchSns() {
      try {
        const res = await fetch('/api/sns')
        if (!res.ok) {
          throw new Error('Failed to fetch SNS list')
        }
        const data = await res.json()
        setSnsList(data.sns)
      } catch (error) {
        console.error('Error loading SNS:', error)
        setError('Failed to load SNS')
      } finally {
        setLoading(false)
      }
    }
    fetchSns()
  }, [])

  const handleReplyChange = (
    reviewId: string,
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setReplies((prevReplies) => ({
      ...prevReplies,
      [reviewId]: e.target.value,
    }))
  }

  const handleReplySubmit = async (snsId: string, reviewId: string) => {
    const newReply = replies[reviewId]
    if (!newReply) return

    const response = await fetch(`/api/sns/${snsId}/${reviewId}/route`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        userId: 'CurrentUser', // 실제 사용자 ID로 바꿔주세요
        reply: newReply,
      }),
    })

    if (response.ok) {
      const updatedSns = await response.json()
      setSnsList((prevList) =>
        prevList.map((sns) => (sns._id === snsId ? updatedSns.sns : sns))
      )
      setReplies((prevReplies) => ({
        ...prevReplies,
        [reviewId]: '',
      }))
    } else {
      alert('Failed to reply')
    }
  }

  if (loading) return <p>Loading SNS...</p>
  if (error) return <p>Error: {error}</p>
  if (!snsList || snsList.length === 0) return <p>No SNS found</p>

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleString()
  }

  return (
    <>
      {snsList.map((sns) => (
        <div
          key={sns._id}
          className="p-4 border border-slate-300 my-3 flex justify-between items-start gap-5"
        >
          <div>
            <h2 className="text-2xl font-bold">{sns.title}</h2>
            <div>{sns.description}</div>
            <div className="flex gap-4">
              <p>Author: {sns.authorName}</p>
              <p>Created: {formatDate(sns.createdAt)}</p>
              <p>Updated: {formatDate(sns.updatedAt)}</p>
            </div>

            {/* 리뷰 표시 */}
            {sns.reviews.length > 0 && (
              <div className="mt-2">
                <h3 className="font-semibold">Reviews:</h3>
                <ul>
                  {sns.reviews.map((review) => (
                    <li key={review._id}>
                      <strong>{review.userId}:</strong> {review.review} (Rating:{' '}
                      {review.rating})
                      <div>
                        {review.replies && review.replies.length > 0 && (
                          <ul>
                            {review.replies.map((reply, idx) => (
                              <li key={idx}>
                                <strong>{reply.userId}:</strong> {reply.reply}
                              </li>
                            ))}
                          </ul>
                        )}

                        {/* 대댓글 작성 입력란 */}
                        <input
                          type="text"
                          value={replies[review._id] || ''}
                          onChange={(e) => handleReplyChange(review._id, e)}
                          placeholder="Write a reply..."
                        />
                        <button
                          onClick={() => handleReplySubmit(sns._id, review._id)}
                        >
                          Reply
                        </button>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
          <div className="flex gap-2">
            <RemoveBtn id={sns._id} />
            <Link href={`/editSns/${sns._id}`}>
              <HiPencilAlt size={24} />
            </Link>
          </div>
        </div>
      ))}
    </>
  )
}
