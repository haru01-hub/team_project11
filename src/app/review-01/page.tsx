import Link from 'next/link'
import TopicList from 'src/components/TopicList'

export default function Review() {
  return (
    <div>
      <h1>토론하기</h1>
      <div className="flex justify-end">
        <Link
          className="bg-green-800 text-white font-bold px-4 py-2 rounded-md"
          href="/addTopic"
        >
          Add Write
        </Link>
      </div>
      <TopicList />
    </div>
  )
}
