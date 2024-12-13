// utils/fetchBookData.js
import axios from 'axios'

const fetchBookData = async (query) => {
  const maxResults = 10 // 가져올 최대 결과 수

  try {
    const response = await axios.get(
      'https://openapi.naver.com/v1/search/book.json',
      {
        params: {
          query: query || 'default', // 검색할 책 제목
          display: maxResults,
          start: 1,
        },
        headers: {
          'X-Naver-Client-Id': process.env.NAVER_CLIENT_ID,
          'X-Naver-Client-Secret': process.env.NAVER_CLIENT_SECRET,
        },
      }
    )

    const books = response.data.items.map((item) => ({
      id: item.isbn,
      title: item.title,
      author: item.author,
      image: item.image,
      description: item.description,
    }))

    return books
  } catch (error) {
    console.error('Error fetching book data:', error)
    return []
  }
}

export default fetchBookData
