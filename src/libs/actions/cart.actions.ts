// const round2 = (num: number) => Math.round(num * 100) / 100

// const formatError = (error: unknown): string => {
//   if (error instanceof Error) {
//     return error.message
//   } else if (typeof error === 'object' && error !== null) {
//     // 더 복잡한 에러 처리 (예: 서버에서 받은 에러 객체 처리)
//     return JSON.stringify(error) // 필요에 따라 포맷
//   }
//   return 'An unknown error occurred'
// }

// // 서버 측 코드 (예: `addItemToCart` 함수 등)
// import { revalidatePath } from 'next/cache'

// export const addItemToCart = async (data: any) => {
//   try {
//     // ... 비즈니스 로직 수행 후

//     // 데이터를 성공적으로 추가한 후 경로를 재검증
//     revalidatePath('/cart')

//     return { success: true, message: 'Item added to cart successfully' }
//   } catch (error) {
//     return { success: false, message: 'Failed to add item to cart' }
//   }
// }

// export async function getMyCart() {
//   const sessionCartId = cookies().get('sessionCartId')?.value
//   if (!sessionCartId) return undefined
//   const session = await auth()
//   const userId = session?.user.id
//   const cart = await db.query.carts.findFirst({
//     where: userId ? { userId: userId } : { sessionCartId: sessionCartId },
//   })
//   return cart
// }

// // CREATE

// const calcPrice = (items: z.infer<typeof cartItemSchema>[]) => {
//   const itemsPrice = round2(
//       items.reduce((acc, item) => acc + item.price * item.qty, 0)
//     ),
//     shippingPrice = round2(itemsPrice > 100 ? 0 : 10),
//     taxPrice = round2(0.15 * itemsPrice),
//     totalPrice = round2(itemsPrice + shippingPrice + taxPrice)
//   return {
//     itemsPrice: itemsPrice.toFixed(2),
//     shippingPrice: shippingPrice.toFixed(2),
//     taxPrice: taxPrice.toFixed(2),
//     totalPrice: totalPrice.toFixed(2),
//   }
// }

// export const addItemToCart = async (data: z.infer<typeof cartItemSchema>) => {
//   try {
//     const sessionCartId = cookies().get('sessionCartId')?.value
//     if (!sessionCartId) throw new Error('Cart Session not found')
//     const session = await auth()
//     const userId = session?.user.id as string | undefined
//     const cart = await getMyCart()
//     const item = cartItemSchema.parse(data)
//     const product = await db.query.products.findFirst({
//       where: eq(products.id, item.productId),
//     })
//     if (!product) throw new Error('Product not found')
//     if (!cart) {
//       if (product.stock < 1) throw new Error('Not enough stock')
//       await db.insert(carts).values({
//         userId: userId,
//         items: [item],
//         sessionCartId: sessionCartId,
//         ...calcPrice([item]),
//       })
//       revalidatePath(`/product/${product.slug}`)
//       return {
//         success: true,
//         message: 'Item added to cart successfully',
//       }
//     } else {
//       const existItem = cart.items.find((x) => x.productId === item.productId)
//       if (existItem) {
//         if (product.stock < existItem.qty + 1)
//           throw new Error('Not enough stock')
//         cart.items.find((x) => x.productId === item.productId)!.qty =
//           existItem.qty + 1
//       } else {
//         if (product.stock < 1) throw new Error('Not enough stock')
//         cart.items.push(item)
//       }
//       await db
//         .update(carts)
//         .set({
//           items: cart.items,
//           ...calcPrice(cart.items),
//         })
//         .where(and(eq(carts.id, cart.id)))

//       revalidatePath(`/product/${product.slug}`)
//       return {
//         success: true,
//         message: `${product.name} ${
//           existItem ? 'updated in' : 'added to'
//         } cart successfully`,
//       }
//     }
//   } catch (error) {
//     return { success: false, message: formatError(error) }
//   }
// }

// export const removeItemFromCart = async (productId: string) => {
//   try {
//     const sessionCartId = cookies().get('sessionCartId')?.value
//     if (!sessionCartId) throw new Error('Cart Session not found')

//     const product = await db.query.products.findFirst({
//       where: eq(products.id, productId),
//     })
//     if (!product) throw new Error('Product not found')

//     const cart = await getMyCart()
//     if (!cart) throw new Error('Cart not found')

//     const exist = cart.items.find((x) => x.productId === productId)
//     if (!exist) throw new Error('Item not found')

//     if (exist.qty === 1) {
//       cart.items = cart.items.filter((x) => x.productId !== exist.productId)
//     } else {
//       cart.items.find((x) => x.productId === productId)!.qty = exist.qty - 1
//     }
//     await db
//       .update(carts)
//       .set({
//         items: cart.items,
//         ...calcPrice(cart.items),
//       })
//       .where(eq(carts.id, cart.id))
//     revalidatePath(`/product/${product.slug}`)
//     return {
//       success: true,
//       message: `${product.name}  ${
//         cart.items.find((x) => x.productId === productId)
//           ? 'updated in'
//           : 'removed from'
//       } cart successfully`,
//     }
//   } catch (error) {
//     return { success: false, message: formatError(error) }
//   }
// }
