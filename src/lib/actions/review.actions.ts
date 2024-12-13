'use server'

import { createServerClient } from '@supabase/ssr'
import { cookies } from 'next/headers'
import { revalidatePath } from 'next/cache'
import { Review } from 'src/types/supabase'

export async function getReviews(productId: string) {
  const cookieStore = cookies()
  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get(name: string) {
          return cookieStore.get(name)?.value
        },
      },
    }
  )

  const { data: reviews } = await supabase
    .from('reviews')
    .select(
      `
      *,
      user:users(name, email)
    `
    )
    .eq('product_id', productId)
    .order('created_at', { ascending: false })

  return reviews as Review[]
}

export async function addReview(productId: string, content: string) {
  const cookieStore = cookies()
  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get(name: string) {
          return cookieStore.get(name)?.value
        },
      },
    }
  )

  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) throw new Error('Must be logged in to review')

  const { error } = await supabase.from('reviews').insert({
    content,
    product_id: productId,
    user_id: user.id,
  })

  if (error) throw error

  revalidatePath(`/product/${productId}`)
}

export async function deleteReview(reviewId: string, productId: string) {
  const cookieStore = cookies()
  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get(name: string) {
          return cookieStore.get(name)?.value
        },
      },
    }
  )

  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) throw new Error('Must be logged in to delete review')

  const { error } = await supabase
    .from('reviews')
    .delete()
    .eq('id', reviewId)
    .eq('user_id', user.id)

  if (error) throw error

  revalidatePath(`/product/${productId}`)
}
