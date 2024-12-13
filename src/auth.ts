// // import NextAuth from 'next-auth'
// // import GitHub from 'next-auth/providers/github'
// // import Google from 'next-auth/providers/google'
// // import connectMongoDB from './lib/mongodb'
// // import User from './models/user'
// // export const { handlers, signIn, signOut, auth } = NextAuth({
// //   providers: [Google, GitHub],
// //   pages: {
// //     signIn: '/login',
// //   },
// //   callbacks: {
// //     async signIn({ user, account }) {
// //       const apiUrl = process.env.API_URL
// //       const { name, email } = user
// //       if (account?.provider === 'google' || account?.provider === 'github') {
// //         try {
// //           await connectMongoDB()
// //           const userExists = await User.findOne({ email })
// //           if (!userExists) {
// //             const res = await fetch(`${apiUrl}/api/user`, {
// //               method: 'POST',
// //               headers: {
// //                 'Content-Type': 'application/json',
// //               },
// //               body: JSON.stringify({ name, email }),
// //             })
// //             if (res.ok) {
// //               return true
// //             }
// //           }
// //         } catch (error) {
// //           console.log(error)
// //           return false
// //         }
// //       }
// //       return true
// //     },
// //   },
// // })

import NextAuth from 'next-auth'
import gitHub from 'next-auth/providers/github'
import google from 'next-auth/providers/google'

//import { NextResponse } from 'next/server'
export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [google, gitHub],
  pages: {
    signIn: '/login',
  },
  callbacks: {
    async signIn({ user, account }) {
      // const apiUrl = process.env.API_URL
      // const { name, email } = user
      if (account?.provider === 'google' || account?.provider === 'github') {
        try {
          const apiUrl = process.env.API_URL
          const res = await fetch(`${apiUrl}/api/user-auth`, {
            method: 'POST',
            headers: {
              'Content-type': 'application/json',
            },
            body: JSON.stringify({ user, account }),
          })
          if (res.ok) {
            return true
          }
        } catch (error) {
          console.log(error)
          return false
        }
      }
      return true
    },
  },
})

// import NextAuth from 'next-auth'
// import GitHub from 'next-auth/providers/github'
// import Google from 'next-auth/providers/google'
// import connectMongoDB from './lib/mongodb'
// import User from './models/user'
// export const { handlers, signIn, signOut, auth } = NextAuth({
//   providers: [Google, GitHub],
//   pages: {
//     signIn: '/login',
//   },
//   callbacks: {
//     async signIn({ user, account }) {
//       const apiUrl = process.env.API_URL
//       const { name, email } = user
//       if (account?.provider === 'google' || account?.provider === 'github') {
//         try {
//           await connectMongoDB()
//           const userExists = await User.findOne({ email })
//           if (!userExists) {
//             const res = await fetch(`${apiUrl}/api/user`, {
//               method: 'POST',
//               headers: {
//                 'Content-Type': 'application/json',
//               },
//               body: JSON.stringify({ name, email }),
//             })
//             if (res.ok) {
//               return true
//             }
//           }
//         } catch (error) {
//           console.log(error)
//           return false
//         }
//       }
//       return true
//     },
//   },
// })
