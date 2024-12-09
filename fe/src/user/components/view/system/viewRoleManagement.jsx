import { useState, useEffect, useCallback } from 'react'
import { Menu, Button, Input, Table, Space, Checkbox, Layout } from 'antd'
import { FolderOutlined, DeleteOutlined, PlusOutlined } from '@ant-design/icons'
import BG from '../../../../assets/defaultLogo.png'
import ModalRootMenu from '../../modal/system/modalRootMenu'
import ModalUsers from '../../modal/system/modalUsers'
import ModalMenu from '../../modal/system/modalMenu'
import { getPaginatedRolesRootMenu } from '../../../../features/system/getPaginatedRolesRootMenu'
import { getPaginatedRolesMenu } from '../../../../features/system/getPaginatedRolesMenu'
import { getPaginatedRolesUsers } from '../../../../features/system/getPaginatedRolesUsers'
import debounce from 'lodash.debounce'
const { Header, Content, Footer } = Layout
const menuStyle = { borderInlineEnd: 'none' }
function ViewRoleManagement({
  groups,
  changedIds,
  setChangedIds,
  setSelectedRowKeys,
  selectedRowKeys,
  setCheckStatus,
  checkStatus,
  setSelectedGroup,
  selectedGroup,
  setOpenView,
  openView,
}) {
  const [userInfo, setUserInfo] = useState({
    groupName: '',
    note: '',
  })
  const [loading, setLoading] = useState(true)
  const [loading3, setLoading3] = useState(true)
  const [error, setError] = useState(null)
  const [page1, setPage1] = useState(1)
  const [page2, setPage2] = useState(1)
  const [page3, setPage3] = useState(1)
  const [limit1, setLimit1] = useState(50)
  const [limit2, setLimit2] = useState(50)
  const [limit3, setLimit3] = useState(50)
  const [total1, setTotal1] = useState(50)
  const [total2, setTotal2] = useState(50)
  const [total3, setTotal3] = useState(50)
  const [totalPages3, setTotalPages3] = useState(50)
  const [totalPages2, setTotalPages2] = useState(50)
  const [totalPages1, setTotalPages1] = useState(50)
  const [openModel1, setOpenModel1] = useState(false)
  const [openModel2, setOpenModel2] = useState(false)
  const [openModel3, setOpenModel3] = useState(false)
  const [data1, setData1] = useState([])
  const [updateData1, setUpdateData2] = useState([])
  const [data2, setData2] = useState([])
  const [data3, setData3] = useState([])

  const handleTableSelectionChange = (newSelectedRowKeys, tableKey) => {
    setSelectedRowKeys((prevSelectedKeys) => ({
      ...prevSelectedKeys,
      [tableKey]: newSelectedRowKeys,
    }))
  }

  const fetchData1 = async () => {
    setLoading(true)
    try {
      const response = await getPaginatedRolesRootMenu(
        selectedGroup,
        'rootmenu',
        page1,
        limit1,
      )
      if (response.success) {
        setData1(response.data)
        setTotal1(response.data.total)
        setTotalPages1(response.data.totalPages)
        setCheckStatus(false)
      }
    } catch (error) {
      setError(error.message || 'Đã xảy ra lỗi')
      setData1([])
    } finally {
      setLoading(false)
    }
  }

  const fetchData2 = useCallback(async () => {
    setLoading(true)
    try {
      const response = await getPaginatedRolesMenu(
        selectedGroup,
        'menu',
        page2,
        limit2,
      )
      if (response.success) {
        setData2(response.data)
        setTotal2(response.data.total)
        setCheckStatus(false)
        setTotalPages2(response.data.totalPages)
      }
    } catch (error) {
      setError(error.message || 'Đã xảy ra lỗi')
      setData2([])
    } finally {
      setLoading(false)
    }
  }, [selectedGroup, page2, limit2])

  const fetchData3 = async () => {
    setLoading(true)
    try {
      const response = await getPaginatedRolesUsers(
        selectedGroup,
        'user',
        page3,
        limit3,
      )
      if (response.success) {
        setData3(response.data)
        setTotal3(response.total)
        setTotalPages3(response.totalPages)
        setCheckStatus(false)
      }
    } catch (error) {
      setError(error.message || 'Đã xảy ra lỗi')
      setData3([])
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if (selectedGroup !== null || !checkStatus) {
      fetchData1()
      fetchData2()
      fetchData3()
    }
  }, [selectedGroup, checkStatus])

  const handleAddRow1 = () => {
    setOpenModel1(true)
  }
  const closeModal1 = () => {
    setOpenModel1(false)
  }
  const handleAddRow2 = () => {
    setOpenModel2(true)
  }
  const closeModal2 = () => {
    setOpenModel2(false)
  }
  const handleAddRow3 = () => {
    setOpenModel3(true)
  }
  const closeModal3 = () => {
    setOpenModel3(false)
  }

  const handleGroupClick = (groupId) => {
    setSelectedGroup(groupId)
    setOpenView(true)
    const group = groups.find((group) => group.Id === groupId)
    setUserInfo({
      groupName: group.Name,
      note: `${group.Comment}`,
    })
  }

  const handlePermissionChange1 = (id, permissionType) => {
    const newData = [...data1]
    const recordIndex = newData.findIndex((record) => record.Id === id)

    if (recordIndex !== -1) {
      const newValue = !newData[recordIndex][permissionType]
      newData[recordIndex][permissionType] = newValue
      setData1(newData)

      setChangedIds((prev) => {
        const existingIndex = prev.findIndex(
          (change) => change.id === id && change.column === permissionType,
        )

        if (existingIndex !== -1) {
          const updatedChanges = [...prev]
          updatedChanges[existingIndex] = {
            id,
            column: permissionType,
            value: newValue,
          }
          return updatedChanges
        }
        return [...prev, { id, column: permissionType, value: newValue }]
      })
    }
  }

  const handlePermissionChange2 = (id, permissionType) => {
    const newData = [...data2]
    const recordIndex = newData.findIndex((record) => record.Id === id)

    if (recordIndex !== -1) {
      const newValue = !newData[recordIndex][permissionType]
      newData[recordIndex][permissionType] = newValue
      setData2(newData)

      setChangedIds((prev) => {
        const existingIndex = prev.findIndex(
          (change) => change.id === id && change.column === permissionType,
        )

        if (existingIndex !== -1) {
          const updatedChanges = [...prev]
          updatedChanges[existingIndex] = {
            id,
            column: permissionType,
            value: newValue,
          }
          return updatedChanges
        }
        return [...prev, { id, column: permissionType, value: newValue }]
      })
    }
  }

  const handlePermissionChange = (permissionId, field) => {
    const updatedPermissions = data1.map((permission) =>
      permission.Id === permissionId
        ? { ...permission, [field]: !permission[field] }
        : permission,
    )
  }

  const userColumns = [
    { title: 'UserId', dataIndex: 'UserId', key: 'UserId' },
    { title: 'UserName', dataIndex: 'UserName', key: 'UserName' },
  ]

  const permissionColumns1 = [
    { title: 'Name', dataIndex: 'Label', key: 'Label' },
    {
      title: 'View',
      dataIndex: 'View',
      key: 'View',
      render: (view, record) => (
        <Checkbox
          checked={view}
          onChange={() => handlePermissionChange1(record.Id, 'View')}
        />
      ),
    },
  ]

  const permissionColumns2 = [
    { title: 'MenuType', dataIndex: 'MenuType', key: 'MenuType' },
    { title: 'Name', dataIndex: 'Label', key: 'Label' },
    {
      title: 'View',
      dataIndex: 'View',
      key: 'View',
      render: (view, record) => (
        <Checkbox
          checked={view}
          onChange={() => handlePermissionChange2(record.Id, 'View')}
        />
      ),
    },
    {
      title: 'Edit',
      dataIndex: 'Edit',
      key: 'Edit',
      render: (edit, record) => (
        <Checkbox
          checked={edit}
          onChange={() => handlePermissionChange2(record.Id, 'Edit')}
        />
      ),
    },
    {
      title: 'Create',
      dataIndex: 'Create',
      key: 'Create',
      render: (create, record) => (
        <Checkbox
          checked={create}
          onChange={() => handlePermissionChange2(record.Id, 'Create')}
        />
      ),
    },
    {
      title: 'Delete',
      dataIndex: 'Delete',
      key: 'Delete',
      render: (deletePermission, record) => (
        <Checkbox
          checked={deletePermission}
          onChange={() => handlePermissionChange2(record.Id, 'Delete')}
        />
      ),
    },
  ]

  const handleTableChange3 = (pagination) => {
    setPage3(pagination.current)
    setLimit3(pagination.pageSize)
  }
  const handleTableChange2 = (pagination) => {
    setPage2(pagination.current)
    setLimit2(pagination.pageSize)
  }
  const handleTableChange1 = (pagination) => {
    setPage1(pagination.current)
    setLimit1(pagination.pageSize)
  }
  return (
    <div className="w-full gap-3 h-full flex items-center justify-center">
      <div className="w-1/4 h-full flex flex-col bg-white border rounded-lg overflow-hidden pb-10">
        <div className="font-medium text-xs mb-4 text-gray-700 uppercase p-3">
          NHÓM NGƯỜI DÙNG
        </div>
        <Menu
          style={menuStyle}
          mode="inline"
          selectedKeys={[selectedGroup?.toString()]}
          onClick={(e) => {
            handleGroupClick(Number(e.key))
            setChangedIds([])
          }}
          className=" border-none border-r-0"
        >
          {groups.map((group) => (
            <Menu.Item key={group?.Id} icon={<FolderOutlined />}>
              {group?.Name}
            </Menu.Item>
          ))}
        </Menu>
      </div>

      <div className="w-10/12 h-full flex flex-col border bg-white p-3 rounded-lg  overflow-auto  scroll-container pb-10">
        <div className="font-medium text-xs mb-4">NGƯỜI DÙNG</div>

        {openView ? (
          <>
            {' '}
            <div className="mb-4">
              <Input
                value={userInfo.groupName}
                onChange={(e) =>
                  setUserInfo({ ...userInfo, groupName: e.target.value })
                }
                placeholder="Nhập tên nhóm"
                className="w-full mb-2"
              />
              <Input.TextArea
                value={userInfo.note}
                onChange={(e) =>
                  setUserInfo({ ...userInfo, note: e.target.value })
                }
                placeholder="Ghi chú"
                rows={4}
              />
            </div>
            <div className="mb-4">
              <div className="font-medium text-xs mb-2 uppercase">
                Quyền Truy Nhóm Menu
              </div>

              <Table
                dataSource={data1}
                columns={permissionColumns1}
                rowKey="Id"
                size="small"
                rowSelection={{
                  selectedRowKeys: selectedRowKeys.table1,
                  onChange: (selectedKeys) =>
                    handleTableSelectionChange(selectedKeys, 'table1'),
                  selections: [
                    Table.SELECTION_ALL,
                    Table.SELECTION_INVERT,
                    Table.SELECTION_NONE,
                  ],
                }}
                pagination={{
                  current: page1,
                  pageSize: limit1,
                  total: total1,
                  showSizeChanger: true,
                  showTotal: (total) => `Total ${total} Item`,
                  onChange: (page, pageSize) =>
                    handleTableChange1({ current: page, pageSize }),
                }}
                onChange={(pagination) => handleTableChange1(pagination)}
                bordered
                footer={() => (
                  <span
                    type="primary"
                    onClick={handleAddRow1}
                    className="mt-2 max-w-md cursor-pointer text-pretty text-base text-indigo-500"
                    size="large"
                  >
                    Add Row
                  </span>
                )}
              />
            </div>
            <div className="mb-4">
              <div className="font-medium text-xs mb-2 uppercase">
                Quyền Truy Cập Menu
              </div>
              <Table
                dataSource={data2}
                columns={permissionColumns2}
                rowKey="Id"
                size="small"
                bordered
                rowSelection={{
                  selectedRowKeys: selectedRowKeys.table2,
                  onChange: (selectedKeys) =>
                    handleTableSelectionChange(selectedKeys, 'table2'),
                  selections: [
                    Table.SELECTION_ALL,
                    Table.SELECTION_INVERT,
                    Table.SELECTION_NONE,
                  ],
                }}
                pagination={{
                  current: page2,
                  pageSize: limit2,
                  total: total2,
                  showSizeChanger: true,
                  showTotal: (total) => `Total ${total} Item`,
                  onChange: (page, pageSize) =>
                    handleTableChange2({ current: page, pageSize }),
                }}
                onChange={(pagination) => handleTableChange2(pagination)}
                footer={() => (
                  <span
                    type="primary"
                    className="mt-2 max-w-md cursor-pointer text-pretty text-base text-indigo-500"
                    size="small"
                    onClick={handleAddRow2}
                  >
                    Add Row
                  </span>
                )}
              />
            </div>
            <div className="mb-4">
              <div className="font-medium text-xs mb-2 uppercase">
                Danh Sách Người Dùng
              </div>
              <Table
                dataSource={data3}
                columns={userColumns}
                rowKey="Id"
                size="small"
                bordered
                rowSelection={{
                  selectedRowKeys: selectedRowKeys.table3,
                  onChange: (selectedKeys) =>
                    handleTableSelectionChange(selectedKeys, 'table3'),
                  selections: [
                    Table.SELECTION_ALL,
                    Table.SELECTION_INVERT,
                    Table.SELECTION_NONE,
                  ],
                }}
                pagination={{
                  current: page3,
                  pageSize: limit3,
                  total: total3,
                  showSizeChanger: true,
                  showTotal: (total) => `Total ${total} Item`,
                  onChange: (page, pageSize) =>
                    handleTableChange3({ current: page, pageSize }),
                }}
                onChange={(pagination) => handleTableChange3(pagination)}
                footer={() => (
                  <span
                    type="primary"
                    className="mt-2 max-w-md cursor-pointer text-pretty text-base text-indigo-500"
                    size="large"
                    onClick={handleAddRow3}
                  >
                    Add Row
                  </span>
                )}
              />
            </div>
          </>
        ) : (
          <>
            {' '}

            <Content className="flex flex-col  justify-center items-center px-4">
              <div className="text-center  justify-center">
                <img
                  src={BG}
                  className=" w-96 opacity-45 h-auto mb-10"
                  alt="Background"
                />
              </div>
            </Content>
          </>
        )}
        <ModalRootMenu
          isOpen={openModel1}
          onClose={closeModal1}
          groupId={selectedGroup}
          fetchData1={fetchData1}
        />
        <ModalMenu
          isOpen={openModel2}
          onClose={closeModal2}
          groupId={selectedGroup}
          fetchData2={fetchData2}
        />
        <ModalUsers
          isOpen={openModel3}
          onClose={closeModal3}
          groupId={selectedGroup}
          fetchData3={fetchData3}
        />
      </div>
    </div>
  )
}

export default ViewRoleManagement
