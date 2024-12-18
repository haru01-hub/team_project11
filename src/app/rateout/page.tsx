// 'use client' // 클라이언트 컴포넌트임을 명시

// import React, { useEffect, useState } from 'react'
// import { AiFillStar, AiOutlineStar } from 'react-icons/ai'

// // Rate 인터페이스 정의
// interface Rate {
//   title: string
//   description: string
//   rate: number
// }

// export default function RateOutPage() {
//   const [rates, setRates] = useState<Rate[]>([]) // Rate 타입의 배열로 상태 정의

//   useEffect(() => {
//     // API를 호출하여 모든 rate 데이터를 가져옴
//     const fetchRates = async () => {
//       try {
//         const res = await fetch('/api/rate', {
//           method: 'GET',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//         })
//         if (res.ok) {
//           const data = await res.json()
//           console.log('Fetched rates:', data.rates) // 데이터 구조 확인
//           setRates(data.rates) // API에서 반환된 rates 배열을 상태에 저장
//         } else {
//           throw new Error('Failed to fetch rates')
//         }
//       } catch (error) {
//         console.error(error)
//       }
//     }

//     fetchRates()
//   }, [])

//   return (
//     <div className="p-10">
//       <h1 className="text-2xl font-bold mb-4">Rates</h1>
//       <div className="grid gap-4">
//         {rates.map((rate, index) => (
//           <div key={index} className="border p-4 rounded-md">
//             <h2 className="text-xl font-semibold">{rate.title}</h2>
//             <p className="text-gray-700">{rate.description}</p>
//             <div className="flex items-center">
//               {Array.from({ length: 5 }, (_, i) => (
//                 <span key={i} className="text-yellow-500">
//                   {i < rate.rate ? (
//                     <AiFillStar size={24} />
//                   ) : (
//                     <AiOutlineStar size={24} />
//                   )}
//                 </span>
//               ))}
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   )
// }

'use client' // 클라이언트 컴포넌트임을 명시

import React, { useEffect, useState } from 'react'
import { AiFillStar, AiOutlineStar } from 'react-icons/ai'

// Rate 인터페이스 정의
interface Rate {
  title: string
  description: string
  rate: number
  authorName: string // 또는 authorId: string
}

export default function RateOutPage() {
  const [rates, setRates] = useState<Rate[]>([]) // Rate 타입의 배열로 상태 정의

  useEffect(() => {
    // API를 호출하여 모든 rate 데이터를 가져옴
    const fetchRates = async () => {
      try {
        const res = await fetch('/api/rate', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        })
        if (res.ok) {
          const data = await res.json()
          console.log('Fetched rates:', data.rates) // 데이터 구조 확인
          setRates(data.rates) // API에서 반환된 rates 배열을 상태에 저장
        } else {
          throw new Error('Failed to fetch rates')
        }
      } catch (error) {
        console.error(error)
      }
    }

    fetchRates()
  }, [])

  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold mb-4">Rates</h1>
      <div className="grid gap-4">
        {rates.map((rate, index) => (
          <div key={index} className="border p-4 rounded-md">
            <p className="text-sm text-gray-500">By: {rate.authorName}</p>
            {/* 작성자 이름 또는 ID 표시 */}
            <h2 className="text-xl font-semibold">{rate.title}</h2>
            <p className="text-gray-700">{rate.description}</p>
            <div className="flex items-center">
              {Array.from({ length: 5 }, (_, i) => (
                <span key={i} className="text-yellow-500">
                  {i < rate.rate ? (
                    <AiFillStar size={24} />
                  ) : (
                    <AiOutlineStar size={24} />
                  )}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
