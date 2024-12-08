import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Dropdown, Menu, Typography, Avatar } from 'antd'
import { UserOutlined } from '@ant-design/icons'
import Setting from './settings'
import { useNavigate } from 'react-router-dom'
import Cookies from 'js-cookie'
const { Text } = Typography

const AuthUser = ({ collapsed }) => {
  const userFromLocalStorage = JSON.parse(localStorage.getItem('userInfo'))
  const userNameLogin = userFromLocalStorage?.login || 'none'
  const { t } = useTranslation()
  const navigate = useNavigate()
  const handleLogout = () => {
    Cookies.remove('accessToken')
    localStorage.removeItem('userInfo')
    navigate('/u/login')
  }

  const menu = (
    <Menu>
      <Menu.Item>
        <Text className="text-xs font-medium opacity-70">{userNameLogin}</Text>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item>
        <Setting userNameLogin={userNameLogin} />
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item onClick={handleLogout}>
        <Text className="text-[12px] text-red-600">
          {t('model_setting_user.logout')}
        </Text>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item>
        <Text className="text-[12px]">
          {t('model_setting_user.download_ios')}
        </Text>
      </Menu.Item>
      <Menu.Item>
        <Text className="text-[12px]">
          {t('model_setting_user.download_android')}
        </Text>
      </Menu.Item>
    </Menu>
  )

  return (
    <div className="p-1 mt-3 mb-3 cursor-pointer">
      {collapsed ? (
        <Dropdown overlay={menu} placement="bottomLeft">
          <div className="flex items-center justify-center">
            <Avatar icon={<UserOutlined />} />
          </div>
        </Dropdown>
      ) : (
        <Dropdown overlay={menu} placement="bottomLeft">
          <div className="flex items-center justify-between gap-2 rounded-lg px-4 py-2 cursor-pointer text-gray-500 hover:text-gray-700">
            <div className="flex items-center gap-2">
              <Avatar shape="square" icon={<UserOutlined />} />
              <Text className="text-sm font-medium">{userNameLogin}</Text>
            </div>
          </div>
        </Dropdown>
      )}
    </div>
  )
}

export default AuthUser
