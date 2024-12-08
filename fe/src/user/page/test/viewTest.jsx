const ViewTest = () => {
  return (
    <div className="bg-slate-50 p-3  overflow-auto md:h-full md:overflow-hidden">
      <div className="flex  flex-col gap-4 md:grid md:grid-cols-4 md:grid-rows-5 md:gap-4 h-full">
        <div className="col-start-1 col-end-3 row-start-1 row-end-2 bg-blue-500 w-full min-h-[100px] rounded-lg">
          1
        </div>
        <div className="col-start-1 col-end-3 row-start-2 row-end-6 bg-red-500 w-full min-h-[400px] rounded-lg">
          2
        </div>
        <div className="col-start-3 col-end-5 row-start-1 row-end-6 bg-green-500 w-full min-h-[600px] rounded-lg">
          3
        </div>
      </div>
    </div>
  )
}

export default ViewTest
