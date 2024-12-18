// src / app / api / sns / [id] / [reviewid] / route.ts

import { NextRequest, NextResponse } from 'next/server'
import connectMongoDB from 'src/lib/mongodb'
import Sns from 'src/models/sns'

export async function POST(
  request: NextRequest,
  { params }: { params: { id: string; reviewid: string } }
) {
  try {
    const { id, reviewid } = params // SNS id와 리뷰 id
    const { userId, reply } = await request.json()

    // 입력 값 검증
    if (!userId || typeof userId !== 'string') {
      return NextResponse.json(
        { message: 'Invalid or missing userId' },
        { status: 400 }
      )
    }
    if (!reply || typeof reply !== 'string' || reply.trim() === '') {
      return NextResponse.json(
        { message: 'Invalid or missing reply' },
        { status: 400 }
      )
    }

    // MongoDB 연결
    await connectMongoDB()

    // SNS 찾기
    const sns = await Sns.findById(id)
    if (!sns) {
      return NextResponse.json({ message: 'SNS not found' }, { status: 404 })
    }

    // 해당 리뷰 찾기
    const review = sns.reviews.find((r: any) => r._id.toString() === reviewid)
    if (!review) {
      return NextResponse.json({ message: 'Review not found' }, { status: 404 })
    }

    // 대댓글 추가
    review.replies.push({ userId, reply, createdAt: new Date().toISOString() })

    // SNS 저장
    await sns.save()

    return NextResponse.json(
      { message: 'Reply added successfully', sns },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error adding reply:', error)
    return NextResponse.json(
      { message: 'Internal Server Error' },
      { status: 500 }
    )
  }
}
// src/app/api/sns/[snsId]/[reviewId]/route.ts
