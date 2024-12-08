import { useState, useEffect } from 'react'
import { Modal, Button, Select, Input } from 'antd'
import { SearchOutlined, FilterOutlined } from '@ant-design/icons'
import { ArrowIcon } from '../../icons'
import TableCodeHelpStockOut1 from '../../table/codeHelp/codeHelpStockOut1'
const { Search } = Input
import CryptoJS from 'crypto-js'
import { encodeBase64Url } from '../../../../utils/decode-JWT'
import { CompactSelection } from '@glideapps/glide-data-grid'

export default function CodeHelpStockOut1({
  setConditionSeq,
  data,
  modalVisible,
  setModalVisible,
  setKeyword,
  keyword,
  fetchCodehelpData1,
  handleSearch,
  setSubConditionSql,
  setDeptName,
  setDeptSeq,
  setData1,
  deptName
}) {
  const [isMinusClicked, setIsMinusClicked] = useState(false)
  const [lastClickedCell, setLastClickedCell] = useState(null)
  const [clickedRowData, setClickedRowData] = useState(null)
  const [selection, setSelection] = useState({
    columns: CompactSelection.empty(),
    rows: CompactSelection.empty(),
  })
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
      console.log('onCellClicked')
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
      setDeptName('')
      setDeptSeq('')
      setLastClickedCell(null)
      setClickedRowData(null)
      return
    }

    if (rowIndex >= 0 && rowIndex < data.length) {
      const rowData = data[rowIndex]
      setDeptName(rowData?.BeDeptName)
      setDeptSeq(rowData?.BeDeptSeq)
      setClickedRowData(rowData)
      setLastClickedCell(cell)
    }
  }
  const resetTable = () => {
    setSelection({
      columns: CompactSelection.empty(),
      rows: CompactSelection.empty(),
    });
  };
  const handleClose = () => {
    setModalVisible(false)
    setDeptName('')
    setDeptSeq('')
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
                  defaultValue="Bộ phận"
                  style={{ width: 120 }}
                  size="middle"
                  onChange={handleConditionSeq}
                  options={[
                    { value: 1, label: 'Bộ phận' },
                    { value: 0, label: 'Mã bộ phận' },
                  ]}
                />
              </div>
              <div className="flex flex-col">
                <Select
                  id="typeSelect"
                  defaultValue="Sử dụng"
                  style={{ width: 300 }}
                  size="middle"
                  options={[
                    {
                      value: 'IsUse = 1',
                      label: 'Sử dụng',
                    },
                    {
                      value: 'IsUse = 0',
                      label: 'Chưa sử dụng',
                    },
                  ]}
                  onChange={handleSubConditionSql}
                />
              </div>
              <div className="flex flex-col w-full">
                <Search
                  allowClear
                  size="middle"
                  placeholder="Tìm kiếm"
                  value={deptName}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      handleSearch()
                    }
                  }}
                  onChange={(e) => setDeptName(e.target.value)}
                  className=" w-full"
                />
              </div>
              <div className="flex flex-col">
                <Button
                  type="primary"
                  icon={<SearchOutlined />}
                  size="middle"
                  onClick={fetchCodehelpData1}
                >
                  Truy vấn
                </Button>
              </div>
            </div>
          </details>

          <TableCodeHelpStockOut1 data={data} onCellClicked={onCellClicked} setSelection={setSelection} selection={selection} />
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
