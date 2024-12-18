'use client'

import Link from 'next/link'

export default function TeamInfopage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4 text-center ">Project Goal</h1>
      <div className="flex">
        <div className="shadow-lg mr-5 ml-5">
          <h2 className="text-center border-2 rounded-lg p-2 ">
            <p className="font-bold text-xl">프로젝트 목표</p>
            독서를 즐기고 있는 사람들에게는 자신이 좋아하는 책, 작가, 캐릭터,
            구절, 책의 의미, 작가 표현력 등에 대하여 토론을 할 수 있는 토론창을
            통해 참여함으로써, 책을 한층 더 깊이 있게 읽을 수 있게 됩니다. 혹은
            독서를 잘 즐기지 못하는 사람들에게는 게시판을 마련해줌으로써,
            사람들과 즐겁게 대화를 하며 한층 더 독서에 쉽고 깊이 있게 다가갈 수
            있으며, 사람들과 자신의 생각을 자유롭게 나누면서 다른 사람들의
            생각도 이해하며, 관점도 넓어지고 사고도 깊어지는 기대효과 또한
            노려볼 수 있습니다. 또한 다독자가 되어 얻은 포인트를 통해 책을
            구매하면서 책에 대한 접근성을 낮출 수 있습니다.
          </h2>
        </div>
        <br />
        <div className=" shadow-lg mr-5">
          <p className="text-center  border-2 rounded-lg p-2 ">
            <p className="font-bold text-xl">팀 목표</p>
            책을 읽은 후, 그 책에 대해서 토론하고 싶지만 그에 대하여 이야기를
            나눌 수 있는 곳이 많이 없었던 경험에 대하여 공감하면서 이 프로젝트를
            시작하게 되었습니다. 책을 종류별로 모아, 한 책에 대해서 이야기를 할
            수 있는 방을 만들면 어떨까라는 생각을 하였고, 이를 웹 페이지와
            연결하게 되었습니다. 저희는 사람들이 더 나은 컨텐츠를 즐길 수 있는
            접근성 좋은 웹 페이지를 만드는 것이 목표입니다.
          </p>
        </div>
      </div>
      <br />
      <div className="">
        <div className="text-center border-2 rounded-lg shadow-lg">
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
            <Link
              href="https://github.com/KIMDAYE04"
              className="text-purple-800"
            >
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
      </div>
      <div>
        <h1 className="text-2xl font-bold mb-4 text-center">
          웹 페이지 상세 소개
        </h1>
        <p>
          books : 이 페이지는 링크가 걸려있지 않았습니다. 아직 처리는 하진
          않았지만 관리자 이메일을 정해 관리자만 접속할 수 있도록 합니다. 해당
          관리자는 이 페이지에서 네이버 api로부터 받아온 내용을 선택하고
          저장하여 사용자가 리뷰를 작성할 수 있는 book-list 페이지에 띄웁니다.
          <br />
          book-list:여기는 관리자로부터 받아온 네이버api 중 데이터베이스에
          저장된 일부 책이 존재합니다. 해당 책에 대하여 리뷰와 토론을 할 수
          있습니다. <br />
          토론하기 페이지에서는 각 사용자들이 해당 책에 대하여 토론을 할 수
          있습니다. 단순한 감상문이 아닌 해당 내용에 대하여 의문점 , 숨겨진
          비밀, 작가의 의도 등에 대해서 누구의 생각이 괜찮은 지 자유롭게 토론할
          수 있습니다. <br />
          다음 리뷰하기 창입니다. 리뷰하기에서는 토론을 즐겁게 한 후, 별점을
          통해 리뷰를 남기거나, 다른 사람의 리뷰를 보면서 서로의 관점도 볼 수
          있고, 다양한 비슷한 관심사의 책도 추천받아 다른 책 페이지에서 토론하는
          것을 즐길 수 있습니다.
          <br />
          그리고 마지막으로 myprofile 창에서 나는 작가!라는 버튼을 누르면, 오늘
          토론하면서 느꼈던 감정, 생각 등을 정리해보거나, 자신만의 글을 지어볼
          수도 있습니다.
          <br />
          <br />
          이번에 시간이 부족하여 만들지는 못했지만, 나는 작가!라는 페이지에서 쓴
          자신만의 글 중 공유하고 싶은 글이 있다면 선택하여 book-sns창에
          공유하는 기능을 만들고 싶습니다. 또한 어떤 책이 있었으면 좋겠다 등의
          요청을 담는 건의함 같은 페이지 도 만들고 싶습니다.
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
