// //api/topics/route.ts
// import { supabase } from 'src/lib/supabase'
// import { NextRequest, NextResponse } from 'next/server'

// // POST - 새로운 topic 생성
// export async function POST(request: NextRequest) {
//   try {
//     const { title, description, authorName } = await request.json()

//     if (!title || !description) {
//       return NextResponse.json(
//         { message: 'Both title and description are required' },
//         { status: 400 }
//       )
//     }

//     const { data, error } = await supabase.from('topics').insert([
//       {
//         title,
//         description,
//         author_name: authorName || 'Anonymous',
//         likes: 0,
//       },
//     ])

//     if (error) {
//       throw error
//     }

//     return NextResponse.json(
//       { message: 'Topic created', topic: data },
//       { status: 201 }
//     )
//   } catch (error) {
//     console.error('Error creating topic:', error)
//     return NextResponse.json(
//       { message: 'Internal server error' },
//       { status: 500 }
//     )
//   }
// }

// // GET - 모든 topics 반환
// export async function GET() {
//   try {
//     const { data: topics, error } = await supabase.from('topics').select('*')

//     if (error) {
//       throw error
//     }

//     return NextResponse.json({ topics })
//   } catch (error) {
//     console.error('Error fetching topics:', error)
//     return NextResponse.json(
//       { message: 'Internal server error' },
//       { status: 500 }
//     )
//   }
// }

//app/api/topics/route.ts
import { auth } from 'src/auth'
import connectMongoDB from 'src/lib/mongodb'
import Topic from 'src/models/topic'
import { NextRequest, NextResponse } from 'next/server'

// POST - 새로운 topic 생성
export async function POST(request: NextRequest) {
  try {
    const { title, description } = await request.json()
    const session = await auth()

    if (!title || !description) {
      return NextResponse.json(
        { message: 'Both title and description are required' },
        { status: 400 }
      )
    }

    await connectMongoDB()
    const newTopic = await Topic.create({
      title,
      description,
      authorName: session?.user?.name || 'Anonymous',
    })

    return NextResponse.json(
      { message: 'Topic created', topic: newTopic },
      { status: 201 }
    )
  } catch (error) {
    console.error('Error in POST /api/topics', error)
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    )
  }
}

// GET - 모든 topics 반환
export async function GET() {
  try {
    await connectMongoDB()
    const topics = await Topic.find()
    return NextResponse.json({ topics }) // topics 배열만 반환
  } catch (error) {
    console.error(error)
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    )
  }
}

// DELETE - topic 삭제
export async function DELETE(request: NextRequest) {
  try {
    const id = request.nextUrl.searchParams.get('id')
    if (!id) {
      return NextResponse.json({ message: 'ID is required' }, { status: 400 })
    }

    await connectMongoDB()
    const deletedTopic = await Topic.findByIdAndDelete(id)

    if (!deletedTopic) {
      return NextResponse.json({ message: 'Topic not found' }, { status: 404 })
    }

    return NextResponse.json({ message: 'Topic deleted' }, { status: 200 })
  } catch (error) {
    console.error('Error in DELETE /api/topics', error)
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    )
  }
}
