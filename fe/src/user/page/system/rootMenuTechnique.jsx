import { useState, useCallback, useEffect, useRef, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { Helmet } from 'react-helmet'
import { Input, Space, Table, Typography, message, Tabs, Layout } from 'antd'
const { Title, Text } = Typography
import { FilterOutlined } from '@ant-design/icons'

import dayjs from 'dayjs'
import { GetCodeHelp } from '../../../features/codeHelp/getCodeHelp'
import { GetDeliveryList } from '../../../features/material/getDeliveryList'
import { debounce } from 'lodash'
import { useNavigate } from 'react-router-dom'
import { encodeBase64Url } from '../../../utils/decode-JWT'
import CryptoJS from 'crypto-js'
import UserManagementQuery from '../../components/query/system/userManagementQuery'
import ViewRoleManagement from '../../components/view/system/viewRoleManagement'
import { GetAllRootMenus } from '../../../features/system/getRootMenu'
import RootMenuManagementActions from '../../components/actions/system/rootMenuManagementActions'
import DrawerAddRootMenu from '../../components/drawer/system/addRootMenu'
import TableRootMenuManagement from '../../components/table/system/tableRootMenuManagement'
import { DeleteRootMenus } from '../../../features/system/deleteRootMenus'
import { CompactSelection } from '@glideapps/glide-data-grid'
export default function RootMenuTechnique({ permissions, isMobile }) {
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
  const [selectedRowKeys, setSelectedRowKeys] = useState([])
  const [clickedRowData, setClickedRowData] = useState(null)
  const [clickedRowDataList, setClickedRowDataList] = useState([])
  const [isMinusClicked, setIsMinusClicked] = useState(false)
  const [lastClickedCell, setLastClickedCell] = useState(null)
  const [selection, setSelection] = useState({
    columns: CompactSelection.empty(),
    rows: CompactSelection.empty(),
  })
  const [showSearch, setShowSearch] = useState(false)
  const fetchDataRootMenus = useCallback(async () => {
    setLoading(true)
    try {
      const response = await GetAllRootMenus()
      setMenus(response.data.data || [])
    } catch (error) {
      setMenus([])
    } finally {
      setLoading(false)
    }
  }, [])

  const debouncedFetchDataMenus = useMemo(
    () => debounce(fetchDataRootMenus, 100),
    [fetchDataRootMenus],
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

  const onCellClicked = (cell, event) => {
    let rowIndex

    if (cell[0] !== -1) {
      return
    }

    if (cell[0] === -1) {
      rowIndex = cell[1]
      setIsMinusClicked(true)
    } else {
      rowIndex = cell[0]
      setIsMinusClicked(false)
    }

    if (
      lastClickedCell &&
      lastClickedCell[0] === cell[0] &&
      lastClickedCell[1] === cell[1]
    ) {
      setLastClickedCell(null)
      setClickedRowData(null)
      return
    }

    if (rowIndex >= 0 && rowIndex < menus.length) {
      const rowData = menus[rowIndex]
      setClickedRowData(rowData)
      setLastClickedCell(cell)
    }
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

      const response = await DeleteRootMenus(selectedRowIds)

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
        <title>ITM - {t('Root Menu Management')}</title>
      </Helmet>
      <div className="bg-slate-50 p-3 h-screen overflow-hidden">
        <div className="flex flex-col gap-4 md:grid md:grid-cols-4 md:grid-rows-[auto_1fr] md:gap-4 h-full">
          <div className="col-start-1 col-end-5 row-start-1 w-full rounded-lg ">
            <div className="flex items-center justify-between">
              <Title level={4} className="mt-2 uppercase opacity-85 ">
                {t('Root Menu Management')}
              </Title>
              <RootMenuManagementActions
                openModal={openModal}
                handleDeleteDataSheet={handleDeleteDataSheet}
                data={menus}
              />
            </div>
          </div>

          <div className="col-start-1 col-end-5 row-start-2 w-full h-full rounded-lg  overflow-auto">
            <TableRootMenuManagement
              data={menus}
              onCellClicked={onCellClicked}
              setSelection={setSelection}
              selection={selection}
              showSearch={showSearch}
              setShowSearch={setShowSearch}
            />
          </div>
        </div>
        <DrawerAddRootMenu
          isOpen={isModalOpen}
          menus={menus}
          onClose={closeModal}
          fetchDataRootMenus={fetchDataRootMenus}
        />
      </div>
    </>
  )
}
