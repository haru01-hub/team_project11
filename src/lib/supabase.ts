// lib/supabase.ts
import { createClient } from '@supabase/supabase-js'
import { Divide, Link } from 'lucide-react'

// Supabase URL과 API Key (Supabase 대시보드에서 확인 가능)
const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL! // 프로젝트 URL
const SUPABASE_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY! // 프로젝트 API Key

// export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY)

// import { createClient } from '@supabase/supabase-js'

// const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
// const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

// export const supabase = createClient(supabaseUrl, supabaseAnonKey)
