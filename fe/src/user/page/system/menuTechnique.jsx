import { useState, useCallback, useEffect, useRef, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { Helmet } from 'react-helmet'
import { Input, Space, Table, Typography, message, Tabs, Layout } from 'antd'
const { Title, Text } = Typography
import { FilterOutlined } from '@ant-design/icons'
import { ArrowIcon } from '../../components/icons'
import dayjs from 'dayjs'
import { GetCodeHelp } from '../../../features/codeHelp/getCodeHelp'
import { GetDeliveryList } from '../../../features/material/getDeliveryList'
import { debounce } from 'lodash'
import { useNavigate } from 'react-router-dom'
import { encodeBase64Url } from '../../../utils/decode-JWT'
import CryptoJS from 'crypto-js'
import UserManagementQuery from '../../components/query/system/userManagementQuery'
import ViewRoleManagement from '../../components/view/system/viewRoleManagement'
import MenuManagementActions from '../../components/actions/system/menuManagementActions'
import TableMenuManagement from '../../components/table/system/tableMenuManagement'
import DrawerAddMenu from '../../components/drawer/system/addMenu'
import { GetAllMenus } from '../../../features/system/getMenus'
import { DeleteMenus } from '../../../features/system/deleteMenus'
import { CompactSelection } from '@glideapps/glide-data-grid'
const generateRandomData = () => {
  const menuRootIds = [1, 2, 3, 4, 5]
  const types = ['main', 'sub']
  const labels = [
    'Home',
    'About Us',
    'Services',
    'Contact',
    'FAQ',
    'Blog',
    'Portfolio',
    'Shop',
    'Careers',
    'Support',
  ]

  const data = []

  for (let i = 0; i < 1000; i++) {
    const menuRootId =
      menuRootIds[Math.floor(Math.random() * menuRootIds.length)]
    const menuSubRootId = menuRootId * 100 + Math.floor(Math.random() * 100)
    const key = labels[Math.floor(Math.random() * labels.length)]
      .toLowerCase()
      .replace(/\s+/g, '-')
    const label = labels[Math.floor(Math.random() * labels.length)]
    const link = `/${key}`
    const type = types[Math.floor(Math.random() * types.length)]

    data.push({
      'Menu Root ID': menuRootId,
      'Menu Sub Root ID': menuSubRootId,
      Key: key,
      Label: label,
      Link: link,
      Type: type,
    })
  }

  return data
}

export default function MenuTechnique({ permissions, isMobile }) {
  const { t } = useTranslation()
  const gridRef = useRef(null)
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState([])
  const [menus, setMenus] = useState([])
  const [formData, setFormData] = useState(dayjs().startOf('month'))
  const [toDate, setToDate] = useState(dayjs())
  const [checkedRowKey, setCheckedRowKey] = useState(null)
  const [keyPath, setKeyPath] = useState(null)
  const [checkedPath, setCheckedPath] = useState(false)
  const formatDate = useCallback((date) => date.format('YYYYMMDD'), [])
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selection, setSelection] = useState({
    columns: CompactSelection.empty(),
    rows: CompactSelection.empty(),
  })
  const [showSearch, setShowSearch] = useState(false)
  const fetchDataMenus = useCallback(async () => {
    setLoading(true)
    try {
      const response = await GetAllMenus()
      setMenus(response.data.data || [])
    } catch (error) {
      setMenus([])
    } finally {
      setLoading(false)
    }
  }, [])

  const debouncedFetchDataMenus = useMemo(
    () => debounce(fetchDataMenus, 100),
    [fetchDataMenus],
  )

  useEffect(() => {
    debouncedFetchDataMenus()
    return () => {
      debouncedFetchDataMenus.cancel()
    }
  }, [debouncedFetchDataMenus])

  const openModal = () => {
    setIsModalOpen(true)
  }
  const closeModal = () => {
    setIsModalOpen(false)
  }
  const getSelectedRowIds = () => {
    const selectedRows = selection.rows.items
    let ids = []

    selectedRows.forEach((range) => {
      const start = range[0]
      const end = range[1] - 1

      for (let i = start; i <= end; i++) {
        ids.push(menus[i]?.Id)
      }
    })

    return ids.filter((id) => id !== undefined)
  }
  const handleDeleteDataSheet = useCallback(
    async (e) => {
      const selectedRowIds = getSelectedRowIds()
      if (selectedRowIds.length === 0) {
        message.warning('Vui lòng chọn ít nhất một hàng để xóa.')
        return
      }

      const remainingRows = menus.filter(
        (row) => !selectedRowIds.includes(row.id),
      )

      const response = await DeleteMenus(selectedRowIds)
      if (response.data.success) {
        debouncedFetchDataMenus()
        message.success(response.data.message)
      } else {
        message.error(response.data.message)
      }
    },
    [menus, selection],
  )

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'f') {
        e.preventDefault()
        setShowSearch(true)
      }
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [])
  return (
    <>
      <Helmet>
        <title>ITM - {t('Menu Management')}</title>
      </Helmet>
      <div className="bg-slate-50 p-3 h-screen overflow-hidden">
        <div className="flex flex-col gap-4 md:grid md:grid-cols-4 md:grid-rows-[auto_1fr] md:gap-4 h-full">
          <div className="col-start-1 col-end-5 row-start-1 w-full rounded-lg ">
            <div className="flex items-center justify-between">
              <Title level={4} className="mt-2 uppercase opacity-85 ">
                {t('Menu Management')}
              </Title>
              <MenuManagementActions
                fetchDataMenus={fetchDataMenus}
                openModal={openModal}
                handleDeleteDataSheet={handleDeleteDataSheet}
                data={menus}
              />
            </div>
          </div>

          <div className="col-start-1 col-end-5 row-start-2 w-full h-full rounded-lg  overflow-auto">
            <TableMenuManagement
              data={menus}
              setSelection={setSelection}
              selection={selection}
              showSearch={showSearch}
              setShowSearch={setShowSearch}
            />
          </div>
        </div>

        <DrawerAddMenu
          isOpen={isModalOpen}
          menus={menus}
          onClose={closeModal}
          fetchDataMenus={fetchDataMenus}
        />
      </div>
    </>
  )
}
