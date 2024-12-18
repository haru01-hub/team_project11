// //components/TopicList.tsx

'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import LikeButton from './LikeButton'
import { useSession } from 'next-auth/react'

interface Topic {
  _id: string
  title: string
  description: string
  createdAt: string
  updateAt: string
  authorName: string
  likes: number
  likedBy: string[]
}

export default function TopicList() {
  const { data: session } = useSession()
  const [topics, setTopics] = useState<Topic[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    console.log('Session:', session)
    console.log('User:', session?.user)
    console.log('User name:', session?.user?.name)
    console.log('User email:', session?.user?.email)
  }, [session])

  const userId = session?.user?.email || ''

  useEffect(() => {
    async function fetchTopics() {
      try {
        const res = await fetch(`/api/topics`)
        if (!res.ok) {
          throw new Error('Failed to fetch topics')
        }
        const data = await res.json()

        if (!data.topics || !Array.isArray(data.topics)) {
          throw new Error('Invalid topics data')
        }

        console.log('Fetched topics:', data.topics)
        setTopics(data.topics)
      } catch (error) {
        console.error('Error loading topics:', error)
        setError('Failed to load topics')
      } finally {
        setLoading(false)
      }
    }
    fetchTopics()
  }, [])

  if (loading) return <p>Loading topics...</p>
  if (error) return <p>Error: {error}</p>
  if (topics.length === 0) return <p>No topics found</p>

  return (
    <div>
      {topics.map((topic: Topic) => {
        const date = new Date(topic.createdAt)
        const formattedDate = `${date.getFullYear()}.${String(
          date.getMonth() + 1
        ).padStart(2, '0')}.${String(date.getDate()).padStart(
          2,
          '0'
        )}, ${String(date.getHours()).padStart(2, '0')}:${String(
          date.getMinutes()
        ).padStart(2, '0')}:${String(date.getSeconds()).padStart(2, '0')}`

        return (
          <div
            key={topic._id}
            className="p-4 border border-slate-300 my-3 flex justify-between items-start gap-5"
          >
            <div>
              <p className="text-sm text-gray-500">
                By: {topic.authorName}
                {/* By: {maskUserName(topic.authorName)} */}
              </p>
              <div>{topic.title}</div>
              <div>{topic.description}</div>
              <div className="flex-gap-4">
                <p>{formattedDate}</p>
              </div>
            </div>
            <div className="flex gap-2">
              <LikeButton
                topicId={topic._id}
                initialLikes={topic.likes}
                userId={userId}
              />
            </div>
          </div>
        )
      })}
      <div className="flex justify-end">
        <Link
          className="bg-green-800 text-white font-bold px-4 py-2 rounded-md"
          href="/addTopic"
        >
          Add Write
        </Link>
      </div>
    </div>
  )
}
