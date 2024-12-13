// // components/BookList.js
// import { useEffect, useState } from 'react'

// const BookList = () => {
//   const [books, setBooks] = useState([])

//   useEffect(() => {
//     const fetchBooks = async () => {
//       const response = await fetch('/api/saveBooks') // 위에서 만든 API 호출
//       const data = await response.json()
//       if (data.books) {
//         setBooks(data.books)
//       }
//     }
//     fetchBooks()
//   }, [])

//   return (
//     <div>
//       <h1>Books</h1>
//       <ul>
//         {books.map((book) => (
//           <li key={book.id}>
//             <h2>{book.title}</h2>
//             <p>{book.author}</p>
//             <img src={book.image} alt={book.title} />
//             <p>{book.description}</p>
//           </li>
//         ))}
//       </ul>
//     </div>
//   )
// }

// export default BookList
