import { useState } from 'react'
import { Button, Dropdown, message } from 'antd'
import { SaveOutlined, PlusOutlined, DeleteOutlined } from '@ant-design/icons'

export default function RoleManagementActions({
  openModalAddUserGroups,
  handleSubmitSheet,
  handleDeleteDataSheet,
  handleDeleteGroups,
}) {
  const [visible, setVisible] = useState(false)

  const handleMenuClick = (e) => {
    switch (e.key) {
      case '1':
        handleDeleteDataSheet()
        break
      case '2':
        handleDeleteGroups()
        break
      default:
        message.info('Đang phát triển')
        break
    }
  }

  const items = [
    {
      label: 'Delete Row',
      key: '1',
      icon: <DeleteOutlined />,
      danger: true,
    },

    {
      label: 'Delete Group',
      key: '2',
      icon: <DeleteOutlined />,
      danger: true,
    },
  ]
  const menuProps = {
    items,
    onClick: handleMenuClick,
  }
  return (
    <div className="flex items-center gap-2">
      <Dropdown.Button menu={menuProps}>
        <span className="uppercase">Actions</span>
      </Dropdown.Button>

      <Button
        key="addUserGroup"
        type="primary"
        icon={<PlusOutlined />}
        size="middle"
        onClick={openModalAddUserGroups}
        style={{ backgroundColor: '#4F46E5', borderColor: '#4F46E5' }}
      >
        Add Group
      </Button>
      <Button
        key="save"
        type="primary"
        icon={<SaveOutlined />}
        size="middle"
        className="uppercase"
        onClick={handleSubmitSheet}
        style={{ backgroundColor: '#52c41a', borderColor: '#52c41a' }}
      >
        Save
      </Button>
    </div>
  )
}
