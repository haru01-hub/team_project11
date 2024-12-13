// pages/selectedBooks.js
import { useState, useEffect } from 'react'
import axios from 'axios'
import Link from 'next/link'

const SelectedBooksPage = () => {
  const [books, setBooks] = useState([])

  useEffect(() => {
    const fetchSelectedBooks = async () => {
      try {
        const response = await axios.get('/api/getSelectedBooks')
        setBooks(response.data.books)
      } catch (error) {
        console.error('Error fetching selected books:', error)
      }
    }

    fetchSelectedBooks()
  }, [])

  return (
    <div
      style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '50px ',
      }}
    >
      <h1>width book</h1>
      <div>
        <ul
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4,1fr)',
            gap: '16px',
          }}
        >
          {books.map((book) => (
            <li
              key={book.id}
              style={{
                width: '100%',
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
              <h2
                style={{ fontSize: '1rem', fontWeight: 'bold' }}
                className="text-lg font-semibold"
              >
                {book.title}
              </h2>
              <p className="text-sm text-gray-500">{book.author}</p>
              {/* <p>{book.description}</p> */}
              <div className="flex text-gray-800">
                <Link href="/receipt">
                  <p className="p-3 bg-yellow-100 rounded-3xl mt-5 mr-5 hover:bg-blue-200">
                    리뷰보러가기
                  </p>
                </Link>
                <Link href="/product">
                  <p className="p-3 bg-yellow-100 rounded-3xl mt-5 hover:bg-blue-200">
                    구매하기
                  </p>
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default SelectedBooksPage

// // pages/selectedBooks.js
// import { useState, useEffect } from 'react'
// import axios from 'axios'
// import Image from 'next/image'
// import Link from 'next/link'

// import { Card, CardContent, CardHeader } from 'src/components/ui/card'

// const SelectedBooksPage = () => {
//   const [books, setBooks] = useState([])

//   useEffect(() => {
//     const fetchSelectedBooks = async () => {
//       try {
//         const response = await axios.get('/api/getSelectedBooks')
//         setBooks(response.data.books)
//       } catch (error) {
//         console.error('Error fetching selected books:', error)
//       }
//     }

//     fetchSelectedBooks()
//   }, [])

//   return (
//     <div>
//       <h1>선택된 책들</h1>
//       <div>
//         {books.map((book) => (
//           <Card key={book.id} className="">
//             <CardHeader className="p-0 items-center">
//               <Link href={`/book/${book.id}`}>
//                 <Image
//                   alt={book.title}
//                   className="aspect-square object-cover rounded"
//                   height={300}
//                   src={book.image || '/default-image.png'}
//                   width={300}
//                 />
//               </Link>
//             </CardHeader>
//             <CardContent className="p-4 grid gap-4">
//               <div className="grid gap-1.5 text-sm leading-4">
//                 <p className="text-xs leading-3">{book.author}</p>
//               </div>
//               <div className="grid gap-1.5 text-sm leading-4">
//                 <Link href={`/book/${book.id}`}>
//                   <h2 className="text-sm font-medium">{book.title}</h2>
//                 </Link>
//               </div>
//             </CardContent>
//           </Card>
//         ))}
//       </div>
//     </div>
//   )
// }

// export default SelectedBooksPage
