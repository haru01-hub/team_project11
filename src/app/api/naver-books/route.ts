import axios from 'axios'

export async function GET(request: Request) {
  const url = new URL(request.url)
  const query = url.searchParams.get('query')

  if (!query) {
    return new Response(
      JSON.stringify({ error: 'Query parameter is required' }),
      { status: 400 }
    )
  }

  try {
    const response = await axios.get(
      'https://openapi.naver.com/v1/search/book.json',
      {
        params: { query },
        headers: {
          'X-Naver-Client-Id': process.env.NAVER_CLIENT_ID,
          'X-Naver-Client-Secret': process.env.NAVER_CLIENT_SECRET,
        },
      }
    )

    return new Response(JSON.stringify(response.data), { status: 200 })
  } catch (error) {
    console.error('Error fetching data from Naver API:', error)
    return new Response(JSON.stringify({ error: 'Error fetching data' }), {
      status: 500,
    })
  }
}
