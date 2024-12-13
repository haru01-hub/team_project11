export type Review = {
  id: string
  content: string
  user_id: string
  product_id: string
  created_at: string
  user: {
    name: string
    email: string
  }
}
