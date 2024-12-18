// 'use client'

// import { useEffect, useState } from 'react'
// import { useSession } from 'next-auth/react'
// import { useRouter } from 'next/navigation'
// import React from 'react'

// export default function BookSNSPage() {
//   const { data: session } = useSession() // 세션 정보 가져오기
//   const [reviews, setReviews] = useState([]) // 리뷰 목록 상태
//   const [comments, setComments] = useState({}) // 각 리뷰별 댓글 상태
//   const [likedReviews, setLikedReviews] = useState([]) // 좋아요를 누른 리뷰
//   const [showCommentInput, setShowCommentInput] = useState(null) // 댓글 작성란 토글 상태
//   const [newComment, setNewComment] = useState('') // 새 댓글 내용
//   const router = useRouter()

//   useEffect(() => {
//     const storedReviews = localStorage.getItem('reviews')
//     const storedLikedReviews = localStorage.getItem('likedReviews')
//     const storedComments = localStorage.getItem('comments')

//     const reviews = storedReviews ? JSON.parse(storedReviews) : []
//     const likedReviews = storedLikedReviews
//       ? JSON.parse(storedLikedReviews)
//       : []
//     const comments = storedComments ? JSON.parse(storedComments) : {}

//     setReviews(reviews)
//     setLikedReviews(likedReviews)
//     setComments(comments)
//   }, [])

//   const handleLike = (reviewIndex) => {
//     const newLikedReviews = [...likedReviews]
//     const index = newLikedReviews.indexOf(reviewIndex)

//     if (index !== -1) {
//       newLikedReviews.splice(index, 1) // 이미 좋아요를 누른 경우 하트 색상 초기화
//     } else {
//       newLikedReviews.push(reviewIndex) // 좋아요 추가
//     }

//     setLikedReviews(newLikedReviews)
//     localStorage.setItem('likedReviews', JSON.stringify(newLikedReviews))
//   }

//   const handleComment = (reviewIndex) => {
//     if (!newComment.trim()) return // 빈 댓글은 추가하지 않음

//     const newComments = { ...comments }
//     if (!newComments[reviewIndex]) {
//       newComments[reviewIndex] = []
//     }
//     newComments[reviewIndex].push({
//       content: newComment,
//       author: session?.user?.name || '익명',
//     })
//     setComments(newComments)
//     localStorage.setItem('comments', JSON.stringify(newComments))

//     // 댓글 작성 후 초기화
//     setNewComment('')
//     setShowCommentInput(null) // 댓글 작성란 닫기
//   }

//   return (
//     <div className="ml-auto mr-auto w-full max-w-xl mt-10 flex flex-col items-center">
//       <h1 className="text-4xl font-bold text-center mb-6 text-gray-800">
//         공유하기
//       </h1>
//       <p className="text-lg text-center text-gray-600 mb-6">
//         SNS에 공유할 독후감을 선택하세요
//       </p>
//       <div className="w-full">
//         {reviews.length === 0 ? (
//           <p className="text-center text-gray-500">저장된 독후감이 없습니다.</p>
//         ) : (
//           reviews.map((review, index) => (
//             <div
//               key={index}
//               className="mb-6 p-6 border border-gray-300 rounded-lg shadow-lg bg-white"
//             >
//               <h2 className="text-2xl font-semibold text-gray-800">
//                 {review.title}
//               </h2>
//               <p className="text-lg text-gray-700 mt-2">{review.content}</p>

//               <hr className="my-4 border-t border-gray-300" />

//               <div className="flex justify-between items-center mt-4">
//                 <button
//                   onClick={() => handleLike(index)}
//                   className={`text-xl ${
//                     likedReviews.includes(index)
//                       ? 'text-red-500'
//                       : 'text-gray-400'
//                   } hover:text-red-600`}
//                 >
//                   {likedReviews.includes(index) ? '❤️' : '🤍'}
//                 </button>

//                 <button
//                   onClick={() =>
//                     setShowCommentInput(
//                       showCommentInput === index ? null : index
//                     )
//                   } // 댓글 입력란 토글
//                   className="text-blue-500 text-sm font-medium hover:underline"
//                 >
//                   💬 댓글 달기
//                 </button>
//               </div>

//               <div className="mt-4 space-y-2">
//                 {comments[index] &&
//                   comments[index].map((comment, idx) => (
//                     <p key={idx} className="text-sm text-gray-600">
//                       <strong>{comment.author}:</strong> {comment.content}
//                     </p>
//                   ))}
//               </div>

//               {showCommentInput === index && (
//                 <div className="mt-4 flex flex-col items-end">
//                   <textarea
//                     placeholder="댓글을 달아주세요"
//                     value={newComment}
//                     onChange={(e) => setNewComment(e.target.value)}
//                     className="w-full p-4 border border-gray-300 rounded-md resize-none mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                   />
//                   <button
//                     onClick={() => handleComment(index)}
//                     className="text-white bg-blue-500 px-4 py-2 rounded-md hover:bg-blue-600"
//                   >
//                     완료
//                   </button>
//                 </div>
//               )}
//             </div>
//           ))
//         )}
//       </div>
//     </div>
//   )
// }
import React from 'react'

export default function page() {
  return <div>page</div>
}
