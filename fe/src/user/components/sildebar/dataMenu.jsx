import {
  InboxOutlined,
  TeamOutlined,
  SettingOutlined,
  ContainerOutlined,
  FolderOpenOutlined,
} from '@ant-design/icons'

export const iconMapping = {
  ContainerOutlined: <ContainerOutlined style={{ fontSize: '20px' }} />,
  TeamOutlined: <TeamOutlined style={{ fontSize: '20px' }} />,
  SettingOutlined: <SettingOutlined style={{ fontSize: '20px' }} />,
}
export const menuItems = [
  {
    RootMenuKey: 'warehouse',
    RootMenuLabel: 'Warehouse Management',
    RootMenuIcon: 'ContainerOutlined',
    RootMenuLink: '/u/warehouse',
    RootMenuUtilities: true,
  },
  {
    RootMenuKey: 'users',
    RootMenuLabel: 'USERS',
    RootMenuIcon: 'TeamOutlined',
    RootMenuLink: '/u/add',
    RootMenuUtilities: true,
  },
  {
    RootMenuKey: 'system_settings',
    RootMenuLabel: 'System Settings',
    RootMenuIcon: 'SettingOutlined',
    RootMenuLink: '/u/add',
    RootMenuUtilities: true,
  },
]

export const menuSettingItems = [
  {
    id: 2,
    key: 'warehouse',
    label: 'WAREHOUSING',
    MenuId: null,
    icon: <FolderOpenOutlined style={{ fontSize: '20px' }} />,
    link: '/u/warehouse/warehousing',
    type: 'submenu',
    subMenu: [
      {
        key: 'warehousing-1-1',
        MenuId: 2,
        label: 'BARCODE PRINT',
        link: '/u/warehouse/warehousing/barcode-print',
      },
      {
        key: 'warehousing-1-2',
        label: 'BARCODE CHANGE',
        MenuId: 2,
        link: '/u/warehouse/warehousing/barcode-change',
      },
      {
        key: 'warehousing-1-3',
        label: 'BARCODE CONFIRM',
        MenuId: 2,
        link: '/u/warehouse/warehousing/barcode-confirm',
      },
    ],
  },
  {
    id: 3,
    key: 'warehouse',
    label: 'KITTING',
    MenuId: null,
    icon: <FolderOpenOutlined style={{ fontSize: '20px' }} />,
    link: '/u/warehouse/kitting',
    type: 'submenu',
    subMenu: [
      {
        key: 'kitting-1-1',
        label: 'CONFIRM',
        MenuId: 3,
        link: '/u/warehouse/kitting/confirm',
      },
      {
        key: 'kitting-1-2',
        label: 'KITTING OUT',
        MenuId: 3,
        link: '/u/warehouse/kitting/kitting-out',
      },
      {
        key: 'kitting-1-3',
        label: '1D TO 2D PRINT',
        MenuId: 3,

        link: '/u/warehouse/kitting/1d-to-2d-print',
      },
    ],
  },
  {
    id: 5,
    key: 'warehouse',
    label: 'MATERIAL',
    MenuId: null,
    icon: <FolderOpenOutlined style={{ fontSize: '20px' }} />,
    link: '/u/warehouse/material',
    type: 'submenu',
    subMenu: [
      {
        key: 'material-1-1',
        label: 'DELIVERY LIST',
        MenuId: 5,
        link: '/u/warehouse/material/delivery-list',
      },
      {
        key: 'material-1-2',
        MenuId: 5,
        label: 'WAITING IQC STOCK IN',
        link: '/u/warehouse/material/waiting-iqc-stock-in/none',
      },
      {
        key: 'material-1-3',
        MenuId: 5,
        label: 'WAITING IQC STOCK STATUS',
        link: '/u/warehouse/material/waiting-iqc-stock-status',
      },
      {
        key: 'material-1-4',
        MenuId: 5,
        label: 'STOCK OUT REQUEST',
        link: '/u/warehouse/material/stock-out-request',
      },
      {
        key: 'material-1-5',
        MenuId: 5,
        label: 'STOCK OUT (FIFO)',
        link: '/u/warehouse/material/stock-out-fifo',
      },
      {
        key: 'material-1-6',
        MenuId: 5,
        label: 'MATERIAL STOCK IN',
        link: '/u/warehouse/material/material-stock-in',
      },
      {
        key: 'material-1-7',
        MenuId: 5,
        label: 'CONVERT YYYYMM',
        link: '/u/warehouse/material/convert-yyyymm',
      },
      {
        key: 'material-1-8',
        MenuId: 5,

        label: 'MATERIAL STOCK IN (BULKID)',
        link: '/u/warehouse/material/material-stock-in-bulkid',
      },
    ],
  },
  {
    id: 4,
    key: 'users',
    label: 'USERS',
    icon: <FolderOpenOutlined style={{ fontSize: '20px' }} />,
    link: '/u/add',
    type: 'menu',
    MenuId: null,
  },
  {
    id: 6,
    key: 'system_settings',
    label: 'Users',
    icon: <FolderOpenOutlined style={{ fontSize: '20px' }} />,
    link: '/u/system_settings/users',
    type: 'submenu',
    MenuId: null,
    subMenu: [
      {
        key: 'user_management-1-1',
        label: 'User Management',
        MenuId: 6,
        link: '/u/system_settings/users/user-management',
      },
      {
        key: 'user_management-1-2',
        label: 'Role Management',
        MenuId: 6,
        link: '/u/system_settings/users/role-management',
      },
    ],
  },
  {
    id: 7,
    key: 'system_settings',
    label: 'Technique',
    icon: <FolderOpenOutlined style={{ fontSize: '20px' }} />,
    link: '/u/system_settings/technique',
    type: 'submenu',
    MenuId: null,
    subMenu: [
      {
        key: 'technique-1-1',
        label: 'Root Menu',
        MenuId: 7,
        link: '/u/system_settings/technique/root-menu',
      },
      {
        key: 'technique-1-2',
        label: 'Menu items',
        MenuId: 7,
        link: '/u/system_settings/technique/menu-items',
      },
    ],
  },
]
