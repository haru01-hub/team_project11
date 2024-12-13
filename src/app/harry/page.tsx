import TopicList from 'src/components/TopicList'
import React from 'react'

export default async function harryPage() {
  return (
    <div>
      <h2 className="text-2xl text-center font-bold mb-2">Book Debate</h2>
      <div className="border p-5 m-20 ">
        <div>
          <div className="pl-10 justify-center">
            <TopicList />
          </div>
        </div>
      </div>
    </div>
  )
}
