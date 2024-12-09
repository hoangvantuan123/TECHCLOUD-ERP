import { useEffect, useState, useCallback, useMemo, useRef } from 'react'
import { DataEditor, GridCellKind } from '@glideapps/glide-data-grid'
import { Button } from 'antd'
import '@glideapps/glide-data-grid/dist/index.css'
import { TableOutlined } from '@ant-design/icons'
const SearchButton = ({ onClick }) => (
  <Button onClick={onClick}>Show Search</Button>
)

function TableUserManagement({
  data,
  setSelection,
  selection,
  showSearch,
  setShowSearch,
}) {
  const [gridData, setGridData] = useState([])
  const ref = (useRef < data) | (null > null)
  const onSearchClose = useCallback(() => setShowSearch(false), [])
  const [clickedRowData, setClickedRowData] = useState(null)
  const [clickedRowDataList, setClickedRowDataList] = useState([])
  const [isMinusClicked, setIsMinusClicked] = useState(false)
  const [lastClickedCell, setLastClickedCell] = useState(null)
 
  const onCellActivated = useCallback((cell) => {
   
  }, []);
  const lastClickRef = useRef({
    cell: null,
    time: 0,
  });

  const doubleClickTimeout = 300; // Thời gian tối đa giữa hai lần click (ms)



  const columns = useMemo(
    () => [
      { title: 'UserSeq' },
      { title: 'UserName' },
      { title: 'UserId' },
      { title: 'DeptSeq' },
      { title: 'Remark' },
      { title: 'LoginDate' },
      { title: 'LoginStatus' },
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
        UserSeq = '',
        UserName = '',
        UserId = '',
        DeptSeq = '',
        Remark = '',
        LoginDate = '',
        LoginStatus,
      } = person
  
      const safeString = (value) => (value != null ? String(value) : '')
  
      const columnMap = {
        0: { kind: GridCellKind.Text, data: safeString(UserSeq), readonly: false },
        1: { kind: GridCellKind.Text, data: safeString(UserName), readonly: false },
        2: { kind: GridCellKind.Text, data: safeString(UserId), readonly: false },
        3: { kind: GridCellKind.Text, data: safeString(DeptSeq), readonly: false },
        4: { kind: GridCellKind.Text, data: safeString(Remark), readonly: false },
        5: { kind: GridCellKind.Text, data: safeString(LoginDate), readonly: false },
        6: { kind: GridCellKind.Text, data: safeString(LoginStatus), readonly: true }, // Assuming LoginStatus is non-editable
      }
  
      if (columnMap.hasOwnProperty(col)) {
        const { kind, data, readonly } = columnMap[col]
        return { kind, data, displayData: data, readonly, allowOverlay: !readonly } // Show overlay for editable cells
      }
  
      return { kind: GridCellKind.Text, data: '', displayData: '', readonly: true, allowOverlay: false }
    },
    [gridData],
  )

  const [lastActivated, setLastActivated] = useState(undefined)

 

  useEffect(() => {
    setGridData(data)
  }, [data])

  /* DOUBLE CLICK TABLE */
  /* const onCellClicked = (cell) => {
    const [col, row] = cell; 
    console.log("Column:", col, "Row:", row);
  
    const now = Date.now();
    const lastClick = lastClickRef.current;
  
    if (
      lastClick.cell &&
      lastClick.cell.row === row &&
      lastClick.cell.col === col &&
      now - lastClick.time < doubleClickTimeout
    ) {
  
      const rowData = gridData[row];
      if (rowData) {
        console.log("Row data:", rowData);
      } else {
        console.log("No data found for row:", row);
      }
    } else {
      console.log("Single clicked on cell:", { col, row });
    }
  
    lastClickRef.current = { cell: { col, row }, time: now };
  }; */



  const onCellEdited = useCallback((cell, newValue) => {
    if (newValue.kind !== 'Text') {
        return;
    }

    const indexes = ["UserSeq", "UserName", "UserId", "DeptSeq" , "Remark","LoginDate", "LoginStatus"];
    const [col, row] = cell;
    const key = indexes[col];

    gridData[row][key] = newValue.gridData;
    console.log('key', key)
}, []);

  
  return (
    <div className="w-full gap-1 h-full flex items-center justify-center pb-8">
      <div className="w-full h-full flex flex-col border bg-white rounded-lg overflow-hidden ">
        <h2 className="text-xs  border-b font-medium flex items-center gap-2 p-2 text-blue-600 uppercase">
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
          onCellEdited={onCellEdited}
          smoothScrollY={true}
          smoothScrollX={true}
          rowSelect="multi"
          gridSelection={selection}
          onCellActivated={onCellActivated}
          /* onCellClicked={onCellClicked} */
          onGridSelectionChange={setSelection}
          getRowThemeOverride={(i) =>
            i % 2 === 0
              ? undefined
              : {
                  bgCell: '#FBFBFB',
                }
          }
          onPaste={true}
          fillHandle={true} keybindings={{
            downFill: true,
            rightFill: true
          }} 
          trailingRowOptions={{
            sticky: true,
            tint: true,
            hint: "New row..."
          }} 

        />
      </div>
    </div>
  )
}

export default TableUserManagement
