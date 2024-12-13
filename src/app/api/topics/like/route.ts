// import { createClient } from '@supabase/supabase-js'
// import { NextResponse } from 'next/server'

// // import { createServerComponentSupabaseClient } from '@supabase/auth-helpers-nextjs';

// // const supabase = createServerComponentSupabaseClient({
// //   supabaseUrl: process.env.NEXT_PUBLIC_SUPABASE_URL!,
// //   supabaseKey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
// // })

// const supabase = createClient(
//   'https://gtaewptzdtmkojkuviej.supabase.co',
//   'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd0YWV3cHR6ZHRta29qa3V2aWVqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzI3NjM3MTQsImV4cCI6MjA0ODMzOTcxNH0.ELJaLFz7BTPTcmHl-LbN53vj2jwRl2Bu8KX5IKfpFuw'
// )

// export async function POST(request: Request) {
//   const { topic_id, user_id } = await request.json()

//   // 사용자가 이미 하트를 눌렀는지 확인
//   const { data: existingLike, error: checkError } = await supabase
//     .from('likes')
//     .select('*')
//     .eq('user_id', user_id)
//     .eq('topic_id', topic_id)
//     .single()

//   if (checkError && checkError.code !== 'PGRST116') {
//     return NextResponse.json({ error: checkError.message }, { status: 500 })
//   }

//   if (existingLike) {
//     return NextResponse.json(
//       { error: '이미 하트를 눌렀습니다.' },
//       { status: 400 }
//     )
//   }

//   // 하트 추가
//   const { error } = await supabase.from('likes').insert([{ user_id, topic_id }])

//   if (error) {
//     return NextResponse.json({ error: error.message }, { status: 500 })
//   }

//   return NextResponse.json({ message: '하트가 추가되었습니다.' })
// }

import { createServerComponentSupabaseClient } from '@supabase/auth-helpers-nextjs'
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  const supabase = createServerComponentSupabaseClient()
  const { topic_id } = await request.json()

  const {
    data: { user },
    error: authError,
  } = await supabase.auth.getUser()
  if (authError || !user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const { data: existingLike, error: likeError } = await supabase
    .from('likes')
    .select('*')
    .eq('topic_id', topic_id)
    .eq('user_id', user.id)
    .single()

  if (likeError && likeError.code !== 'PGRST116') {
    return NextResponse.json({ error: likeError.message }, { status: 400 })
  }

  if (existingLike) {
    return NextResponse.json({ error: 'Already liked' }, { status: 400 })
  }

  const { error } = await supabase
    .from('likes')
    .insert({ topic_id, user_id: user.id })

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }

  return NextResponse.json({ message: 'Like added successfully' })
}
