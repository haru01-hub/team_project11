// //api/topics/[id]/route.ts
// import { NextRequest, NextResponse } from 'next/server'
// import { supabase } from 'src/lib/supabase'

// // GET 요청: 특정 토픽의 세부 정보를 가져옵니다.
// export async function GET(
//   request: NextRequest,
//   { params }: { params: { id: string } }
// ) {
//   const { id } = params

//   // id 값이 없으면 오류 처리
//   if (!id) {
//     return NextResponse.json(
//       { message: 'Topic ID is missing' },
//       { status: 400 }
//     )
//   }

//   try {
//     const { data: topic, error } = await supabase
//       .from('topics')
//       .select('*')
//       .eq('id', id)
//       .single()

//     // 토픽을 찾을 수 없거나 에러가 발생한 경우 처리
//     if (error || !topic) {
//       return NextResponse.json({ message: 'Topic not found' }, { status: 404 })
//     }

//     return NextResponse.json({ topic })
//   } catch (error) {
//     console.error('Error fetching topic:', error)
//     return NextResponse.json(
//       { message: 'Internal server error' },
//       { status: 500 }
//     )
//   }
// }

// // DELETE 요청: 특정 토픽을 삭제합니다.
// export async function DELETE(request: NextRequest) {
//   try {
//     const id = request.nextUrl.searchParams.get('id')
//     if (!id) {
//       return NextResponse.json({ message: 'ID is required' }, { status: 400 })
//     }

//     const { error } = await supabase.from('topics').delete().eq('id', id)

//     if (error) throw error

//     return NextResponse.json({ message: 'Topic deleted' })
//   } catch (error) {
//     console.error('Error deleting topic:', error)
//     return NextResponse.json(
//       { message: 'Internal server error' },
//       { status: 500 }
//     )
//   }
// }

// app/api/topics/[id]/route.ts
import { NextRequest, NextResponse } from 'next/server'
import Topic from 'src/models/topic'
import connectMongoDB from 'src/lib/mongodb'

// PUT: 토픽 수정
export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params
    const { newTitle: title, newDescription: description } =
      await request.json()

    if (!title || !description) {
      return NextResponse.json(
        { message: 'Title and description are required' },
        { status: 400 }
      )
    }

    // MongoDB 연결
    await connectMongoDB()

    // 토픽 수정
    const updatedTopic = await Topic.findByIdAndUpdate(
      id,
      { title, description },
      { new: true }
    )

    // 수정된 토픽이 없으면 404 반환
    if (!updatedTopic) {
      return NextResponse.json({ message: 'Topic not found' }, { status: 404 })
    }

    return NextResponse.json({
      message: 'Topic updated successfully',
      topic: updatedTopic,
    })
  } catch (error) {
    console.error('Error in PUT /api/topics/[id]:', error)
    return NextResponse.json(
      { message: 'Internal Server Error' },
      { status: 500 }
    )
  }
}

// GET: 특정 토픽 조회
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params
    await connectMongoDB()

    // 특정 토픽 조회
    const topic = await Topic.findById(id)
    if (!topic) {
      return NextResponse.json({ message: 'Topic not found' }, { status: 404 })
    }

    return NextResponse.json({ topic }, { status: 200 })
  } catch (error) {
    console.error('Error fetching topic:', error)
    return NextResponse.json(
      { message: 'Internal Server Error' },
      { status: 500 }
    )
  }
}

// POST: 토픽에 리뷰 추가
export async function POST(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params
    console.log('Connecting to MongoDB...')
    await connectMongoDB()
    console.log('MongoDB connected.')

    const body = await request.json()
    const { userId, rating, review } = body

    // 입력 값 검증
    if (!userId || typeof userId !== 'string') {
      return NextResponse.json(
        { message: 'Invalid or missing userId' },
        { status: 400 }
      )
    }
    if (!rating || typeof rating !== 'number' || rating < 1 || rating > 5) {
      return NextResponse.json(
        { message: 'Invalid or missing rating (1-5)' },
        { status: 400 }
      )
    }
    if (!review || typeof review !== 'string' || review.trim() === '') {
      return NextResponse.json(
        { message: 'Invalid or missing review' },
        { status: 400 }
      )
    }

    // 토픽 찾기
    const topic = await Topic.findById(id)
    if (!topic) {
      console.error(`Topic with ID ${id} not found.`)
      return NextResponse.json({ message: 'Topic not found' }, { status: 404 })
    }

    // 리뷰 추가
    topic.reviews.push({ userId, rating, review })
    await topic.save()
    console.log('Review added and topic saved successfully.')

    return NextResponse.json(
      { message: 'Review added successfully', topic },
      { status: 201 }
    )
  } catch (error) {
    console.error('Error adding review:', error)
    return NextResponse.json(
      { message: 'Internal Server Error' },
      { status: 500 }
    )
  }
}
