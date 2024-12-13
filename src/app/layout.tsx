import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'
import Header from 'src/components/Header'
import { NextAuthProvider } from 'src/components/Providers'

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
})
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
})

export const metadata: Metadata = {
  title: 'MogngoDB CRUD',
  description: 'Create, Read, Update, and Delete in MongoDB',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    // <ClerkProvider
    //   publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}
    // >
    //   <html lang="ko">
    //     <body
    //       className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    //     >
    //       <div className="max-w-4xl mx-auto"></div>
    //       <Header />

    //       <main className="container">
    //         <div className="flex ml-60 md:ml-60 mt-10  min-h-screen mb-4  ">
    //           <div>{children}</div>
    //         </div>
    //       </main>
    //     </body>
    //   </html>
    // </ClerkProvider>

    <html lang="en">
      <body>
        <NextAuthProvider>
          <div className="mx-auto p-4">
            <Header />
            <div className="mt-8">{children}</div>
          </div>
        </NextAuthProvider>
      </body>
    </html>
  )
}
