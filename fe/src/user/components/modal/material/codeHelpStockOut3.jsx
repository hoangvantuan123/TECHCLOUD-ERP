import { useState, useMemo } from 'react'
import { Modal, Button, Select, Input } from 'antd'
import { SearchOutlined, FilterOutlined } from '@ant-design/icons'
import { ArrowIcon } from '../../icons'
import TableCodeHelpStockOut3 from '../../table/codeHelp/codeHelpStockOut3'
const { Search } = Input

export default function CodeHelpStockOut3({
  setConditionSeq,
  data,
  modalVisible,
  setModalVisible,
  setKeyword,
  keyword,
  handleSearch,
  setSubConditionSql,
  fetchCodehelpData3,
  setCustSeq,
  setCustName,
  custName,
  resetTable, 
  setSelection, 
  selection
}) {
  const [isMinusClicked, setIsMinusClicked] = useState(false)
  const [lastClickedCell, setLastClickedCell] = useState(null)
  const [clickedRowData, setClickedRowData] = useState(null)
  const [keyPath, setKeyPath] = useState(null)
  const handleConditionSeq = (e) => {
    setConditionSeq(e)
  }
  const handleSubConditionSql = (e) => {
    setSubConditionSql(e)
  }
  const onCellClicked = (cell, event) => {
    let rowIndex

    if (cell[0] !== -1) {
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
      setCustName('')
      setCustSeq('')
      setLastClickedCell(null)
      setClickedRowData(null)
      return
    }

    if (rowIndex >= 0 && rowIndex < data.length) {
      const rowData = data[rowIndex]
      setCustName(rowData?.FullName)
      setCustSeq(rowData?.CustSeq)
      setClickedRowData(rowData)
      setLastClickedCell(cell)
    }
  }
  const handleClose = () => {
    setModalVisible(false)
    setCustName('')
    setCustSeq('')
    resetTable()
  }
  const search = (e) => {
    setCustName(e.target.value)
    setCustSeq('')
    resetTable()
  }
  return (
    <div>
      <Modal
        open={modalVisible}
        width="80%"
        maskClosable={false}
        footer={null}
        closable={false}
        style={{
          top: 50,
        }}
      >
        <div
          style={{ display: 'flex', flexDirection: 'column', height: '75vh' }}
          className="gap-4"
        >
          <details
            className="group p-2 [&_summary::-webkit-details-marker]:hidden border rounded-lg bg-white"
            open
          >
            <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-gray-900">
              <h2 className="text-xs font-medium flex items-center gap-2 text-blue-600">
                <FilterOutlined />
                Điều kiện truy vấn
              </h2>
              <span className="relative size-5 shrink-0">
                <ArrowIcon />
              </span>
            </summary>
            <div className="flex p-2 gap-4">
              <div className="flex flex-col">
                <Select
                  id="typeSelect"
                  defaultValue="Điểm gia công bên ngoài"
                  style={{ width: 220 }}
                  size="middle"
                  options={[
                    { value: 1, label: 'Điểm gia công bên ngoài' },
                    { value: 2, label: 'Số đơn vị gia công' },
                    { value: 3, label: 'Mã số kinh doanh' },
                    { value: 4, label: 'Tương hiệu' },
                  ]}
                  onChange={handleConditionSeq}
                />
              </div>

              <div className="flex flex-col w-full">
                <Search
                  allowClear
                  size="middle"
                  placeholder="Tìm kiếm"
                  value={custName}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      handleSearch()
                    }
                  }}
                  onChange={search}
                  className=" w-full"
                />
              </div>
              <div className="flex flex-col">
                <Button
                  type="primary"
                  icon={<SearchOutlined />}
                  size="middle"
                  onClick={fetchCodehelpData3}
                >
                  Truy vấn
                </Button>
              </div>
            </div>
          </details>
          <TableCodeHelpStockOut3 data={data} onCellClicked={onCellClicked} setSelection={setSelection} selection={selection}  />
        </div>
        <div className="flex justify-end gap-4 ">
          <Button onClick={handleClose}>
            Cancel
          </Button>
          <Button type="primary" onClick={() => setModalVisible(false)}>
            Save
          </Button>
        </div>
      </Modal>
    </div>
  )
}
