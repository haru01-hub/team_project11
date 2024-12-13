// import { NextResponse } from 'next/server'
// import {
//   fetchBooksFromDatabase,
//   insertBooksToDatabase,
// } from '@/src/models/book'

// // API 키와 URL 설정
// const API_KEY = 'YOUR_API_KEY' // 본인의 API 키로 교체
// const BASE_URL = 'https://api.nl.go.kr/api/bookSearch'

// export async function GET() {
//   // Supabase에서 책 데이터가 있는지 확인
//   const booksFromDB = await fetchBooksFromDatabase()

//   if (booksFromDB.length > 0) {
//     // Supabase에 이미 데이터가 있으면 바로 반환
//     return NextResponse.json(booksFromDB)
//   }

//   // Supabase에 데이터가 없으면 National Library API에서 책 데이터를 가져옴
//   const response = await fetch(
//     `${BASE_URL}?key=${API_KEY}&numOfRows=10&pageNo=1&startDate=2020-01-01&endDate=2024-12-31&format=json`
//   )
//   const data = await response.json()

//   // API에서 책 데이터가 있으면 Supabase에 저장
//   if (data.response && data.response.docs) {
//     const books = data.response.docs.map((book: any) => ({
//       title: book.title,
//       author: book.author,
//       coverImageUrl: book.coverImageUrl, // 표지 이미지 URL
//     }))

//     // Supabase에 책 데이터를 저장
//     await insertBooksToDatabase(books)

//     // 저장된 책 데이터를 반환
//     return NextResponse.json(books)
//   }

//   // API에서 데이터가 없거나 잘못된 응답이 오면 에러 반환
//   return NextResponse.json({ error: 'No data found or invalid response' })
// }

import axios from 'axios'
import { getSession } from 'next-auth/react'

export default async function handler(req, res) {
  const session = await getSession({ req })

  if (!session) {
    return res.status(401).json({ message: 'Unauthorized. Please log in.' })
  }

  const { title, page = 1 } = req.query
  const apiKey = process.env.NEXT_PUBLIC_NLK_API_KEY

  if (!title) {
    return res
      .status(400)
      .json({ message: 'Title query parameter is required.' })
  }

  const params = {
    key: apiKey,
    title,
    pageNo: page,
    pageSize: 10,
  }

  try {
    const response = await axios.get('https://nl.go.kr/seoji/SearchApi.do', {
      params,
    })
    const data = response.data

    if (data?.docs) {
      res.status(200).json(data.docs)
    } else {
      res.status(404).json({ message: 'No books found.' })
    }
  } catch (error) {
    res.status(500).json({ message: 'Error fetching books', error })
  }
}
