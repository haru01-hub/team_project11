// 'use client'
// import { useEffect, useState } from 'react'
// import RemoveBtn from './RemoveBtn'
// import Link from 'next/link'
// import StarRating from './StarRating' // StarRating 컴포넌트를 사용

// interface Topic {
//   _id: string
//   title: string
//   description: string
//   createdAt: string
//   updateAt: string
//   authorId?: string | null // authorId는 null 가능
//   likes: number
// }

// export default function TopicList() {
//   const [topics, setTopics] = useState<Topic[]>([])
//   const [loading, setLoading] = useState(true)
//   const [error, setError] = useState<string | null>(null)

//   // 사용자 ID (임시로 설정)
//   const userId = '12345'

//   useEffect(() => {
//     async function fetchTopics() {
//       try {
//         const res = await fetch('/api/topics')
//         if (!res.ok) {
//           throw new Error('Failed to fetch topics')
//         }
//         const data = await res.json()

//         // 응답 데이터 검증
//         if (!data.topics || !Array.isArray(data.topics)) {
//           throw new Error('Invalid topics data')
//         }

//         setTopics(data.topics)
//       } catch (error) {
//         console.error('Error loading topics:', error)
//         setError('Failed to load topics')
//       } finally {
//         setLoading(false)
//       }
//     }
//     fetchTopics()
//   }, [])

//   if (loading) return <p>Loading topics...</p>
//   if (error) return <p>Error: {error}</p>
//   if (topics.length === 0) return <p>No topics found</p>

//   const maskAuthorId = (authorId?: string | null) => {
//     if (!authorId || typeof authorId !== 'string' || authorId.length === 0) {
//       return '***'
//     }
//     const visiblePart = authorId.slice(0, 3)
//     const maskedPart = '*'.repeat(Math.max(authorId.length - 3, 0))
//     return visiblePart + maskedPart
//   }

//   return (
//     <div>
//       {topics.map((topic: Topic) => (
//         <div
//           key={topic._id}
//           className="p-4 border border-slate-300 my-3 flex justify-between items-start gap-5"
//         >
//           <div>
//             <h2 className="text-2xl font-bold">{topic.title}</h2>
//             <p className="text-sm text-gray-500">
//               By: {maskAuthorId(topic.authorId)}
//             </p>
//             <div>{topic.description}</div>
//             <div className="flex-gap-4">
//               <p>Created: {topic.createdAt}</p>
//               <p>Updated: {topic.updateAt}</p>
//             </div>
//           </div>
//           <div className="flex gap-2">
//             <RemoveBtn id={topic._id} />
//             <StarRating topicId={topic._id} userId={userId} />
//           </div>
//         </div>
//       ))}
//       <div className="flex justify-end">
//         <Link
//           className="bg-green-800 text-white font-bold px-4 py-2 rounded-md"
//           href="/addTopic"
//         >
//           Add Write
//         </Link>
//       </div>
//     </div>
//   )
// }

// // 'use client'

// // import { useEffect, useState } from 'react'
// // import LikeButton from './LikeButton'
// // import AddTopicPage from '../app/addTopic/page'

// // interface Topic {
// //   id: number
// //   title: string
// //   description: string
// //   likes: number
// //   hasLiked: boolean
// // }

// // export default function TopicList() {
// //   const [topics, setTopics] = useState<Topic[]>([])
// //   const [loading, setLoading] = useState(true)

// //   useEffect(() => {
// //     async function fetchTopics() {
// //       const res = await fetch('/api/topics')
// //       const data = await res.json()
// //       setTopics(data.topics)
// //       setLoading(false)
// //     }
// //     fetchTopics()
// //   }, [])

// //   if (loading) return <p>Loading...</p>

// //   return (
// //     <div>
// //       {topics.map((topic) => (
// //         <div key={topic.id} className="topic mb-10">
// //           <h2>{topic.title}</h2>
// //           <p>{topic.description}</p>
// // //           <LikeButton
// // //             topicId={topic.id}
// // //             userId="example-user-id" // 로그인된 사용자 ID 필요
// // //             initialLikes={topic.likes}
// // //             initialHasLiked={topic.hasLiked}
// // //           />
// // //           <hr />
// // //         </div>
// // //       ))}
// // //       <AddTopicPage />
// // //     </div>
// // //   )
// // // }

// 'use client'
// import { useEffect, useState } from 'react'
// import LikeButton from './LikeButton'
// import ShareButton from './ShareButton'

// export default function TopicList() {
//   const [topics, setTopics] = useState([])

//   useEffect(() => {
//     async function fetchTopics() {
//       const res = await fetch('/api/topics')
//       const data = await res.json()
//       setTopics(data.topics)
//     }
//     fetchTopics()
//   }, [])

//   return (
//     <div>
//       {topics.map((topic) => (
//         <div key={topic.id} className="border p-4 my-2">
//           <h2>{topic.title}</h2>
//           <p>{topic.description}</p>
//           <LikeButton topicId={topic.id} />
//           <ShareButton topicId={topic.id} />
//         </div>
//       ))}
//     </div>
//   )
// }
