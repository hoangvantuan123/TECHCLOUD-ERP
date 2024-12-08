import { useEffect, useState, useCallback, useMemo, useRef } from 'react'
import { DataEditor, GridCellKind } from '@glideapps/glide-data-grid'
import { Button } from 'antd'
import '@glideapps/glide-data-grid/dist/index.css'
import { useNavigate } from 'react-router-dom'
import { CompactSelection } from '@glideapps/glide-data-grid'

const SearchButton = ({ onClick }) => (
  <Button onClick={onClick}>Show Search</Button>
)

function TableTransferWaitingIqcStockInBarcode({
  data,
  selection,
  setSelection,
}) {
  const [gridData, setGridData] = useState([])
  const [showSearch, setShowSearch] = useState(false)
  const ref = (useRef < data) | (null > null)
  const onSearchClose = useCallback(() => setShowSearch(false), [])

  const columns = useMemo(
    () => [
      { title: 'WHName' },
      { title: 'ItemNo' },
      { title: 'LotNo' },
      { title: 'LotNoFull' },
      { title: 'Qty' },
      { title: 'DateCode' },
      { title: 'ReelNo' },
      { title: 'Barcode' },
      { title: 'CreateDate' },
      { title: 'RegDate' },
      { title: 'YYWW' },
      { title: 'YYMM' },
      { title: 'YYMMDD' },
      { title: 'InvoiceNo' },
      { title: 'DateIn' },
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
        WHName = '',
        ItemNo = '',
        LotNo = '',
        LotNoFull = '',
        Qty = '',
        DateCode = '',
        ReelNo = '',
        Barcode = '',
        CreateDate = '',
        RegDate = '',
        YYWW = '',
        YYMM = '',
        YYMMDD = '',
        InvoiceNo = '',
        DateIn = '',
      } = person

      const safeString = (value) => (value != null ? String(value) : '')

      const columnMap = {
        0: { kind: GridCellKind.Text, data: safeString(WHName) },
        1: { kind: GridCellKind.Text, data: safeString(ItemNo) },
        2: { kind: GridCellKind.Text, data: safeString(LotNo) },
        3: { kind: GridCellKind.Text, data: safeString(LotNoFull) },
        4: { kind: GridCellKind.Text, data: safeString(Qty) },
        5: { kind: GridCellKind.Text, data: safeString(DateCode) },
        6: { kind: GridCellKind.Text, data: safeString(ReelNo) },
        7: { kind: GridCellKind.Text, data: safeString(Barcode) },
        8: { kind: GridCellKind.Text, data: safeString(CreateDate) },
        9: { kind: GridCellKind.Text, data: safeString(RegDate) },
        10: { kind: GridCellKind.Text, data: safeString(YYWW) },
        11: { kind: GridCellKind.Text, data: safeString(YYMM) },
        12: { kind: GridCellKind.Text, data: safeString(YYMMDD) },
        13: { kind: GridCellKind.Text, data: safeString(InvoiceNo) },
        14: { kind: GridCellKind.Text, data: safeString(DateIn) },
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
        rowSelect="multi"
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

export default TableTransferWaitingIqcStockInBarcode
