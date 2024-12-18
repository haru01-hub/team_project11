'use client'
import Link from 'next/link'
import Image from 'next/image'
import { useSession } from 'next-auth/react'
import React from 'react'

export default function MyProfile() {
  const { data: session } = useSession()

  return (
    <div>
      <h3 className="text-2xl text-left font-bold mb-2">My profile</h3>
      <hr />
      <br />
      <div className="flex items-center">
        <div>
          <Image
            className="bg-gray-400 hover:bg-cyan-200 mr-4 ml-4 rounded-full"
            src={session?.user?.image ?? '/default-avatar.png'}
            alt={session?.user?.name ?? 'user'}
            width={90}
            height={90}
          />
        </div>
        <div className="ml-4">
          <p className="text-xl font-bold">
            {session?.user?.name ?? <Link href="/login">로그인 정보 없음</Link>}
          </p>
          <div>{/* <Link href="/login">로그인</Link> */}</div>
          <p className="text-gray-600">{session?.user?.email ?? ''}</p>
        </div>
        <div className="ml-auto"></div>
      </div>
      <div
        className="bg-gray-300 mt-5 rounded-3xl"
        style={{ width: '100%', height: '90px' }}
      >
        <div className="flex items-center justify-between mr-5 mt-10">
          {/* <h1 className="ml-10 pt-7">
            <span className="ml-5 mr-5 font-bold text-3xl text-yellow-100">
              10,000
            </span>
            Point
          </h1> */}
          <div className="flex items-center justify-center text-gray-800">
            <Link href="/receipt">
              <p className="p-3 bg-yellow-100 rounded-3xl mt-5 mr-5 ml-5 hover:bg-blue-200">
                활동내역
              </p>
            </Link>
            <Link href="/book-report">
              <p className="p-3 bg-yellow-100 rounded-3xl mt-5 hover:bg-blue-200">
                나도 작가!
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
