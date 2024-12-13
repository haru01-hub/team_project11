// 'use client'
// import { useState, useEffect } from 'react'
// import { AiFillStar, AiOutlineStar } from 'react-icons/ai'

// interface StarRatingProps {
//   topicId: string
//   userId: string
// }

// export default function StarRating({ topicId, userId }: StarRatingProps) {
//   const [userRating, setUserRating] = useState<number>(0) // 사용자가 선택한 점수
//   const [hasRated, setHasRated] = useState<boolean>(false) // 이미 평가했는지 여부

//   useEffect(() => {
//     const fetchUserRating = async () => {
//       try {
//         const res = await fetch(
//           `/api/topics/${topicId}/rating?userId=${userId}`
//         )
//         if (!res.ok) {
//           throw new Error('Failed to fetch user rating')
//         }
//         const data = await res.json()
//         if (data.userRating) {
//           setUserRating(data.userRating)
//           setHasRated(true)
//         }
//       } catch (error) {
//         console.error('Error fetching user rating:', error)
//       }
//     }

//     fetchUserRating()
//   }, [topicId, userId])

//   const handleRating = async (rating: number) => {
//     if (hasRated) return // 이미 평가했다면 무시

//     try {
//       const res = await fetch('/api/topics/rating', {
//         method: 'POST',
//         body: JSON.stringify({ topicId, userId, rating }),
//         headers: { 'Content-Type': 'application/json' },
//       })

//       if (!res.ok) {
//         throw new Error('Failed to submit rating')
//       }

//       const data = await res.json()
//       setUserRating(rating)
//       setHasRated(true)
//     } catch (error) {
//       console.error('Error submitting rating:', error)
//     }
//   }

//   return (
//     <div className="flex items-center gap-1">
//       {Array.from({ length: 5 }, (_, index) => {
//         const starIndex = index + 1 // 1부터 5까지
//         return (
//           <button
//             key={starIndex}
//             onClick={() => handleRating(starIndex)}
//             disabled={hasRated} // 평가 후 버튼 비활성화
//             className="p-1 text-yellow-500"
//           >
//             {starIndex <= userRating ? (
//               <AiFillStar size={24} />
//             ) : (
//               <AiOutlineStar size={24} />
//             )}
//           </button>
//         )
//       })}
//       <span className="text-gray-500 text-sm">
//         {hasRated ? `You rated ${userRating}/5` : 'Click to rate'}
//       </span>
//     </div>
//   )
// }

'use client'

interface StarRatingProps {
  rating: number
  onRatingChange?: (rating: number) => void
  readonly?: boolean
}

export default function StarRating({
  rating,
  onRatingChange,
  readonly = false,
}: StarRatingProps) {
  return (
    <div className="flex">
      {[1, 2, 3, 4, 5].map((star) => (
        <button
          key={star}
          type={readonly ? 'button' : 'submit'}
          onClick={() => !readonly && onRatingChange?.(star)}
          className={`text-2xl ${
            readonly ? 'cursor-default' : 'cursor-pointer'
          }`}
        >
          {star <= rating ? '★' : '☆'}
        </button>
      ))}
    </div>
  )
}
