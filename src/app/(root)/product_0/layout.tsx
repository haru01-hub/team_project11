// import Footer from 'components/shared/footer'
// import Header from 'components/shared/header'
import React from 'react'
import Header from 'src/components/Header'
import Footer from 'src/components/shared/footer'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex h-screen flex-col">
      <Header />
      <main className="flex-1 wrapper">{children}</main>
      <Footer />
    </div>
  )
}
