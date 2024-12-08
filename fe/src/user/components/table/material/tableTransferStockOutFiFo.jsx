import { ArrowLeftIcon } from '../../icons'
import TableStockOUtFiFoA from './tableStockOutFiFoA'
import TableStockOUtFiFoB from './tableStockOutFiFoB'

function TableTransferStockOutFiFo({
  sampleTableA,
  sampleTableB,
  setSelection,
  selection,
}) {
  return (
    <div className="w-full gap-1 h-full flex items-center justify-center">
      <div className="w-[55%] h-full flex flex-col border bg-white rounded-lg overflow-hidden pb-7">
        <div className=" text-xs font-medium flex items-center gap-2 p-2 text-blue-600 uppercase ">B</div>
        <TableStockOUtFiFoB data={sampleTableB} setSelection={setSelection} selection={selection} />
      </div>
      <div className="px-4 flex flex-col p-3  bg-[#eee] rounded-lg items-center justify-center">
        <ArrowLeftIcon />
      </div>
      <div className="w-[45%] h-full flex flex-col border bg-white rounded-lg overflow-hidden pb-7">
        <div className=" text-xs font-medium flex items-center gap-2 p-2 text-blue-600 uppercase ">A</div>
        <TableStockOUtFiFoA data={sampleTableA} />
      </div>
    </div>
  )
}

export default TableTransferStockOutFiFo
