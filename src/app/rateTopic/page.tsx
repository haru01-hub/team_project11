// 'use client'

// import { useSession } from 'next-auth/react'
// import { useRouter } from 'next/navigation'
// import React, { useState, useEffect } from 'react'
// import { AiFillStar, AiOutlineStar } from 'react-icons/ai'

// export default function AddTopicPage() {
//   const { status, data: session } = useSession()
//   const router = useRouter()

//   const [title, setTitle] = useState('')
//   const [description, setDescription] = useState('')
//   const [rating, setRating] = useState(0)

//   useEffect(() => {
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
//       const res = await fetch('/api/rate', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ title, description, rate: rating }), // rate로 전송
//       })
//       if (res.ok) {
//         alert('Rate successfully created!')
//         setTitle('')
//         setDescription('')
//         setRating(0)
//         router.push('/rateout')
//       } else {
//         throw new Error('Failed to create a rate')
//       }
//     } catch (error) {
//       console.error(error)
//     }
//   }

//   if (status === 'loading') {
//     return <div>Loading...</div>
//   }

//   return (
//     <div className="items-center px-10">
//       <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
//         <input
//           className="border border-slate-700 p-4"
//           type="text"
//           placeholder="Topic Title"
//           value={title}
//           onChange={(e) => setTitle(e.target.value)}
//         />
//         <textarea
//           className="border border-slate-500 p-4 h-40"
//           placeholder="Topic Description"
//           value={description}
//           onChange={(e) => setDescription(e.target.value)}
//         />
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

// // 'use client'

// // import { useSession } from 'next-auth/react'
// // import { useRouter } from 'next/navigation'
// // import React, { useState, useEffect } from 'react'
// // import { AiFillStar, AiOutlineStar } from 'react-icons/ai'

// // export default function AddTopicPage() {
// //   const { status, data: session } = useSession()
// //   const router = useRouter()

// //   const [title, setTitle] = useState('')
// //   const [description, setDescription] = useState('')
// //   const [rating, setRating] = useState(0)

// //   useEffect(() => {
// //     if (status === 'unauthenticated') {
// //       router.push('/login')
// //     }
// //   }, [status, router])

// //   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
// //     e.preventDefault()
// //     if (!title || !description || rating === 0) {
// //       alert('Title, description, and rating are required')
// //       return
// //     }
// //     try {
// //       const res = await fetch('/api/rate', {
// //         method: 'POST',
// //         headers: {
// //           'Content-Type': 'application/json',
// //         },
// //         body: JSON.stringify({
// //           title,
// //           description,
// //           rate: rating,
// //           authorName: session?.user?.name || 'noname',
// //         }), // authorName 포함
// //       })
// //       if (res.ok) {
// //         alert('Rate successfully created!')
// //         setTitle('')
// //         setDescription('')
// //         setRating(0)
// //         router.push('/rateout')
// //       } else {
// //         throw new Error('Failed to create a rate')
// //       }
// //     } catch (error) {
// //       console.error(error)
// //     }
// //   }

// //   if (status === 'loading') {
// //     return <div>Loading...</div>
// //   }

// //   return (
// //     <div className="items-center px-10">
// //       <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
// //         <p className="text-sm text-gray-500">
// //           By: {session?.user?.name || 'Anonymous'}
// //         </p>
// //         <input
// //           className="border border-slate-700 p-4"
// //           type="text"
// //           placeholder="Topic Title"
// //           value={title}
// //           onChange={(e) => setTitle(e.target.value)}
// //         />
// //         <textarea
// //           className="border border-slate-500 p-4 h-40"
// //           placeholder="Topic Description"
// //           value={description}
// //           onChange={(e) => setDescription(e.target.value)}
// //         />
// //         <div className="flex items-center gap-2">
// //           <p className="text-gray-600 font-bold">Rate:</p>
// //           {Array.from({ length: 5 }, (_, index) => {
// //             const starIndex = index + 1
// //             return (
// //               <button
// //                 type="button"
// //                 key={starIndex}
// //                 onClick={() => setRating(starIndex)}
// //                 className="p-1 text-yellow-500"
// //               >
// //                 {starIndex <= rating ? (
// //                   <AiFillStar size={24} />
// //                 ) : (
// //                   <AiOutlineStar size={24} />
// //                 )}
// //               </button>
// //             )
// //           })}
// //         </div>
// //         <button className="bg-emerald-300 text-white font-bold px-6 py-3 w-fit rounded-md mt-8">
// //           Add Topic
// //         </button>
// //       </form>
// //     </div>
// //   )
// // }

'use client'

import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import React, { useState, useEffect } from 'react'
import { AiFillStar, AiOutlineStar } from 'react-icons/ai'

export default function AddTopicPage() {
  const { status, data: session } = useSession()
  const router = useRouter()

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [rating, setRating] = useState(0)

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/login')
    }
  }, [status, router])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!title || !description || rating === 0) {
      alert('Title, description, and rating are required')
      return
    }
    try {
      const res = await fetch('/api/rate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title,
          description,
          rate: rating,
          authorName: session?.user?.name || 'noname', // 세션에서 사용자 이름 가져오기
        }),
      })
      if (res.ok) {
        alert('Rate successfully created!')
        setTitle('')
        setDescription('')
        setRating(0)
        router.push('/rateout')
      } else {
        throw new Error('Failed to create a rate')
      }
    } catch (error) {
      console.error(error)
    }
  }

  if (status === 'loading') {
    return <div>Loading...</div>
  }

  return (
    <div className="items-center px-10">
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <p className="text-sm text-gray-500">
          By: {session?.user?.name || 'Anonymous'}
        </p>
        <input
          className="border border-slate-700 p-4"
          type="text"
          placeholder="Topic Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          className="border border-slate-500 p-4 h-40"
          placeholder="Topic Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <div className="flex items-center gap-2">
          <p className="text-gray-600 font-bold">Rate:</p>
          {Array.from({ length: 5 }, (_, index) => {
            const starIndex = index + 1
            return (
              <button
                type="button"
                key={starIndex}
                onClick={() => setRating(starIndex)}
                className="p-1 text-yellow-500"
              >
                {starIndex <= rating ? (
                  <AiFillStar size={24} />
                ) : (
                  <AiOutlineStar size={24} />
                )}
              </button>
            )
          })}
        </div>
        <button className="bg-emerald-300 text-white font-bold px-6 py-3 w-fit rounded-md mt-8">
          Add Topic
        </button>
      </form>
    </div>
  )
}
