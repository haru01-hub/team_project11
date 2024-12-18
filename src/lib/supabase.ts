// lib/supabase.ts
// import { createClient } from '@supabase/supabase-js'
// import { Divide, Link } from 'lucide-react'

// // Supabase URL과 API Key (Supabase 대시보드에서 확인 가능)
// const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL! // 프로젝트 URL
// const SUPABASE_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY! // 프로젝트 API Key

// // lib/supabase.ts
// import { createClient } from '@supabase/supabase-js'

// const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
// const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

// if (!supabaseUrl || !supabaseKey) {
//   throw new Error('Supabase URL and anon key are required')
// }

// export const supabase = createClient(supabaseUrl, supabaseKey)

// lib/supabase.ts
import { createClient } from '@supabase/supabase-js'

// 환경 변수에서 Supabase URL과 키 가져오기
const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL as string
const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string

if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
  throw new Error('Supabase 환경 변수가 설정되지 않았습니다.')
}

// Supabase 클라이언트 생성
export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)
