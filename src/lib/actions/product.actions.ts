// 'use server'

// import { desc } from 'drizzle-orm'

// import db from '@/src/db/drizzle'
// import { products } from '@/src/db/schema'

// export async function getLatestProducts() {
//   const data = await db.query.products.findMany({
//     orderBy: [desc(products.createdAt)],
//     limit: 4,
//   })
//   return data
// }

'use server'

import { createServerClient } from '@supabase/ssr'
import { cookies } from 'next/headers'

export async function getProductBySlug(slug: string) {
  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get(name: string) {
          return cookies().get(name)?.value
        },
      },
    }
  )

  const { data, error } = await supabase
    .from('products')
    .select('*')
    .eq('slug', slug)
    .single()

  if (error) throw error
  return data
}
