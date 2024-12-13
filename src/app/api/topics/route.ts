// import connectMongoDB from '@/src/lib/mongodb'
// import Topic from '@/src/models/topic'
// import { NextRequest, NextResponse } from 'next/server'

// // POST - 새로운 topic 생성
// export async function POST(request: NextRequest) {
//   try {
//     const { title, description } = await request.json()
//     if (!title || !description) {
//       return NextResponse.json(
//         { message: 'Both title and description are required' },
//         { status: 400 }
//       )
//     }

//     await connectMongoDB()
//     const newTopic = await Topic.create({ title, description })

//     return NextResponse.json(
//       { message: 'Topic created', topic: newTopic },
//       { status: 201 }
//     )
//   } catch (error) {
//     console.error('Error in POST /api/topics', error)
//     return NextResponse.json(
//       { message: 'Internal server error' },
//       { status: 500 }
//     )
//   }
// }

// // GET - 모든 topics 반환
// export async function GET() {
//   try {
//     await connectMongoDB()
//     const topics = await Topic.find()
//     return NextResponse.json({ topics }) // topics 배열만 반환
//   } catch (error) {
//     console.error(error)
//     return NextResponse.json(
//       { message: 'Internal server error' },
//       { status: 500 }
//     )
//   }
// }

// // DELETE - topic 삭제
// export async function DELETE(request: NextRequest) {
//   try {
//     const id = request.nextUrl.searchParams.get('id')
//     if (!id) {
//       return NextResponse.json({ message: 'ID is required' }, { status: 400 })
//     }

//     await connectMongoDB()
//     const deletedTopic = await Topic.findByIdAndDelete(id)

//     if (!deletedTopic) {
//       return NextResponse.json({ message: 'Topic not found' }, { status: 404 })
//     }

//     return NextResponse.json({ message: 'Topic deleted' }, { status: 200 })
//   } catch (error) {
//     console.error('Error in DELETE /api/topics', error)
//     return NextResponse.json(
//       { message: 'Internal server error' },
//       { status: 500 }
//     )
//   }
// }

// import { createServerComponentSupabaseClient } from '@supabase/auth-helpers-nextjs'
// import { NextResponse } from 'next/server'

// export async function POST(request: Request) {
//   const supabase = createServerComponentSupabaseClient()
//   const { title, description } = await request.json()

//   const {
//     data: { user },
//     error: authError,
//   } = await supabase.auth.getUser()
//   if (authError || !user) {
//     return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
//   }

//   const { error } = await supabase
//     .from('topics')
//     .insert({ title, description, author_id: user.id })

//   if (error) {
//     return NextResponse.json({ error: error.message }, { status: 400 })
//   }

//   return NextResponse.json({ message: 'Topic created successfully' })
// }
