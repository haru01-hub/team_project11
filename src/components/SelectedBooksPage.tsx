// src/components/SelectedBooksPage.tsx
import { useState, useEffect } from 'react'
import axios from 'axios'
import Link from 'next/link'

// Book 데이터 타입 정의
interface Book {
  id: number
  image: string
  title: string
  author: string
  link: string
}

const SelectedBooksPage = () => {
  const [books, setBooks] = useState<Book[]>([]) // 타입을 Book[]로 설정

  useEffect(() => {
    const fetchSelectedBooks = async () => {
      try {
        const response = await axios.get('/api/getSelectedBooks')
        setBooks(response.data.books) // 타입이 맞는지 확인
      } catch (error) {
        console.error('Error fetching selected books:', error)
      }
    }

    fetchSelectedBooks()
  }, [])

  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '50px' }}>
      <h1>with books</h1>
      <ul
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '16px',
        }}
      >
        {books.map((book) => (
          <li
            key={book.id}
            style={{
              border: '1px solid gray',
              padding: '10px',
              listStyle: 'none',
              boxSizing: 'border-box',
              borderRadius: '8px',
            }}
          >
            <img
              src={book.image}
              alt={book.title}
              style={{ width: '100%', objectFit: 'cover' }}
            />
            <h2 className="text-lg font-semibold">{book.title}</h2>
            <p className="text-sm text-gray-500 mb-3">{book.author}</p>
            <a
              href={book.link}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-gray-100 rounded-xl mt-2 mr-5 hover:bg-gray-300"
            >
              상세보기
            </a>
            <div className="flex text-gray-800">
              <Link href="/review-01">
                <p className="p-2 bg-gray-100 rounded-xl mt-5 mr-5 hover:bg-gray-300">
                  토론하러 가기
                </p>
              </Link>
              <Link href="/rateTopic">
                <p className="p-2 bg-gray-100 rounded-xl mt-5 hover:bg-gray-300">
                  리뷰 쓰기
                </p>
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default SelectedBooksPage

// 'use client'
// import { useState, useEffect } from 'react'
// import axios from 'axios'
// import Link from 'next/link'

// // Book 데이터 타입 정의
// interface Book {
//   id: number
//   image: string
//   title: string
//   author: string
//   link: string
// }
// interface Props {
//   id: string
// }

// const SelectedBooksPage = ({ id }: Props) => {
//   const [books, setBooks] = useState<Book[]>([]) // 타입을 Book[]로 설정

//   useEffect(() => {
//     const fetchSelectedBooks = async () => {
//       try {
//         const response = await axios.get(`/api/getSelectedBooks`, {
//           params: { id }, // 부모 URL의 id를 API에 전달
//         })
//         setBooks(response.data.books)
//       } catch (error) {
//         console.error('Error fetching selected books:', error)
//       }
//     }

//     fetchSelectedBooks()
//   }, [id])

//   return (
//     <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '50px' }}>
//       <h1>with books ID: {id}</h1>
//       <ul
//         style={{
//           display: 'grid',
//           gridTemplateColumns: 'repeat(4, 1fr)',
//           gap: '16px',
//         }}
//       >
//         {books.map((book) => (
//           <li
//             key={book.id}
//             style={{
//               border: '1px solid gray',
//               padding: '10px',
//               listStyle: 'none',
//               boxSizing: 'border-box',
//               borderRadius: '8px',
//             }}
//           >
//             <img
//               src={book.image}
//               alt={book.title}
//               style={{ width: '100%', objectFit: 'cover' }}
//             />
//             <h2 className="text-lg font-semibold">{book.title}</h2>
//             <p className="text-sm text-gray-500 mb-3">{book.author}</p>
//             <a
//               href={book.link}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="p-2 bg-gray-100 rounded-xl mt-2 mr-5 hover:bg-gray-300"
//             >
//               상세보기
//             </a>
//             <div className="flex text-gray-800">
//               <Link href="/review-01">
//                 <p className="p-2 bg-gray-100 rounded-xl mt-5 mr-5 hover:bg-gray-300">
//                   토론하러 가기
//                 </p>
//               </Link>
//               <Link href="/rateTopic">
//                 <p className="p-2 bg-gray-100 rounded-xl mt-5 hover:bg-gray-300">
//                   리뷰 쓰기
//                 </p>
//               </Link>
//             </div>
//           </li>
//         ))}
//       </ul>
//     </div>
//   )
// }

// export default SelectedBooksPage
