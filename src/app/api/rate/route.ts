import { NextRequest, NextResponse } from 'next/server'
import connectMongoDB from '../../../lib/mongodb'
import Rate from '../../../models/rate'

// POST - 새로운 rate 생성
export async function POST(request: NextRequest) {
  try {
    const { title, description, rate, authorName } = await request.json()

    if (!title || !description || rate === undefined || !authorName) {
      return NextResponse.json(
        { message: 'Title, description, rate, and authorName are required' },
        { status: 400 }
      )
    }

    await connectMongoDB()
    const newRate = await Rate.create({
      title,
      description,
      rate,
      authorName, // authorName 저장
    })

    return NextResponse.json(
      { message: 'Rate created', rate: newRate },
      { status: 201 }
    )
  } catch (error) {
    console.error('Error in POST /api/rate', error)
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    )
  }
}

// GET - 모든 rates 반환
export async function GET() {
  try {
    await connectMongoDB()
    const rates = await Rate.find()
    return NextResponse.json({ rates })
  } catch (error) {
    console.error('Error in GET /api/rate', error)
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    )
  }
}

// DELETE - rate 삭제
export async function DELETE(request: NextRequest) {
  try {
    const id = request.nextUrl.searchParams.get('id')
    if (!id) {
      return NextResponse.json({ message: 'ID is required' }, { status: 400 })
    }

    await connectMongoDB()
    const deletedRate = await Rate.findByIdAndDelete(id)

    if (!deletedRate) {
      return NextResponse.json({ message: 'Rate not found' }, { status: 404 })
    }

    return NextResponse.json({ message: 'Rate deleted' }, { status: 200 })
  } catch (error) {
    console.error('Error in DELETE /api/rate', error)
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    )
  }
}
