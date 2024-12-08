import { useState, useMemo } from 'react'
import { Modal, Button, Select, Input } from 'antd'
import { SearchOutlined, FilterOutlined } from '@ant-design/icons'
import { ArrowIcon } from '../../icons'
import TableCodeHelpStockOut2 from '../../table/codeHelp/codeHelpStockOut2'
const { Search } = Input

export default function CodeHelpStockOut2({
  setConditionSeq,
  data,
  modalVisible,
  setModalVisible,
  setKeyword,
  keyword,
  loadingCodeHelp,
  handleSearch,
  setSubConditionSql,
  fetchCodehelpData2,
  setEmpSeq,
  setEmpName,
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
      setEmpName('')
      setEmpSeq('')
      setLastClickedCell(null)
      setClickedRowData(null)
      return
    }

    if (rowIndex >= 0 && rowIndex < data.length) {
      const rowData = data[rowIndex]
      setEmpName(rowData?.EmpName)
      setEmpSeq(rowData?.EmpSeq)
      setClickedRowData(rowData)
      setLastClickedCell(cell)
    }
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
                  defaultValue="Nhân viên"
                  style={{ width: 180 }}
                  size="middle"
                  options={[
                    { value: 1, label: 'Nhân viên' },
                    { value: 2, label: 'Mã nhân viên' },
                  ]}
                  onChange={handleConditionSeq}
                />
              </div>

              <div className="flex flex-col w-full">
                <Search
                  allowClear
                  size="middle"
                  placeholder="Tìm kiếm"
                  value={keyword}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      handleSearch()
                    }
                  }}
                  onChange={(e) => setKeyword(e.target.value)}
                  className=" w-full"
                />
              </div>
              <div className="flex flex-col">
                <Button
                  type="primary"
                  icon={<SearchOutlined />}
                  size="middle"
                  onClick={fetchCodehelpData2}
                >
                  Truy vấn
                </Button>
              </div>
            </div>
          </details>

          <TableCodeHelpStockOut2 data={data} onCellClicked={onCellClicked} />
        </div>
        <div className="flex justify-end ">
          <Button type="primary" onClick={() => setModalVisible(false)}>
            Save
          </Button>
        </div>
      </Modal>
    </div>
  )
}
