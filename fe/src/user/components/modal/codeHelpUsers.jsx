import { useState, useMemo } from 'react'
import { Modal, Button, Select, Input } from 'antd'
import { SearchOutlined } from '@ant-design/icons'
const { Search } = Input
const columnDefs = [
  {
    headerName: 'STT',
    valueGetter: 'node.rowIndex + 1',
    sortable: false,
    filter: false,
    width: 100,
  },
  { field: 'EmpName', headerName: 'Họ và Tên', sortable: true, filter: true },
  { field: 'EmpID', headerName: 'Mã nhân viên', sortable: true, filter: true },
  { field: 'DeptName', headerName: 'Bộ phận', sortable: true, filter: true },
  {
    field: 'WkDeptName',
    headerName: 'Bộ phận làm việc',
    sortable: true,
    filter: true,
  },
  { field: 'PosName', headerName: 'Vị trí', sortable: true, filter: true },
  { field: 'UMJpName', headerName: 'Chức vị', sortable: true, filter: true },
  { field: 'UMPgName', headerName: 'Cấp bậc', sortable: true, filter: true },
  { field: 'UMJdName', headerName: 'Team', sortable: true, filter: true },
  { field: 'UMJoName', headerName: 'Part', sortable: true, filter: true },
  {
    field: 'OrdDate',
    headerName: 'Ngày bổ nhiệm',
    sortable: true,
    filter: true,
  },
  { field: 'SMSexName', headerName: 'Giới tính', sortable: true, filter: true },
]

export default function CodeHelpAddUsers({
  setConditionSeq,
  conditionSeq,
  data,
  modalVisible,
  setModalVisible,
  setKeyword,
  keyword,
  loadingCodeHelp,
  handleSearch,
  onRowClickedCodeHelp,
  setSubConditionSql,
  subConditionSql,
}) {
  const [gridApi, setGridApi] = useState(null)
  const [gridColumnApi, setGridColumnApi] = useState(null)

  const onGridReady = (params) => {
    setGridApi(params.api)
    setGridColumnApi(params.columnApi)
  }
  const handleConditionSeq = (value) => {
    setConditionSeq(value)
  }
  const handleSubConditionSql = (value) => {
    setSubConditionSql(value)
  }

  const defaultColDef = useMemo(
    () => ({
      resizable: true,
      flex: 1,
      minWidth: 100,
    }),
    [],
  )

  return (
    <div>
      <Modal
        open={modalVisible}
        width="80%"
        maskClosable={false}
        footer={null}
        closable={false}
      >
        <div
          className="ag-theme-quartz cursor-pointer"
          style={{ display: 'flex', flexDirection: 'column', height: '75vh' }}
        >
          <div className="flex p-2 bg-white border mb-2 rounded-lg gap-4">
            <div className="flex flex-col">
              <Select
                id="typeSelect"
                defaultValue="Nhân viên"
                style={{ width: 120 }}
                size="middle"
                options={[
                  { value: 1, label: 'Nhân viên' },
                  { value: 2, label: 'Mã nhân viên' },
                ]}
                value={conditionSeq}
                onChange={handleConditionSeq}
              />
            </div>
            <div className="flex flex-col">
              <Select
                id="typeSelect"
                defaultValue="All"
                style={{ width: 300 }}
                size="middle"
                options={[
                  { value: '', label: 'All' },
                  {
                    value: 'TypeSeq = 3031001',
                    label: 'Người đương chức, đương nhiệm',
                  },
                  {
                    value: 'TypeSeq = 3031002',
                    label: 'Người thôi việc, nghỉ làm',
                  },
                  { value: 'IsInOut = 2', label: 'Nhân viên bên ngoài' },
                ]}
                value={subConditionSql}
                onChange={handleSubConditionSql}
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
                onClick={handleSearch}
                loading={loadingCodeHelp}
              >
                Truy vấn
              </Button>
            </div>
          </div>

          <div style={{ flex: 1 }}>
            {/*  <AgGridReact
                            rowData={data}
                            columnDefs={columnDefs}
                            defaultColDef={defaultColDef}
                            onGridReady={onGridReady}
                            onRowClicked={onRowClickedCodeHelp}
                            rowSelection="multiple"
                            pagination={true}
                            paginationPageSize={1000}
                        /> */}
          </div>
        </div>
        <div className="flex justify-end mt-4">
          <Button type="primary" onClick={() => setModalVisible(false)}>
            Cancel
          </Button>
        </div>
      </Modal>
    </div>
  )
}
