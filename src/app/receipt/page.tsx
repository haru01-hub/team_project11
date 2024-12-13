import React from 'react'

export default function receiptpage() {
  return (
    <div>
      <p className="font-bold text-2xl">Receipt</p>
      <br />
      <p className="text-1xl">2024</p>
      <p className="text-1xl mb-2">October</p>
      <hr />
      <div className="flex justify-between items-center mt-2 mb-2">
        <p className="text-3xl mt-2 text-red-500">+ 200 pt</p>

        <p className="text-gray-400 ml-20">
          2024.10.05
          <br />
          다독자 1위
        </p>
      </div>
      <hr />
      <div className="flex justify-between items-center mt-2 mb-2">
        <p className="text-3xl mt-2 text-blue-500">- 100 pt</p>

        <p className="text-gray-400 ml-20">
          2024.10.05
          <br />
          인간실격 - 다자이 오사무 구매
        </p>
      </div>
      <hr />
    </div>
  )
}
