import { useEffect, useState, useCallback, useMemo, useRef } from 'react'
import { DataEditor, GridCellKind } from '@glideapps/glide-data-grid'
import { Button } from 'antd'
import '@glideapps/glide-data-grid/dist/index.css'
import { useNavigate } from 'react-router-dom'
import { CompactSelection } from '@glideapps/glide-data-grid'
import { TableOutlined } from '@ant-design/icons'
const SearchButton = ({ onClick }) => (
  <Button onClick={onClick}>Show Search</Button>
)

function TableDeliveryList({
  data,
  onCellClicked,
  gridData,
  setGridData,
}) {
  const [showSearch, setShowSearch] = useState(false)
  const ref = (useRef < data) | (null > null)
  const onSearchClose = useCallback(() => setShowSearch(false), [])

  const [selection, setSelection] = useState({
    columns: CompactSelection.empty(),
    rows: CompactSelection.empty(),
  })
  const columns = useMemo(
    () => [
      { title: 'DelvNo' },
      { title: 'DelvMngNo' },
      { title: 'ImpType' },
      { title: 'TotalQty' },
      { title: 'OkQty' },
      { title: 'RemainQty' },
      { title: 'DelvDate' },
      { title: 'CustSeq' },
      { title: 'CustNm' },
      { title: 'DomOrImp' },
      { title: 'PurchaseType' },
      { title: 'BizUnitName' },
      { title: 'BizUnit' },
      { title: 'EmpSeq' },
      { title: 'EmpName' },
      { title: 'DeptSeq' },
      { title: 'DeptName' },
      { title: 'CurrSeq' },
      { title: 'CurrName' },
      { title: 'ExRate' },
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
        DelvNo = '',
        DelvMngNo = '',
        ImpType = '',
        TotalQty = '',
        OkQty = '',
        RemainQty = '',
        DelvDate = '',
        CustSeq = '',
        CustNm = '',
        DomOrImp = '',
        PurchaseType = '',
        BizUnitName = '',
        BizUnit = '',
        EmpSeq = '',
        EmpName = '',
        DeptSeq = '',
        DeptName = '',
        CurrSeq = '',
        CurrName = '',
        ExRate = '',
      } = person

      const safeString = (value) => (value != null ? String(value) : '')

      const columnMap = {
        0: { kind: GridCellKind.Text, data: safeString(DelvNo) },
        1: { kind: GridCellKind.Text, data: safeString(DelvMngNo) },
        2: { kind: GridCellKind.Text, data: safeString(ImpType) },
        3: { kind: GridCellKind.Text, data: safeString(TotalQty) },
        4: { kind: GridCellKind.Text, data: safeString(OkQty) },
        5: { kind: GridCellKind.Text, data: safeString(RemainQty) },
        6: { kind: GridCellKind.Text, data: safeString(DelvDate) },
        7: { kind: GridCellKind.Text, data: safeString(CustSeq) },
        8: { kind: GridCellKind.Text, data: safeString(CustNm) },
        9: { kind: GridCellKind.Text, data: safeString(DomOrImp) },
        10: { kind: GridCellKind.Text, data: safeString(PurchaseType) },
        11: { kind: GridCellKind.Text, data: safeString(BizUnitName) },
        12: { kind: GridCellKind.Text, data: safeString(BizUnit) },
        13: { kind: GridCellKind.Text, data: safeString(EmpSeq) },
        14: { kind: GridCellKind.Text, data: safeString(EmpName) },
        15: { kind: GridCellKind.Text, data: safeString(DeptSeq) },
        16: { kind: GridCellKind.Text, data: safeString(DeptName) },
        17: { kind: GridCellKind.Text, data: safeString(CurrSeq) },
        18: { kind: GridCellKind.Text, data: safeString(CurrName) },
        19: { kind: GridCellKind.Text, data: safeString(ExRate) },
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

  const onGridSelectionChange = (newSelection) => {
    console.log('Selection aborted', newSelection)
  }

  return (

    <div className="w-full gap-1 h-full flex items-center justify-center pb-8">
      <div className="w-full h-full flex flex-col border bg-white rounded-lg overflow-hidden ">
        <h2 className="text-xs font-medium flex items-center gap-2 p-2 text-blue-600 uppercase">
          <TableOutlined />
          DATA SHEET
        </h2>
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
    </div>
  )
}

export default TableDeliveryList
