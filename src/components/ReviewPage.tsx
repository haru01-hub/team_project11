'use client'

import { useState, useEffect } from 'react'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import StarRating from './StarRating'

interface Review {
  id: string
  content: string
  rating: number
  created_at: string
  user_id: string
  user: {
    name: string
  }
}

export default function ReviewPage() {
  const [reviews, setReviews] = useState<Review[]>([])
  const [content, setContent] = useState('')
  const [rating, setRating] = useState(0)
  const [user, setUser] = useState<any>(null)
  const supabase = createClientComponentClient()

  useEffect(() => {
    fetchReviews()
    checkUser()
  }, [])

  const checkUser = async () => {
    const {
      data: { user },
    } = await supabase.auth.getUser()
    setUser(user)
  }

  const fetchReviews = async () => {
    const { data } = await supabase
      .from('reviews')
      .select(
        `
        *,
        user:users(name)
      `
      )
      .order('created_at', { ascending: false })

    if (data) setReviews(data)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!content.trim() || !rating) return

    try {
      const { error } = await supabase.from('reviews').insert({
        content,
        rating,
        user_id: user.id,
      })

      if (error) throw error

      setContent('')
      setRating(0)
      fetchReviews()
    } catch (error) {
      console.error('Error adding review:', error)
    }
  }

  const handleDelete = async (reviewId: string) => {
    try {
      const { error } = await supabase
        .from('reviews')
        .delete()
        .eq('id', reviewId)
        .eq('user_id', user.id)

      if (error) throw error

      fetchReviews()
    } catch (error) {
      console.error('Error deleting review:', error)
    }
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8">Book Reviews</h1>

      {user ? (
        <form onSubmit={handleSubmit} className="mb-8">
          <div className="mb-4">
            <StarRating rating={rating} onRatingChange={setRating} />
          </div>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="w-full p-2 border rounded-md mb-2"
            rows={4}
            placeholder="Write your review..."
          />
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded-md"
          >
            Submit Review
          </button>
        </form>
      ) : (
        <p className="mb-8">Please log in to write a review</p>
      )}

      <div className="space-y-6">
        {reviews.map((review) => (
          <div key={review.id} className="border p-4 rounded-lg">
            <div className="flex justify-between items-start">
              <div>
                <StarRating rating={review.rating} readonly />
                <p className="mt-2">{review.content}</p>
                <p className="text-sm text-gray-500 mt-2">
                  By {review.user.name}
                </p>
              </div>
              {user?.id === review.user_id && (
                <button
                  onClick={() => handleDelete(review.id)}
                  className="text-red-500"
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
