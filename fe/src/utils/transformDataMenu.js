export function transformDataMenu(data) {
  const menuMap = {}
  const result = []

  data.forEach((item) => {
    if (item.MenuType === 'submenu') {
      menuMap[item.MenuId] = {
        Id: item.Id,
        MenuKey: item.MenuKey,
        MenuLabel: item.MenuLabel,
        MenuId: null,
        Icon: '<FolderOpenOutlined style={{ fontSize: "20px" }} />',
        MenuLink: item.MenuLink,
        MenuType: item.MenuType,
        View: item.View,
        subMenu: [],
      }
      result.push(menuMap[item.MenuId])
    } else if (item.MenuType === 'menu' && item.MenuSubRootId) {
      const parent = menuMap[item.MenuSubRootId]
      if (parent) {
        parent.subMenu.push({
          MenuKey: item.MenuKey,
          MenuLabel: item.MenuLabel,
          MenuId: item.MenuSubRootId,
          MenuLink: item.MenuLink,
          View: item.View,
        })
      }
    }
  })

  return result
}
