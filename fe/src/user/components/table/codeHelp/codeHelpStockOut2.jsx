import { useEffect, useState, useCallback, useMemo, useRef } from 'react'
import { DataEditor, GridCellKind } from '@glideapps/glide-data-grid'
import { Button } from 'antd'
import '@glideapps/glide-data-grid/dist/index.css'
import { CompactSelection } from '@glideapps/glide-data-grid'

const SearchButton = ({ onClick }) => (
  <Button onClick={onClick}>Show Search</Button>
)

function TableCodeHelpStockOut2({ data, onCellClicked, setSelection, selection }) {
  const [gridData, setGridData] = useState([])
  const [showSearch, setShowSearch] = useState(false)
  const ref = (useRef < data) | (null > null)
  const onSearchClose = useCallback(() => setShowSearch(false), [])
  const columns = useMemo(
    () => [
      { title: 'EmpName' },
      { title: 'EmpID' },
      { title: 'DeptName' },
      { title: 'WkDeptName' },
      { title: 'UMJoName' },
      { title: 'PosName' },
      { title: 'UMJpName' },
      { title: 'UMJdName' },
      { title: 'TypeName' },
      { title: 'SMSexName' },
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
        EmpName = '',
        EmpID = '',
        DeptName = '',
        WkDeptName = '',
        UMJoName = '',
        PosName = '',
        UMJpName = '',
        UMJdName = '',
        TypeName = '',
        SMSexName = '',
      } = person

      const safeString = (value) => (value != null ? String(value) : '')

      const columnMap = {
        0: { kind: GridCellKind.Text, data: safeString(EmpName) },
        1: { kind: GridCellKind.Text, data: safeString(EmpID) },
        2: { kind: GridCellKind.Text, data: safeString(DeptName) },
        3: { kind: GridCellKind.Text, data: safeString(WkDeptName) },
        4: { kind: GridCellKind.Text, data: safeString(UMJoName) },
        5: { kind: GridCellKind.Text, data: safeString(PosName) },
        6: { kind: GridCellKind.Text, data: safeString(UMJpName) },
        7: { kind: GridCellKind.Text, data: safeString(UMJdName) },
        8: { kind: GridCellKind.Text, data: safeString(TypeName) },
        9: { kind: GridCellKind.Text, data: safeString(SMSexName) },
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

export default TableCodeHelpStockOut2
