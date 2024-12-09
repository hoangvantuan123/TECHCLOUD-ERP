export function transformDataMenu(data, rootMenu) {
  const menuMap = {};
  const result = [];

  data.forEach((item) => {
    if (item.MenuType === 'submenu') {
      menuMap[item.MenuId] = {
        Id: item.Id,
        MenuKey: item.MenuKey,
        MenuLabel: item.MenuLabel,
        MenuId: null,
        Icon: 'FolderOpenOutlined',
        MenuLink: item.MenuLink,
        MenuType: item.MenuType,
        View: item.View,
        subMenu: [],
      };
      result.push(menuMap[item.MenuId]);
    } else if (item.MenuType === 'menu' && item.MenuSubRootId) {
      const parent = menuMap[item.MenuSubRootId];
      if (parent) {
        parent.subMenu.push({
          MenuKey: item.MenuKey,
          MenuLabel: item.MenuLabel,
          MenuId: item.MenuSubRootId,
          MenuLink: item.MenuLink,
          View: item.View,
        });
      }
    }

    if (item.MenuType === 'menu' && item.MenuRootId) {

      const rootMenuItem = rootMenu.find(root => root.Id === item.MenuRootId);
      result.push({
        Id: item.Id,
        MenuKey: rootMenuItem.RootMenuKey,
        MenuLabel: item.MenuLabel,
        MenuId: null,
        Icon: 'FolderOutlined',
        MenuLink: item.MenuLink,
        MenuType: item.MenuType,
        View: item.View,
        RootMenuKey: rootMenuItem.RootMenuKey,
      });
    }
  });

  console.log('Final result:', result);
  return result;
}