import { NextRequest, NextResponse } from 'next/server'
import connectMongoDB from 'src/lib/mongodb'
import Sns from 'src/models/sns'
// GET 요청으로 SNS 리스트 가져오기
export async function GET(request: NextRequest) {
  try {
    await connectMongoDB()

    const snsList = await Sns.find()
    if (!snsList) {
      return NextResponse.json({ message: 'No SNS found' }, { status: 404 })
    }

    return NextResponse.json({ sns: snsList }, { status: 200 })
  } catch (error) {
    console.error('Error fetching SNS list:', error)
    return NextResponse.json(
      { message: 'Internal Server Error' },
      { status: 500 }
    )
  }
}
// POST - 새로운 sns 생성
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    console.log('Received body:', body) // 받은 데이터 로깅

    const { title, description, authorName, rating, review } = body

    if (
      !title ||
      !description ||
      !authorName ||
      rating === undefined ||
      !review
    ) {
      console.log('Missing required fields') // 누락된 필드 로깅
      return NextResponse.json(
        {
          message:
            'Title, description, authorName, rating, and review are required',
        },
        { status: 400 }
      )
    }

    await connectMongoDB()
    console.log('Connected to MongoDB') // MongoDB 연결 확인

    const newSns = await Sns.create({
      title,
      description,
      authorName,
      reviews: [{ userId: authorName, rating, review }], // 리뷰 배열에 추가
    })
    console.log('New sns created:', newSns) // 생성된 데이터 로깅

    return NextResponse.json(
      { message: 'Sns created', sns: newSns },
      { status: 201 }
    )
  } catch (error) {
    console.error('Error in POST /api/sns', error)
    return NextResponse.json(
      { message: 'Internal server error', error: (error as Error).message },
      { status: 500 }
    )
  }
}
