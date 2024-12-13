'use client'

import { useEffect, useState } from 'react'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { Review } from 'src/types/supabase'

interface ReviewSectionProps {
  productId: string
  initialReviews?: Review[] // 초기 리뷰 데이터 (선택적)
}

export default function ReviewSection({
  productId,
  initialReviews = [],
}: ReviewSectionProps) {
  const supabase = createClientComponentClient()
  const [reviews, setReviews] = useState<Review[]>(initialReviews)
  const [content, setContent] = useState('')
  const [user, setUser] = useState<any>(null)

  useEffect(() => {
    const getUser = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser()
      setUser(user)
    }
    getUser()
  }, [supabase])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!content.trim()) return

    try {
      // 리뷰 추가 로직
      setContent('')
      window.location.reload()
    } catch (error) {
      console.error('Failed to add review:', error)
    }
  }

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold mb-4">Reviews</h2>

      {user ? (
        <form onSubmit={handleSubmit} className="mb-6">
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="w-full p-2 border rounded-md"
            placeholder="Write your review..."
            rows={4}
          />
          <button
            type="submit"
            className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md"
          >
            Submit Review
          </button>
        </form>
      ) : (
        <p>Please log in to leave a review</p>
      )}

      <div className="space-y-4">
        {reviews.map((review) => (
          <div key={review.id} className="border p-4 rounded-md">
            <p>{review.content}</p>
            <div className="flex justify-between items-center mt-2">
              <span className="text-sm text-gray-500">
                By {review.user.name}
              </span>
              {user?.id === review.user_id && (
                <button
                  onClick={async () => {
                    // 리뷰 삭제 로직
                    window.location.reload()
                  }}
                  className="text-red-500 text-sm"
                >
                  Delete
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
