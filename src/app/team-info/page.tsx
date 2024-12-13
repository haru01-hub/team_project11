'use client'

import Link from 'next/link'

export default function TeamInfopage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4 text-center">Project Goal</h1>
      <h2 className="text-center border-2 rounded-lg p-2">
        <p className="font-bold text-xl">프로젝트 목표</p>
        독서를 즐기고 있는 사람들에게는 자신이 좋아하는 책, 작가, 캐릭터, 구절,
        책의 의미, 작가 표현력 등에 대하여 토론을 할 수 있는 토론창을 통해
        참여함으로써, 책을 한층 더 깊이 있게 읽을 수 있게 됩니다. 혹은 독서를 잘
        즐기지 못하는 사람들에게는 게시판을 마련해줌으로써, 사람들과 즐겁게
        대화를 하며 한층 더 독서에 쉽고 깊이 있게 다가갈 수 있으며, 사람들과
        자신의 생각을 자유롭게 나누면서 다른 사람들의 생각도 이해하며, 관점도
        넓어지고 사고도 깊어지는 기대효과 또한 노려볼 수 있습니다. 또한 다독자가
        되어 얻은 포인트를 통해 책을 구매하면서 책에 대한 접근성을 낮출 수
        있습니다.
      </h2>
      <br />
      <p className="text-center border-2 rounded-lg p-2">
        <p className="font-bold text-xl">팀 목표</p>
        책을 읽은 후, 그 책에 대해서 토론하고 싶지만 그에 대하여 이야기를 나눌
        수 있는 곳이 많이 없었던 경험에 대하여 공감하면서 이 프로젝트를 시작하게
        되었습니다. 책을 종류별로 모아, 한 책에 대해서 이야기를 할 수 있는 방을
        만들면 어떨까라는 생각을 하였고, 이를 웹 페이지와 연결하게 되었습니다.
        저희는 사람들이 더 나은 컨텐츠를 즐길 수 있는 접근성 좋은 웹 페이지를
        만드는 것이 목표입니다.
      </p>
      <br />
      <div className="text-center border-2 rounded-lg">
        <h1 className="text-center font-bold text-xl">Team 개발 조아핑</h1>

        <p>
          <p className="font-bold">▶ 정보보호학과 팀장</p>
          안지영_92313415
          <br />
          <Link
            href="https://github.com/jiyoung5566/personal-web"
            className="text-purple-800"
          >
            github
          </Link>
          <br />
          <Link
            href="https://personal-web-khaki-zeta.vercel.app"
            className="text-purple-800"
          >
            vercel
          </Link>
          <br />
          <hr />
          <p className="font-bold">▶ 팀원</p>
          김다예_92313295 <br />
          <Link href="https://github.com/KIMDAYE04" className="text-purple-800">
            github
          </Link>
          <br />
          <Link
            href="https://portfolio-mu-ashen-24.vercel.app/"
            className="text-purple-800"
          >
            vercel
          </Link>
          <br />
          신지영_92313403
          <br />
          <Link
            href="https://github.com/shinjiyoung04"
            className="text-purple-800"
          >
            github
          </Link>
          <br />
          <Link
            href="https://profile-nu-blue.vercel.app"
            className="text-purple-800"
          >
            vercel
          </Link>
          <br />
          이서연_92313491 <br />
          <Link
            href="https://github.com/haru01-hub/Web_Personal_Project"
            className="text-purple-800"
          >
            github
          </Link>
          <br />
          <Link
            href="https://web-personal-project.vercel.app"
            className="text-purple-800"
          >
            vercel
          </Link>
          <br />
          정은수_92313659
          <br />
          <Link
            href="https://github.com/jungeunsu?tab=repositories"
            className="text-purple-800"
          >
            github
          </Link>
          <br />
          <Link
            href="https://portpolio-ruddy.vercel.app/"
            className="text-purple-800"
          >
            vercel
          </Link>
          <br />
        </p>
      </div>
      <br />
      <br />
      <h1 className="text-2xl font-bold mb-4 text-center">Video</h1>
      <div className="flex justify-center">
        <video
          className="mt-2"
          autoPlay={false}
          controls={true}
          muted={true}
          loop={true}
          width={700}
          src="/web_video.mp4"
        />
      </div>
    </div>
  )
}
