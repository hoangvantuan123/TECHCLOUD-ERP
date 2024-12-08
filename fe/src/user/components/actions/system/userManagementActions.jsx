import { useState } from 'react'
import { Button, Dropdown, message, Menu } from 'antd'
import {
  SaveOutlined,
  FileDoneOutlined,
  LockOutlined,
  UnlockOutlined,
  SearchOutlined,
  DeleteOutlined,
  UserOutlined,
  FileExcelOutlined,
  FileTextOutlined,
  DownOutlined,
} from '@ant-design/icons'
import * as XLSX from 'xlsx'
import { saveAs } from 'file-saver'
export default function UserManagementActions({
  handleSearch,
  handleUpdatePassUsers,
  data,
}) {
  const [visible, setVisible] = useState(false)

  // Hàm xuất CSV
  const exportCSV = () => {
    const worksheet = XLSX.utils.json_to_sheet(data)
    const csv = XLSX.utils.sheet_to_csv(worksheet)
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' })
    saveAs(blob, 'rootmenu.csv')
  }

  // Hàm xuất Excel
  const exportExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet(data)
    const workbook = XLSX.utils.book_new()
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1')
    const buffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' })
    const blob = new Blob([buffer], {
      type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    })
    saveAs(blob, 'rootmenu.xlsx')
  }

  // Hàm xuất JSON
  const exportJSON = () => {
    const blob = new Blob([JSON.stringify(data, null, 2)], {
      type: 'application/json',
    })
    saveAs(blob, 'rootmenu.json')
  }

  /*   const handleMenuClick = (e) => {
      if (e.key === '1') {
        handleUpdatePassUsers();
      } else {
        message.info(`Đang phát triển`);
      }
    };
   */

  const handleMenuClick = (e) => {
    switch (e.key) {
      case 'csv':
        exportCSV()
        break
      case 'excel':
        exportExcel()
        break
      case 'json':
        exportJSON()
        break
      case 'updatePass':
        handleUpdatePassUsers()
        break
      default:
        message.info(`Chức năng này đang phát triển`)
    }
  }

  const menu = (
    <Menu onClick={handleMenuClick} className="w-auto">
      <Menu.SubMenu key="export" title="Export">
        <Menu.Item key="csv" icon={<FileTextOutlined />}>
          CSV Export
        </Menu.Item>
        <Menu.Item key="excel" icon={<FileExcelOutlined />}>
          Excel Export
        </Menu.Item>
        <Menu.Item key="json" icon={<FileTextOutlined />}>
          JSON Export
        </Menu.Item>
      </Menu.SubMenu>
      <Menu.Item key="updatePass" icon={<LockOutlined />}>
        Đặt lại mật khẩu mặc định
      </Menu.Item>
      <Menu.Item key="lutru" icon={<SaveOutlined />}>
        Lưu trữ
      </Menu.Item>
      <Menu.Item key="bolutru" icon={<UnlockOutlined />}>
        Bỏ lưu trữ
      </Menu.Item>
      <Menu.Item key="delete" icon={<DeleteOutlined />} danger>
        Xóa
      </Menu.Item>
    </Menu>
  )

  return (
    <div className="flex items-center gap-2">
      <Dropdown overlay={menu}>
        <Button>
          Actions <DownOutlined />
        </Button>
      </Dropdown>

      <Button
        key="Reset"
        icon={<FileDoneOutlined />}
        size="middle"
        className="uppercase"
        type="default"
      >
        Open
      </Button>

      <Button
        key="Save"
        type="primary"
        icon={<SearchOutlined />}
        size="middle"
        onClick={handleSearch}
        className="uppercase"
      >
        SEARCH
      </Button>
    </div>
  )
}
