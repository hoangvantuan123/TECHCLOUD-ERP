import { useEffect, useState, useCallback, useMemo, useRef } from 'react'
import { DataEditor, GridCellKind } from '@glideapps/glide-data-grid'
import { Button } from 'antd'
import '@glideapps/glide-data-grid/dist/index.css'
import { useNavigate } from 'react-router-dom'
import { CompactSelection } from '@glideapps/glide-data-grid'

const SearchButton = ({ onClick }) => (
  <Button onClick={onClick}>Show Search</Button>
)

function TableStockOUtFiFoB({ data, selection, setSelection }) {
  const [gridData, setGridData] = useState([])
  const [showSearch, setShowSearch] = useState(false)
  const ref = (useRef < data) | (null > null)
  const onSearchClose = useCallback(() => setShowSearch(false), [])
  const [clickedRowData, setClickedRowData] = useState(null)
  const [clickedRowDataList, setClickedRowDataList] = useState([])
  const [isMinusClicked, setIsMinusClicked] = useState(false)
  const [lastClickedCell, setLastClickedCell] = useState(null)
  const columns = useMemo(
    () => [
      { title: 'OutReqSeq' },
      { title: 'OutReqItemSerl' },
      { title: 'WorkOrderSeq' },
      { title: 'WorkOrderSerl' },
      { title: 'FactUnit' },
      { title: 'FactUnitName' },
      { title: 'InWHSeq' },
      { title: 'InWHName' },
      { title: 'OutWHSeq' },
      { title: 'OutWHName' },
      { title: 'ItemSeq' },
      { title: 'UnitSeq' },
      { title: 'ItemNo' },
      { title: 'LotNo' },
      { title: 'Qty' },
      { title: 'DateCode' },
      { title: 'ReelNo' },
      { title: 'Barcode' },
      { title: 'StockOutDate' },
      { title: 'LotNoFull' },
      { title: 'ReqQty' },
      { title: 'EmpSeq' },
    ],
    [],
  )


  const [cols, setCols] = useState(columns)
  const onColumnResize = useCallback(
    (column, newSize) => {
      const index = cols.indexOf(column)
      if (index !== -1) {
        const newCol = {
          ...column,
          width: newSize,
        }
        const newCols = [...cols]
        newCols.splice(index, 1, newCol)
        setCols(newCols)
      }
    },
    [cols],
  )


  const getData = useCallback(
    ([col, row]) => {
      const person = gridData[row] || {}
      const {
        OutReqSeq = '',
        OutReqItemSerl = '',
        WorkOrderSeq = '',
        WorkOrderSerl = '',
        FactUnit = '',
        FactUnitName = '',
        InWHSeq = '',
        InWHName = '',
        OutWHSeq = '',
        OutWHName = '',
        ItemSeq = '',
        UnitSeq = '',
        ItemNo = '',
        LotNo = '',
        Qty = '',
        DateCode = '',
        ReelNo = '',
        Barcode = '',
        StockOutDate = '',
        LotNoFull = '',
        ReqQty = '',
        EmpSeq = '',
      } = person

      const safeString = (value) => (value != null ? String(value) : '')

      const columnMap = {
        0: { kind: GridCellKind.Text, data: safeString(OutReqSeq) },
        1: { kind: GridCellKind.Text, data: safeString(OutReqItemSerl) },
        2: { kind: GridCellKind.Text, data: safeString(WorkOrderSeq) },
        3: { kind: GridCellKind.Text, data: safeString(WorkOrderSerl) },
        4: { kind: GridCellKind.Text, data: safeString(FactUnit) },
        5: { kind: GridCellKind.Text, data: safeString(FactUnitName) },
        6: { kind: GridCellKind.Text, data: safeString(InWHSeq) },
        7: { kind: GridCellKind.Text, data: safeString(InWHName) },
        8: { kind: GridCellKind.Text, data: safeString(OutWHSeq) },
        9: { kind: GridCellKind.Text, data: safeString(OutWHName) },
        10: { kind: GridCellKind.Text, data: safeString(ItemSeq) },
        11: { kind: GridCellKind.Text, data: safeString(UnitSeq) },
        12: { kind: GridCellKind.Text, data: safeString(ItemNo) },
        13: { kind: GridCellKind.Text, data: safeString(LotNo) },
        14: { kind: GridCellKind.Text, data: safeString(Qty) },
        15: { kind: GridCellKind.Text, data: safeString(DateCode) },
        16: { kind: GridCellKind.Text, data: safeString(ReelNo) },
        17: { kind: GridCellKind.Text, data: safeString(Barcode) },
        18: { kind: GridCellKind.Text, data: safeString(StockOutDate) },
        19: { kind: GridCellKind.Text, data: safeString(LotNoFull) },
        20: { kind: GridCellKind.Text, data: safeString(ReqQty) },
        21: { kind: GridCellKind.Text, data: safeString(EmpSeq) },
      }

      if (columnMap.hasOwnProperty(col)) {
        const { kind, data } = columnMap[col]
        return { kind, data, displayData: data }
      }

      return { kind: GridCellKind.Text, data: '', displayData: '' }
    },
    [gridData],
  )


  const [lastActivated, setLastActivated] = useState(undefined)

  const onCellActivated = useCallback((cell) => {
    console.log('cell', cell)
    setLastActivated(cell)
  }, [])

  useEffect(() => {
    setGridData(data)
  }, [data])

  const onCellClicked = (cell, event) => {
    let rowIndex

    if (cell[0] !== -1) {
      console.log('Ignoring click on cell, cell[0] is neither -1 nor 1')
      return
    }

    if (cell[0] === -1) {
      rowIndex = cell[1]
      setIsMinusClicked(true)
    } else {
      rowIndex = cell[0]
      setIsMinusClicked(false)
    }

    if (
      lastClickedCell &&
      lastClickedCell[0] === cell[0] &&
      lastClickedCell[1] === cell[1]
    ) {
      console.log('Click again on the same cell, deactivating.')
      setLastClickedCell(null)
      setClickedRowData(null)
      return
    }

    if (rowIndex >= 0 && rowIndex < gridData.length) {
      const rowData = gridData[rowIndex]
      setClickedRowData(rowData)
      setLastClickedCell(cell)
    } else {
      console.log('Invalid row index:', rowIndex)
    }
  }


  return (
    <div className="w-full h-full border-t border-b overflow-hidden scroll-container ">
      <DataEditor
        columns={cols}
        getCellContent={getData}
        rows={gridData.length}
        showSearch={showSearch}
        getCellsForSelection={true}
        onSearchClose={onSearchClose}
        width="100%"
        height="100%"
        rowMarkers={('checkbox-visible', 'both')}
        useRef={useRef}
        onColumnResize={onColumnResize}
        smoothScrollY={true}
        smoothScrollX={true}
        onCellClicked={onCellClicked}
        rowSelect="single"
        gridSelection={selection}
        onGridSelectionChange={setSelection}
        getRowThemeOverride={(i) =>
          i % 2 === 0
            ? undefined
            : {
              bgCell: '#FBFBFB',
            }
        }
      />
    </div>
  )
}

export default TableStockOUtFiFoB
