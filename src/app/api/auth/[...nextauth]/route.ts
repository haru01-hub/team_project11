//src/app/api/auth/[...nextauth]/route.ts
import { handlers } from 'src/auth' // Referring to the auth.ts we just created
export const { GET, POST } = handlers

import GitHubProvider from 'next-auth/providers/github'
import GoogleProvider from 'next-auth/providers/google'

// export const authOptions = {
//   providers: [
//     GitHubProvider({
//       clientId: process.env.GITHUB_ID,
//       clientSecret: process.env.GITHUB_SECRET,
//     }),
//     GoogleProvider({
//       clientId: process.env.GOOGLE_ID,
//       clientSecret: process.env.GOOGLE_SECRET,
//     }),
//   ],
//   secret: process.env.NEXTAUTH_SECRET,
// }
