import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import {
  Modal,
  Typography,
  Button,
  Table,
  Select,
  Input,
  message,
  Drawer,
} from 'antd'
import { getMenusNotInRole } from '../../../../features/system/getMenusNotInRole'
import { PostRolesMenu } from '../../../../features/system/postRolesMenu'
import { SearchOutlined } from '@ant-design/icons'

const { Title } = Typography
const { Option } = Select

export default function ModalMenu({ isOpen, onClose, groupId, fetchData2 }) {
  const [searchValue, setSearchValue] = useState('') // Từ khóa tìm kiếm
  const [searchColumn, setSearchColumn] = useState('') // Cột tìm kiếm
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [page, setPage] = useState(1)
  const [limit, setLimit] = useState(50)
  const [total, setTotal] = useState(0)
  const [selectedRowKeys, setSelectedRowKeys] = useState([])
  const [data, setData] = useState([])
  const [filteredData, setFilteredData] = useState([]) // Dữ liệu đã lọc

  const fetchData = async () => {
    setLoading(true)
    try {
      const response = await getMenusNotInRole(groupId)
      if (response.success) {
        setData(response.data)
        setFilteredData(response.data) // Lưu dữ liệu gốc
      }
    } catch (error) {
      setError(error.message || 'Đã xảy ra lỗi')
      setData([])
      setFilteredData([])
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if (isOpen) fetchData()
  }, [isOpen, groupId, page, limit])

  const handleFinish = async () => {
    if (!selectedRowKeys || selectedRowKeys.length === 0) {
      message.warning('Vui lòng chọn ít nhất một mục.')
      return
    }

    if (!groupId) {
      message.warning('Vui lòng chọn nhóm.')
      return
    }

    try {
      const result = await PostRolesMenu(selectedRowKeys, groupId, 'menu')

      if (result && result.success) {
        message.success('Cập nhật thành công')
        setSelectedRowKeys([])
        onClose()
        fetchData2()
      } else {
        message.error(result?.message || 'Cập nhật thất bại!')
      }
    } catch (error) {
      console.error('Error:', error)
      message.error('Lỗi khi thêm!')
    }
  }

  // Xử lý tìm kiếm
  const handleSearch = () => {
    if (!searchValue || !searchColumn) {
      return // Không tìm kiếm nếu không có từ khóa và cột
    }

    const filtered = data.filter((item) =>
      item[searchColumn]
        ?.toString()
        .toLowerCase()
        .includes(searchValue.toLowerCase()),
    )
    setFilteredData(filtered)
  }

  // Reset lại dữ liệu
  const handleReset = () => {
    setSearchValue('')
    setSearchColumn('')
    setFilteredData(data) // Quay lại dữ liệu gốc
  }

  const columns = [
    {
      title: 'Label',
      dataIndex: 'Label',
      key: 'Label',
      sorter: (a, b) => a.Label.localeCompare(b.Label),
    },
    {
      title: 'Link',
      dataIndex: 'Link',
      key: 'Link',
      sorter: (a, b) => a.Link.localeCompare(b.Link),
    },
    {
      title: 'Key',
      dataIndex: 'Key',
      key: 'Key',
      sorter: (a, b) => a.Key.localeCompare(b.Key),
    },
  ]

  const handleTableChange = (pagination) => {
    setPage(pagination.current)
    setLimit(pagination.pageSize)
  }

  return (
    <Drawer
      styles={{
        wrapper: {
          borderRadius: '16px 16px 0 0',
          overflow: 'hidden',
        },
      }}
      placement="bottom"
      open={isOpen}
      closable={false}
      onCancel={onClose}
      height="97%"
      footer={[
        <Button
          key="cancel"
          onClick={onClose}
          style={{ backgroundColor: '#f5f5f5', borderColor: '#d9d9d9' }}
        >
          Thoát
        </Button>,
        <Button
          key="submit"
          type="primary"
          className="ml-5"
          onClick={handleFinish}
          style={{ backgroundColor: '#1890ff', borderColor: '#1890ff' }}
        >
          Lưu
        </Button>,
      ]}
    >
      <div className="font-medium text-xs mb-4">DATA MENU</div>

      <div
        style={{ marginBottom: 16 }}
        className="border w-full  p-3 rounded-lg flex gap-3"
      >
        <Select
          placeholder="Chọn cột tìm kiếm"
          value={searchColumn}
          onChange={setSearchColumn}
          size="middle"
          className="w-32"
        >
          <Option value="Label">Label</Option>
          <Option value="Link">Link</Option>
          <Option value="Key">Key</Option>
        </Select>
        <Input
          placeholder="Nhập từ khóa tìm kiếm"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          size="middle"
        />
        <Button
          type="primary"
          icon={<SearchOutlined />}
          onClick={handleSearch}
          style={{ marginRight: 8 }}
        >
          Tìm kiếm
        </Button>
        <Button onClick={handleReset}>Reset</Button>
      </div>

      {/* Bảng dữ liệu */}
      <Table
        rowSelection={{
          selectedRowKeys,
          onChange: setSelectedRowKeys,
          selections: [
            Table.SELECTION_ALL,
            Table.SELECTION_INVERT,
            Table.SELECTION_NONE,
          ],
        }}
        size="small"
        bordered
        columns={columns}
        dataSource={filteredData}
        rowKey="Id"
        className="cursor-pointer pb-0"
        loading={loading}
        pagination={{
          current: page,
          pageSize: limit,
          total: total,
          showSizeChanger: true,
          showTotal: (total) => `Total ${total} Item`,
          onChange: (page, pageSize) =>
            handleTableChange({ current: page, pageSize }),
        }}
        onChange={(pagination) => handleTableChange(pagination)}
      />
    </Drawer>
  )
}
