import { useEffect, useState, useCallback, useMemo, useRef } from 'react'
import { DataEditor, GridCellKind } from '@glideapps/glide-data-grid'
import { Button } from 'antd'
import '@glideapps/glide-data-grid/dist/index.css'
import { CompactSelection } from '@glideapps/glide-data-grid'

const SearchButton = ({ onClick }) => (
  <Button onClick={onClick}>Show Search</Button>
)

function TableCodeHelpStockOut3({ data, onCellClicked }) {
  const [gridData, setGridData] = useState([])
  const [showSearch, setShowSearch] = useState(false)
  const ref = (useRef < data) | (null > null)
  const onSearchClose = useCallback(() => setShowSearch(false), [])
  const [selection, setSelection] = useState({
    columns: CompactSelection.empty(),
    rows: CompactSelection.empty(),
  })
  const columns = useMemo(
    () => [
      { title: 'CustSeq' },
      { title: 'FullName' },
      { title: 'CustNo' },
      { title: 'BizNo' },
      { title: 'UMCustClassName' },
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
        CustSeq = '',
        FullName = '',
        CustNo = '',
        BizNo = '',
        UMCustClassName = '',
      } = person

      const safeString = (value) => (value != null ? String(value) : '')

      const columnMap = {
        0: { kind: GridCellKind.Text, data: safeString(CustSeq) },
        1: { kind: GridCellKind.Text, data: safeString(FullName) },
        2: { kind: GridCellKind.Text, data: safeString(CustNo) },
        3: { kind: GridCellKind.Text, data: safeString(BizNo) },
        4: { kind: GridCellKind.Text, data: safeString(UMCustClassName) },
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

  return (
    <div className="w-full gap-1 h-full flex items-center justify-center pb-8">
      <div className="w-full h-full flex flex-col border bg-white rounded-lg overflow-hidden ">
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
          rowSelect="multi"
          gridSelection={selection}
          onGridSelectionChange={setSelection}
        />
      </div>
    </div>
  )
}

export default TableCodeHelpStockOut3
