// permissions.js

const findMenuByKey = (permissions, menuKey) => {
  return permissions.find((menu) => menu.MenuKey === menuKey) || null
}

export const checkMenuPermission = (permissions, menuKey, action = 'View') => {
  const menu = findMenuByKey(permissions, menuKey)

  if (!menu) return false

  const permissionKey = `${action}`
  return menu[permissionKey] ?? false
}

export const checkActionPermission = (permissions, menuKey, actionKey) => {
  return checkMenuPermission(permissions, menuKey, actionKey)
}
