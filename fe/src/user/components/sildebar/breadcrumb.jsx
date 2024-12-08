import { useLocation } from 'react-router-dom'
import { Dropdown, Menu } from 'antd'
import { menuItems, menuSettingItems } from './dataMenu'

export default function BreadcrumbRouter() {
  const location = useLocation()
  const currentPath = location.pathname

  const findRoute = (path, menus) => {
    for (const menu of menus) {
      if (menu.link === path) {
        return [menu]
      }
      if (menu.subMenu) {
        const subRoute = findRoute(path, menu.subMenu)
        if (subRoute) {
          return [menu, ...subRoute]
        }
      }
    }
    return null
  }

  const breadcrumbItems = currentPath
    .split('/')
    .filter((part) => part)
    .reduce((breadcrumbs, part, index, array) => {
      const path = '/' + array.slice(0, index + 1).join('/')
      const matchedRoute =
        findRoute(path, menuItems) || findRoute(path, menuSettingItems)

      if (matchedRoute) {
        const lastRoute = matchedRoute[matchedRoute.length - 1]
        breadcrumbs.push({
          path: lastRoute.link,
          breadcrumbName: lastRoute.label,
          type: lastRoute.type,
          subMenu: lastRoute.subMenu || null,
        })
      }
      return breadcrumbs
    }, [])

  breadcrumbItems.unshift({
    path: '/u/home',
    breadcrumbName: (
      <>
        <span>HOME</span>
      </>
    ),
    type: null,
    subMenu: null,
  })

  const renderSubMenu = (subMenu) => {
    if (!subMenu) return null

    return (
      <Menu>
        {subMenu.map((item) => (
          <Menu.Item key={item.key}>
            <a href={item.link}>{item.label}</a>
          </Menu.Item>
        ))}
      </Menu>
    )
  }

  return (
    <div className="breadcrumb bg-slate-50 p-2 uppercase text-xs">
      {breadcrumbItems.map((item, index) => (
        <span key={item.path}>
          {index > 0 && <span> / </span>}
          {item.subMenu ? (
            <Dropdown
              overlay={renderSubMenu(item.subMenu)}
              trigger={['click', 'hover']}
            >
              <a href={item.path}>{item.breadcrumbName}</a>
            </Dropdown>
          ) : (
            <a href={item.path}>{item.breadcrumbName}</a>
          )}
        </span>
      ))}
    </div>
  )
}
