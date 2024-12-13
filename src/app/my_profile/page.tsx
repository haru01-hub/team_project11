// 'use client'
// import Link from 'next/link'
// import Image from 'next/image'

// export default function MyProfile() {
//   return (
//     <div>
//       <h3 className="text-2xl text-left font-bold mb-2">My profile</h3>
//       <hr />
//       <br />
//       <div className="flex">
//         <div>
//           <Image
//             className="bg-gray-400 hover:bg-cyan-200 mr-2 ml-4 rounded-full"
//             src="/profile.jpg"
//             alt="프로필 사진"
//             width={90}
//             height={90}
//           />
//         </div>
//       </div>
//       <div
//         className="bg-gray-300 mt-5 rounded-3xl"
//         style={{ width: '100%', height: '90px' }}
//       >
//         <div className="flex items-center justify-between mr-5 mt-10">
//           <h1 className="ml-10 pt-7">
//             My Point
//             <span className="ml-5 mr-5 font-bold text-3xl text-yellow-100">
//               10,000
//             </span>
//             Point
//           </h1>
//           <div className="flex text-gray-800">
//             <Link href="/receipt">
//               <p className="p-3 bg-yellow-100 rounded-3xl mt-5 mr-5 hover:bg-blue-200">
//                 이용내역
//               </p>
//             </Link>
//             <Link href="">
//               <p className="p-3 bg-yellow-100 rounded-3xl mt-5 hover:bg-blue-200">
//                 포인트사용하기
//               </p>
//             </Link>
//           </div>
//         </div>
//       </div>

//       <div className="flex">
//         <div className="border-2 mt-10 p-10 underline w-1/4">
//           <Link href="" className="mb-5 text-black hover:text-blue-400">
//             NewWrite
//           </Link>
//           <hr />
//           <Link href="/app/EditTopicForm" className="hover:text-blue-400 mb-4">
//             2024.10.08
//           </Link>
//           <br />
//           <hr />
//           <Link href="" className="hover:text-blue-400 mb-4">
//             2024.06.18
//           </Link>
//           <br />
//           <hr />
//           <Link href="" className="hover:text-blue-400 mb-4">
//             2024.01.13
//           </Link>
//           <br />
//           <hr />
//           <Link href="" className="hover:text-blue-400 mb-4">
//             2023.09.23
//           </Link>
//           <br />
//         </div>

//         <div className="ml-10 w-3/4 mt-5">
//           <div className="flex justify-between mt-1">
//             <Link href="/write" className="underline hover:text-gray-400">
//               ▶ 작성된 독후감 보기
//             </Link>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

'use client'
import Link from 'next/link'
import Image from 'next/image'
import { useSession } from 'next-auth/react'
import React from 'react'
import { Write } from 'src/components/Write'

export default function MyProfile() {
  const { status, data: session } = useSession()

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
        <div className="ml-auto">
          <p className="text-center font-bold">
            ❝ 모든 인간의 삶은 각자 자신에게로 이르는 길이다. ❞<br />- 데미안
          </p>
        </div>
      </div>
      <div
        className="bg-gray-300 mt-5 rounded-3xl"
        style={{ width: '100%', height: '90px' }}
      >
        <div className="flex items-center justify-between mr-5 mt-10">
          <h1 className="ml-10 pt-7">
            My Point
            <span className="ml-5 mr-5 font-bold text-3xl text-yellow-100">
              10,000
            </span>
            Point
          </h1>
          <div className="flex text-gray-800">
            <Link href="/receipt">
              <p className="p-3 bg-yellow-100 rounded-3xl mt-5 mr-5 hover:bg-blue-200">
                이용내역
              </p>
            </Link>
            <Link href="/purchase">
              <p className="p-3 bg-yellow-100 rounded-3xl mt-5 hover:bg-blue-200">
                포인트사용하기
              </p>
            </Link>
          </div>
        </div>
      </div>

      <Write />
    </div>
  )
}
