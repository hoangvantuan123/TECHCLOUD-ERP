import { useState } from 'react'
import { Modal, Avatar, Typography, Tabs } from 'antd'
import {
  UserOutlined,
  SettingOutlined,
  SecurityScanOutlined,
  InfoCircleOutlined,
} from '@ant-design/icons'
import { useTranslation } from 'react-i18next'

import './static/css/tabUserSetting.css'

const { Text } = Typography
const { TabPane } = Tabs

export default function Setting({ userNameLogin }) {
  const showModal = () => setIsModalOpen(true)

  return (
    <div>
      <div
        onClick={showModal}
        className="flex items-center gap-2 cursor-pointer "
      >
        <Avatar shape="square" icon={<UserOutlined />} />
        <Text className="text-sm font-medium">{userNameLogin}</Text>
      </div>
    </div>
  )
}
