// // //api/topics/like/route.ts
// import { supabase } from 'src/lib/supabase'
// import { NextRequest, NextResponse } from 'next/server'

// export async function POST(request: NextRequest) {
//   try {
//     const { topicId, userId } = await request.json()

//     if (!topicId || !userId) {
//       return NextResponse.json(
//         { message: 'Both topicId and userId are required' },
//         { status: 400 }
//       )
//     }

//     console.log('POST /api/topics/like:', { topicId, userId })

//     const { data: likeExists, error: checkError } = await supabase
//       .from('topic_likes')
//       .select('*')
//       .eq('topic_id', topicId)
//       .eq('user_id', userId)
//       .single()

//     if (checkError && checkError.code !== 'PGRST116') {
//       throw checkError
//     }

//     if (likeExists) {
//       return NextResponse.json(
//         { message: 'Already liked this topic' },
//         { status: 400 }
//       )
//     }

//     const { error: insertError } = await supabase
//       .from('topic_likes')
//       .insert([{ topic_id: topicId, user_id: userId }])

//     if (insertError) throw insertError

//     const { data: updatedTopic, error: updateError } = await supabase.rpc(
//       'increase_likes',
//       { topic_id: topicId }
//     )

//     if (updateError) throw updateError

//     return NextResponse.json({ likes: updatedTopic?.likes })
//   } catch (error) {
//     console.error('Error in POST /api/topics/like:', error)
//     return NextResponse.json(
//       { message: 'Internal server error' },
//       { status: 500 }
//     )
//   }
// }

//app/api/topics/like/route.ts
// import connectMongoDB, { Topic } from '@/src/lib/mongodb'
import connectMongoDB from 'src/lib/mongodb'
import Topic from 'src/models/topic'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const { topicId, userId } = await request.json()
    console.log('Received request:', { topicId, userId })

    await connectMongoDB()
    console.log('MongoDB connected')

    // topicId에 해당하는 토픽 찾기
    const topic = await Topic.findById(topicId)
    console.log('Found topic:', topic)

    if (!topic) {
      console.error('Topic not found:', topicId)
      return NextResponse.json({ message: 'Topic not found' }, { status: 404 })
    }

    // 이미 좋아요를 눌렀는지 확인
    if (topic.likedBy.includes(userId)) {
      console.log('User has already liked this topic:', userId)
      return NextResponse.json(
        { message: 'Already liked', likes: topic.likes },
        { status: 400 }
      )
    }

    // 좋아요 수 증가 및 likedBy 배열에 사용자 ID 추가
    topic.likes += 1
    topic.likedBy.push(userId)
    await topic.save()

    console.log('likes updated:', topic.likes)

    return NextResponse.json({ likes: topic.likes }, { status: 200 })
  } catch (error) {
    console.error('Error in POST /api/topics/like:', error)
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    )
  }
}
