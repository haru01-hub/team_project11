'use client'
import { useState, useEffect } from 'react'
import { useSession } from 'next-auth/react'
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai'

interface LikeButtonProps {
  topicId: string
  initialLikes: number
  userId: string
}

export default function LikeButton({
  topicId,
  initialLikes,
  userId,
}: LikeButtonProps) {
  const { data: session } = useSession()
  const [likes, setLikes] = useState<number>(initialLikes)
  const [hasLiked, setHasLiked] = useState<boolean>(false)

  // 서버에서 좋아요 상태를 가져오는 useEffect
  useEffect(() => {
    const fetchLikeStatus = async () => {
      try {
        const res = await fetch(`/api/topics/${topicId}`)
        const data = await res.json()
        console.log('Topic data:', {
          id: topicId,
          authorName: data.topic?.authorName, // authorName 확인
          likes: data.topic?.likes,
          likedBy: data.topic?.likedBy,
          fullData: data.topic, // 전체 데이터 구조 확인
        })

        console.log('Current user:', {
          email: session?.user?.email,
          name: session?.user?.name,
          fullSession: session, // 전체 세션 정보 확인
        })

        if (data && data.topic) {
          setLikes(data.topic.likes || 0)
          setHasLiked(data.topic.likedBy?.includes(session?.user?.email))
        }
      } catch (error) {
        console.error('Error fetching like status:', error)
      }
    }

    fetchLikeStatus()
  }, [topicId, userId])

  // 좋아요를 눌렀을 때 호출되는 함수
  const handleLike = async () => {
    if (!session?.user?.email) {
      console.log('No user session')
      return
    }
    if (hasLiked) {
      console.log('Already liked')
      return
    }

    try {
      const payload = {
        topicId,
        userId: session.user.email,
      }
      console.log('Sending payload:', payload)

      const res = await fetch('/api/topics/like', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      })

      // 응답 전체를 로깅
      console.log('Server response:', {
        status: res.status,
        statusText: res.statusText,
      })

      const data = await res.json()
      console.log('Response data:', data)

      if (!res.ok) {
        throw new Error(data.message || 'Failed to update like status')
      }
      // 성공적인 응답일 경우에만 상태 업데이트
      setLikes(data.likes)
      setHasLiked(true)
    } catch (error: any) {
      console.error('Like operation failed:', {
        error: error.message,
        topicId,
        userId: session.user.email,
      })
    }
  }

  return (
    <button
      onClick={handleLike}
      disabled={hasLiked || !session}
      className={`flex items-center gap-2 p-2 ${
        hasLiked ? 'text-red-500' : 'text-gray-500'
      }`}
    >
      {hasLiked ? <AiFillHeart size={24} /> : <AiOutlineHeart size={24} />}
      {likes}
    </button>
  )
}
