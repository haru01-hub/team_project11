// import { currentUser } from '@clerk/nextjs/server'

export default async function Home() {
  // const user = await currentUser()
  return (
    <div className="flex">
      <img
        className="bg-gray-400 hover:bg-cyan-200 mr-2 mt-20 ml-30"
        width={300}
        height={300}
        src="/woman-book.jpg"
        alt="main page"
      />
      <div>
        <p className="font-bold text-2xl ml-10 mt-20">WITH BOOK 웹 페이지</p>
        <br />
        <hr />
        <p className=" ml-10 mt-2">
          {/* 저희 웹 페이지에 찾아주셔서 감사합니다. {user?.fullName}님. <br /> */}
          저희 WITH BOOK 페이지에서는 다양한 읽을 거리에
          <br /> 대헤 토론할 수 있는 토론창이 마련되어, 소설이나 책에 <br />
          깊은 관심을 두고 있는 여러분들이 자신의 이야기를 <br />
          마음껏 펼칠 수 있습니다. 그 책에 대한 분석, 매력적인 캐릭터,
          <br /> 작가의 문장 구사력(표현력) 등, 이야기해낼 수 있습니다.
          <br />
          자신의 의견 및 이야기를 들려주세요.
        </p>
        <br />
      </div>
    </div>
  )
}
