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

function TableStockOutRequest({ data, onCellClicked, gridData, setGridData, loading }) {
  const [showSearch, setShowSearch] = useState(false)
  const ref = (useRef < data) | (null > null)
  const onSearchClose = useCallback(() => setShowSearch(false), [])
  const [vals, setVals] = useState([false, false, false])

  const [selection, setSelection] = useState({
    columns: CompactSelection.empty(),
    rows: CompactSelection.empty(),
  })
  const columns = useMemo(
    () => [
      { title: 'IsStop' },
      { title: 'IsConfirm' },
      { title: 'FactUnitName' },
      { title: 'ReqDate' },
      { title: 'OutReqNo' },
      { title: 'DeptName' },
      { title: 'EmpName' },
      { title: 'CustName' },
      { title: 'UseTypeName' },
      { title: 'WorkOrderNo' },
      { title: 'AssyItemName' },
      { title: 'AssyItemNo' },
      { title: 'AssyItemSpec' },
      { title: 'AssyUnitName' },
      { title: 'ProcName' },
      { title: 'AssyQty' },
      { title: 'AssyProgQty' },
      { title: 'ItemName' },
      { title: 'ItemNo' },
      { title: 'ItemSpec' },
      { title: 'UnitName' },
      { title: 'Qty' },
      { title: 'ProgQty' },
      { title: 'IsReturn' },
      { title: 'Remark' },
      { title: 'ItemSeq' },
      { title: 'ItemUnitSeq' },
      { title: 'AssyItemSeq' },
      { title: 'PJTSeq' },
      { title: 'WBSSeq' },
      { title: 'FactUnit' },
      { title: 'OutReqSeq' },
      { title: 'UseType' },
      { title: 'OSPPOSeq' },
      { title: 'ProgStatus' },
      { title: 'ProgStatusName' },
      { title: 'ProdPlanNo' },
      { title: 'ProdPlanSeq' },
      { title: 'ProdReqNo' },
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
        IsStop = '',
        IsConfirm = '',
        FactUnitName = '',
        ReqDate = '',
        OutReqNo = '',
        DeptName = '',
        EmpName = '',
        CustName = '',
        UseTypeName = '',
        WorkOrderNo = '',
        AssyItemName = '',
        AssyItemNo = '',
        AssyItemSpec = '',
        AssyUnitName = '',
        ProcName = '',
        AssyQty = '',
        AssyProgQty = '',
        ItemName = '',
        ItemNo = '',
        ItemSpec = '',
        UnitName = '',
        Qty = '',
        ProgQty = '',
        IsReturn = '',
        Remark = '',
        ItemSeq = '',
        ItemUnitSeq = '',
        AssyItemSeq = '',
        PJTSeq = '',
        WBSSeq = '',
        FactUnit = '',
        OutReqSeq = '',
        UseType = '',
        OSPPOSeq = '',
        ProgStatus = '',
        ProgStatusName = '',
        ProdPlanNo = '',
        ProdPlanSeq = '',
        ProdReqNo = '',
      } = person

      const safeString = (value) => (value != null ? String(value) : '')
      const safeBoolean = (value) => (value === '0' ? '✔' : '✘')

      const columnMap = {
        0: { kind: GridCellKind.Boolean, data: IsStop },
        1: { kind: GridCellKind.Boolean, data: IsConfirm },
        2: { kind: GridCellKind.Text, data: safeString(FactUnitName) },
        3: { kind: GridCellKind.Text, data: safeString(ReqDate) },
        4: { kind: GridCellKind.Text, data: safeString(OutReqNo) },
        5: { kind: GridCellKind.Text, data: safeString(DeptName) },
        6: { kind: GridCellKind.Text, data: safeString(EmpName) },
        7: { kind: GridCellKind.Text, data: safeString(CustName) },
        8: { kind: GridCellKind.Text, data: safeString(UseTypeName) },
        9: { kind: GridCellKind.Text, data: safeString(WorkOrderNo) },
        10: { kind: GridCellKind.Text, data: safeString(AssyItemName) },
        11: { kind: GridCellKind.Text, data: safeString(AssyItemNo) },
        12: { kind: GridCellKind.Text, data: safeString(AssyItemSpec) },
        13: { kind: GridCellKind.Text, data: safeString(AssyUnitName) },
        14: { kind: GridCellKind.Text, data: safeString(ProcName) },
        15: { kind: GridCellKind.Text, data: safeString(AssyQty) },
        16: { kind: GridCellKind.Text, data: safeString(AssyProgQty) },
        17: { kind: GridCellKind.Text, data: safeString(ItemName) },
        18: { kind: GridCellKind.Text, data: safeString(ItemNo) },
        19: { kind: GridCellKind.Text, data: safeString(ItemSpec) },
        20: { kind: GridCellKind.Text, data: safeString(UnitName) },
        21: { kind: GridCellKind.Text, data: safeString(Qty) },
        22: { kind: GridCellKind.Text, data: safeString(ProgQty) },
        23: { kind: GridCellKind.Boolean, data: IsReturn },
        24: { kind: GridCellKind.Text, data: safeString(Remark) },
        25: { kind: GridCellKind.Text, data: safeString(ItemSeq) },
        26: { kind: GridCellKind.Text, data: safeString(ItemUnitSeq) },
        27: { kind: GridCellKind.Text, data: safeString(AssyItemSeq) },
        28: { kind: GridCellKind.Text, data: safeString(PJTSeq) },
        29: { kind: GridCellKind.Text, data: safeString(WBSSeq) },
        30: { kind: GridCellKind.Text, data: safeString(FactUnit) },
        31: { kind: GridCellKind.Text, data: safeString(OutReqSeq) },
        32: { kind: GridCellKind.Text, data: safeString(UseType) },
        33: { kind: GridCellKind.Text, data: safeString(OSPPOSeq) },
        34: { kind: GridCellKind.Text, data: safeString(ProgStatus) },
        35: { kind: GridCellKind.Text, data: safeString(ProgStatusName) },
        36: { kind: GridCellKind.Text, data: safeString(ProdPlanNo) },
        37: { kind: GridCellKind.Text, data: safeString(ProdPlanSeq) },
        38: { kind: GridCellKind.Text, data: safeString(ProdReqNo) },
      }

      if (columnMap.hasOwnProperty(col)) {
        const { kind, data } = columnMap[col]
        return { kind, data, displayData: data }
      }

      return { kind: '', data: '', displayData: '' }
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
    <div className="w-full gap-1 h-full flex items-center justify-center pb-8  overflow-hidden">
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
          rowSelect="single"
          onCellClicked={onCellClicked}
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

export default TableStockOutRequest
