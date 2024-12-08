import {
  Layout,
  Menu,
  Typography,
  Checkbox,
  Dropdown,
  Button,
  Tooltip,
} from 'antd'
import { Link, useNavigate } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import { useState, useEffect, useCallback } from 'react'
import SidebarContent from './styled/toggleSidebar'
import Logo from '../../../assets/192.png'
import { useTranslation } from 'react-i18next'
import {
  SettingOutlined,
  SearchOutlined,
  AppstoreOutlined,
  AppstoreAddOutlined,
  UserOutlined,
  PlusOutlined,
  FolderOpenOutlined,
} from '@ant-design/icons'

import { SettingIcon, FileMenuIcon, LogoutIcon } from './icon'
import { iconMapping } from './dataMenu'
import Cookies from 'js-cookie'
const { Sider, Footer } = Layout
const { SubMenu } = Menu
const { Title, Text } = Typography
const menuStyle = { borderInlineEnd: 'none' }
import './static/css/scroll_container.css'
import ModalLogout from '../modal/logout/modalLogout'

const Sidebar = ({ permissions, rootMenu, menuTransForm }) => {
  const location = useLocation()
  const navigate = useNavigate()
  const userFromLocalStorage = JSON.parse(localStorage.getItem('userInfo'))
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [selectedItems, setSelectedItems] = useState(() => {
    const storedSelections =
      JSON.parse(localStorage.getItem('selectedMenuItems')) || []
    return storedSelections
  })
  const userNameLogin = userFromLocalStorage?.login || 'none'
  const [collapsed, setCollapsed] = useState(() => {
    const savedState = localStorage.getItem('COLLAPSED_STATE')
    return savedState ? JSON.parse(savedState) : false
  })
  const [isMobile, setIsMobile] = useState(false)
  const [menu, setMenu] = useState(() => {
    const savedMenuState = localStorage.getItem('menu')
    return savedMenuState ? JSON.parse(savedMenuState) : true
  })

  const [isMenu, setIsMenu] = useState(localStorage.getItem('isMenu') || null)
  const [labelMenu, setLabelMenu] = useState(
    localStorage.getItem('labelMenu') || null,
  )
  const [logoutDrawerVisible, setLogoutDrawerVisible] = useState(false)

  const { t } = useTranslation()
  const [activeTab, setActiveTab] = useState(
    sessionStorage.getItem('current_action_phone'),
  )
  const [currentAction, setCurrentAction] = useState(
    sessionStorage.getItem('current_action'),
  )

  const toggleSidebar = () => {
    setCollapsed((prevState) => {
      const newState = !prevState
      localStorage.setItem('COLLAPSED_STATE', JSON.stringify(newState))
      return newState
    })
  }

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768)
    }

    handleResize()
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const handleonclickMenu = (e) => {
    setIsMenu(e.RootMenuKey)
    setLabelMenu(e.RootMenuLabel)
    localStorage.setItem('isMenu', e.RootMenuKey)
    localStorage.setItem('labelMenu', e.RootMenuLabel)
    localStorage.setItem('menu', false)
    setCollapsed(false)
    setMenu(!menu)
  }

  if (location.pathname === '/u/login') {
    return null
  }

  const handleOnClickMenuItem = (e) => {
    sessionStorage.setItem('current_action', e.key)
    setCurrentAction(e.key)
  }

  const handleOnClickMenuItemPhone = (e) => {
    sessionStorage.setItem('current_action_phone', e)
    setActiveTab(e)
  }

  const handleOnClickMenu = () => {
    setMenu(!menu)
    localStorage.setItem('menu', false)
  }
  const handleOnClickMenuFast = (e) => {
    setIsMenu(e.RootMenuKey)
    setLabelMenu(e.RootMenuLabel)
    localStorage.setItem('isMenu', e.RootMenuKey)
    localStorage.setItem('labelMenu', e.RootMenuLabel)
    setCollapsed(false)
    localStorage.setItem('COLLAPSED_STATE', false)
  }

  const handleCheckboxChange = (e, itemKey) => {
    const newSelectedItems = e.target.checked
      ? [...selectedItems, itemKey]
      : selectedItems.filter((key) => key !== itemKey)
    setSelectedItems(newSelectedItems)

    localStorage.setItem('selectedMenuItems', JSON.stringify(newSelectedItems))
  }

  const openModalShowLogout = () => {
    setLogoutDrawerVisible(true)
  }
  const confirmLogout = useCallback(async () => {
    Cookies.remove('a_a')
    localStorage.removeItem('userInfo')
    localStorage.removeItem('rolesMenu')
    navigate('/u/login')
  }, [])

  const shortcutMenu = (
    <Menu>
      {rootMenu.map(
        (item) =>
          item.View === true && (
            <Menu.Item key={item.RootMenuKey}>
              <Checkbox
                checked={selectedItems.includes(item.RootMenuKey)}
                onChange={(e) => handleCheckboxChange(e, item.RootMenuKey)}
              >
                <span className="ml-3 uppercase">{t(item.RootMenuLabel)}</span>
              </Checkbox>
            </Menu.Item>
          ),
      )}
    </Menu>
  )

  return (
    <>
      <ModalLogout
        setModalOpen={setLogoutDrawerVisible}
        modalOpen={logoutDrawerVisible}
        confirmLogout={confirmLogout}
      />
      {!isMobile ? (
        <div className="flex">
          <div className="flex h-screen w-16 flex-col justify-between border-e bg-white">
            <div>
              <Link to="/">
                <div className="inline-flex size-16 items-center justify-center">
                  <img
                    src={Logo}
                    className=" w-10 cursor-pointer   border rounded-lg h-auto  "
                  />
                </div>
              </Link>

              <div className="border-t border-gray-100">
                <div className="px-2">
                  <div className="py-4">
                    <a
                      onClick={handleOnClickMenu}
                      className="group relative flex justify-center rounded px-2 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                    >
                      <AppstoreAddOutlined style={{ fontSize: '20px' }} />
                    </a>
                  </div>

                  <ul className="space-y-1 border-t border-gray-100 pt-4">
                    {rootMenu
                      .filter((item) =>
                        selectedItems.includes(item.RootMenuKey),
                      )
                      .map((item) => {
                        if (item.View === true) {
                          return item.RootMenuUtilities ? (
                            <li key={item.RootMenuKey}>
                              <Tooltip
                                title={item.RootMenuLabel}
                                placement="right"
                              >
                                <a
                                  onClick={() => handleOnClickMenuFast(item)}
                                  className="group relative flex justify-center rounded-lg px-2 py-2 border mb-2 text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                                >
                                  {iconMapping[item.RootMenuIcon]}
                                </a>
                              </Tooltip>
                            </li>
                          ) : null
                        }
                        return null
                      })}

                    <li>
                      <Dropdown
                        overlay={shortcutMenu}
                        trigger={['click']}
                        placement="bottomLeft"
                      >
                        <a className="group relative flex justify-center  rounded-lg px-2 py-2 border mb-2 text-gray-500 hover:bg-gray-50 hover:text-gray-700">
                          <PlusOutlined style={{ fontSize: '20px' }} />
                        </a>
                      </Dropdown>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="sticky inset-x-0 bottom-0 border-t border-gray-100 bg-white p-2">
              <div>
                {/*   <button
                  type="submit"
                  className="group relative mb-5 flex w-full justify-center rounded-lg px-2 py-1.5 text-sm text-gray-500 bg-gray-100 hover:text-gray-700"
                >
                  <LogoutIcon />
                  <span className="invisible absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white group-hover:visible">
                    Logout
                  </span>
                </button> */}
                <div className=" border-t pb-2 pt-2"></div>
                <button
                  onClick={openModalShowLogout}
                  className="group relative flex w-full justify-center rounded-lg px-2 py-1.5 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                >
                  <LogoutIcon />
                </button>
              </div>
            </div>
          </div>
          {menu && (
            <Sider
              width={250}
              theme="light"
              className="p-1 border-r h-screen overflow-auto scroll-container"
            >
              <SidebarContent
                collapsed={collapsed}
                toggleSidebar={handleOnClickMenu}
              />
              <div className="mb-5"></div>
              <Text className="text-sm font-medium opacity-60">MENU</Text>

              <Menu
                style={menuStyle}
                mode="inline"
                defaultSelectedKeys={[`${currentAction}`]}
                className="border-r-0"
                onClick={(e) => handleOnClickMenuItem(e)}
              >
                {rootMenu.map(
                  (item) =>
                    item.View === true && (
                      <Menu.Item key={item.RootMenuKey}>
                        <Link
                          onClick={() => handleonclickMenu(item)}
                          className="flex items-center justify-start"
                        >
                          {iconMapping[item?.RootMenuIcon]}
                          <span className="ml-3 uppercase">
                            {t(item?.RootMenuLabel)}
                          </span>
                        </Link>
                      </Menu.Item>
                    ),
                )}
              </Menu>
            </Sider>
          )}
          {isMenu !== null && (
            <Sider
              width={290}
              theme="light"
              collapsed={collapsed}
              collapsedWidth={0}
              onCollapse={toggleSidebar}
              className={`${
                collapsed ? 'p-0 border-none' : 'p-2 border-r'
              } h-screen overflow-auto scroll-container transition-all duration-300 ease-in-out`}
            >
              <SidebarContent
                collapsed={collapsed}
                toggleSidebar={toggleSidebar}
              />
              <div className="mb-5"></div>
              {!collapsed && (
                <Text className="text-sm font-medium opacity-60 uppercase">
                  {labelMenu}
                </Text>
              )}

              <Menu
                style={menuStyle}
                mode="inline"
                defaultSelectedKeys={[`${currentAction}`]}
                className="border-r-0"
                onClick={(e) => handleOnClickMenuItem(e)}
              >
                {menuTransForm.map((item) => {
                  if (item?.MenuKey === isMenu && item?.View === true) {
                    if (item?.MenuType === 'submenu') {
                      return (
                        <Menu.SubMenu
                          key={item.Id}
                          title={
                            <span className="flex items-center justify-start">
                              <FolderOpenOutlined
                                style={{ fontSize: '20px' }}
                              />
                              <span className="ml-3 uppercase">
                                {t(item?.MenuLabel)}
                              </span>
                            </span>
                          }
                        >
                          {item.subMenu
                            ?.filter((subItem) => subItem?.View === true)
                            .map((subItem) => (
                              <Menu.Item key={subItem.MenuKey}>
                                <Link
                                  to={subItem.MenuLink}
                                  className="flex items-center justify-start"
                                >
                                  <span className="uppercase">
                                    {t(subItem.MenuLabel)}
                                  </span>
                                </Link>
                              </Menu.Item>
                            ))}
                        </Menu.SubMenu>
                      )
                    } else if (item?.MenuType === 'menu') {
                      return (
                        <Menu.Item key={item.Id}>
                          <Link
                            to={item.MenuLink}
                            className="flex items-center justify-start"
                          >
                            <FolderOpenOutlined style={{ fontSize: '20px' }} />
                            <span className="ml-3 uppercase">
                              {t(item.MenuLabel)}
                            </span>
                          </Link>
                        </Menu.Item>
                      )
                    }
                  }
                  return null
                })}
              </Menu>
            </Sider>
          )}
        </div>
      ) : (
        <Footer className="fixed bottom-0 z-50 w-full bg-white border-t-[1px] border-b-0 pt-3 pb-7 p-0">
          <div className="flex justify-around w-full space-x-4">
            {[
              {
                key: 'work',
                icon: <SettingOutlined />,
                label: 'Làm việc',
                router: 'action=work-1-1/from=view',
              },
              {
                key: 'search',
                icon: <SearchOutlined />,
                label: 'Tra cứu',
                router: 'action=lookup-1-1/from=view',
              },
              {
                key: 'materials',
                icon: <AppstoreOutlined />,
                label: 'Vật liệu',
                router: 'action=material-1-1/from=view',
              },
              {
                key: 'user',
                icon: <UserOutlined />,
                label: 'Cá nhân',
                router: 'action=user',
              },
            ].map(({ key, icon, label, router }) => (
              <div key={key} className="flex-1 text-center">
                <Link
                  to={`/u/${router}`}
                  className="flex flex-col items-center"
                  onClick={() => handleOnClickMenuItemPhone(key)}
                >
                  <div
                    className={`text-2xl ${activeTab === key ? 'text-blue-500' : 'text-gray-400 opacity-70'}`}
                    style={{ fontSize: '23px' }}
                  >
                    {icon}
                  </div>
                  <span
                    className={`mt-1 text-[10px] ${activeTab === key ? 'text-blue-500' : 'text-gray-500 opacity-70'}`}
                  >
                    {t(label)}
                  </span>
                </Link>
              </div>
            ))}
          </div>
        </Footer>
      )}
    </>
  )
}

export default Sidebar
