import { useEffect, useState, useCallback, useMemo, useRef } from 'react'
import { DataEditor, GridCellKind } from '@glideapps/glide-data-grid'
import { Button } from 'antd'
import '@glideapps/glide-data-grid/dist/index.css'
import { useNavigate } from 'react-router-dom'
import '../../../../static/css/customTabe.css'
import { CompactSelection } from '@glideapps/glide-data-grid'
import { TableOutlined } from '@ant-design/icons'
const SearchButton = ({ onClick }) => (
  <Button onClick={onClick}>Show Search</Button>
)

function TableRootMenuManagement({
  data,
  onCellClicked,
  setSelection,
  selection,
  setShowSearch,
  showSearch,
}) {
  const [gridData, setGridData] = useState([])

  const ref = (useRef < data) | (null > null)
  const onSearchClose = useCallback(() => setShowSearch(false), [])

  const columns = useMemo(
    () => [
      { title: 'Key' },
      { title: 'Label', width: 300 },
      { title: 'Link', width: 350 },
      { title: 'Icon' },
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
      const { Key = '', Label = '', Link = '', Icon = '' } = person

      const safeString = (value) => (value != null ? String(value) : '')
      const safeNumber = (value) => (value != null ? Number(value) : 0)

      const columnMap = {
        0: { kind: GridCellKind.Text, data: safeString(Key) },
        1: { kind: GridCellKind.Text, data: safeString(Label) },
        2: { kind: GridCellKind.Text, data: safeString(Link) },
        3: { kind: GridCellKind.Text, data: safeString(Icon) },
      }

      if (columnMap.hasOwnProperty(col)) {
        const { kind, data } = columnMap[col]

        return {
          kind,
          data,
          displayData: data,
        }
      }

      return { kind: GridCellKind.Text, data: '', displayData: '' }
    },
    [gridData],
  )

  const [lastActivated, setLastActivated] = useState(undefined)

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
          rowSelect="multi"
          gridSelection={selection}
          onGridSelectionChange={setSelection}
          isDraggable={false}
          getRowThemeOverride={(i) =>
            i % 2 === 0
              ? undefined
              : {
                  bgCell: '#F7F7F7',
                }
          }
        />
      </div>
    </div>
  )
}

export default TableRootMenuManagement
