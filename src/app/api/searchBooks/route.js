// src/app/api/searchBooks/route.js
import fetchBookData from 'utils/fetchBookData' // 네이버 API에서 책 데이터를 가져오는 함수
import { NextResponse } from 'next/server'

export async function GET(request) {
  const url = new URL(request.url)
  const query = url.searchParams.get('query') // 클라이언트에서 전달한 검색어

  if (!query) {
    return NextResponse.json(
      { error: 'Query parameter is required' },
      { status: 400 }
    )
  }

  try {
    const books = await fetchBookData(query) // 네이버 API에서 책 데이터 가져오기
    return NextResponse.json({ books }) // 성공적으로 데이터 반환
  } catch (error) {
    console.error('Error fetching books:', error)
    return NextResponse.json(
      { error: 'Failed to fetch books' },
      { status: 500 }
    )
  }
}
