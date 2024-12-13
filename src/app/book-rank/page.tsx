export default async function BookRank() {
  return (
    <div>
      <h3 className="text-2xl text-left font-bold mb-2">Reader Ranking</h3>
      <hr />
      <br />
      <div className="flex ">
        <div className=" flex border-2 border-gray-300  bg-yellow-50  mr-20 p-10 flex-row items-center">
          <p className="font-bold">1위</p>
          <p className="font-bold ml-2">이서연</p>
        </div>
        <div className="flex border-2 border-gray-300   bg-yellow-50 mr-20 p-10 flex-row items-center">
          <p className="font-bold">2위</p>
          <p className="font-bold ml-2">000</p>
        </div>
        <div className="flex border-2 border-gray-300   bg-yellow-50 mr-20 p-10 flex-row items-center">
          <p className="font-bold">3위</p>
          <p className="font-bold ml-2">111</p>
        </div>
        <div className="flex border-2 border-gray-300   bg-yellow-50 p-10 flex-row items-center">
          <p className="font-bold">4위</p>
          <p className="font-bold ml-2">111</p>
        </div>
      </div>

      <div>
        <div className="border-2 border-gray-300 bg-yellow-50 mt-10 ">
          <p className="pl-3">5위 000 </p>
          <hr />
          <p className="pl-3">6위 000 </p>
        </div>
      </div>
    </div>
  )
}
