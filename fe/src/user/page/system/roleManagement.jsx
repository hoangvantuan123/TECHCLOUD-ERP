import { useState, useCallback, useEffect, useRef, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { Helmet } from 'react-helmet'
import { Input, Space, Table, Typography, message, Tabs, Layout } from 'antd'
const { Title, Text } = Typography
import { debounce } from 'lodash'
import RoleManagementActions from '../../components/actions/system/roleManagementActions'
import DrawerAddUserGroups from '../../components/drawer/system/addUserGroups'
import { GetAllResGroups } from '../../../features/system/getGroups'
import ViewRoleManagement from '../../components/view/system/viewRoleManagement'
import { PostUpdateRolesUser } from '../../../features/system/postUpdateRolesUser'
import { DeleteRolesUser } from '../../../features/system/deleteRolesUser'
import { DeleteGroups } from '../../../features/system/deleteGroups'
import WarningDeleteGroup from '../../components/modal/system/warningDeleteGroup'

export default function RoleManagement({ permissions, isMobile }) {
  const { t } = useTranslation()
  const gridRef = useRef(null)
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState([])
  const [groups, setGroups] = useState([])
  const [changedIds, setChangedIds] = useState([])
  const [selectedRowKeys, setSelectedRowKeys] = useState({
    table1: [],
    table2: [],
    table3: [],
  })
  const [openView, setOpenView] = useState(false)
  const [openModal, setOpenModal] = useState(false)
  const [selectedGroup, setSelectedGroup] = useState(null)
  const [checkStatus, setCheckStatus] = useState(false)
  const getAllSelectedKeys = () => {
    return [
      ...selectedRowKeys.table1,
      ...selectedRowKeys.table2,
      ...selectedRowKeys.table3,
    ]
  }

  const [isModalOpenAddUserGroups, setIsModalOpenAddUserGroups] =
    useState(false)
  const fetchDataGroups = useCallback(async () => {
    setLoading(true)
    try {
      const response = await GetAllResGroups()
      setGroups(response.data.data || [])
    } catch (error) {
      setGroups([])
    } finally {
      setLoading(false)
    }
  }, [])

  const debouncedFetchDataGroups = useMemo(
    () => debounce(fetchDataGroups, 100),
    [fetchDataGroups],
  )

  useEffect(() => {
    debouncedFetchDataGroups()
    return () => {
      debouncedFetchDataGroups.cancel()
    }
  }, [debouncedFetchDataGroups])

  const openModalAddUserGroups = () => {
    setIsModalOpenAddUserGroups(true)
  }
  const closeModalAddUserGroups = () => {
    setIsModalOpenAddUserGroups(false)
  }

  const handleSubmitSheet = useCallback(async () => {
    if (changedIds.length === 0) {
      message.warning('No changes to submit.')

      return
    }

    const response = await PostUpdateRolesUser(changedIds)

    if (response.success) {
      message.success('Save successful!')
      setChangedIds([])
    } else {
      message.error('Save failed!')
    }
  }, [changedIds])

  const handleDeleteDataSheet = useCallback(async () => {
    const ids = getAllSelectedKeys()
    if (ids.length === 0) {
      message.warning('No rows selected.')
      return
    }
    const response = await DeleteRolesUser(ids)
    if (response.success) {
      message.success('Delete successful!')
      setCheckStatus(true)
      setSelectedRowKeys({
        table1: [],
        table2: [],
        table3: [],
      })
    } else {
      message.error('Save failed!')
    }
  }, [selectedRowKeys])
  const handleDeleteGroups = useCallback(async () => {
    if (!selectedGroup) {
      message.warning('Không có nhóm để xoá!')
      return
    }
    setOpenModal(true)
  }, [selectedGroup])

  return (
    <>
      <Helmet>
        <title>ITM - {t('Role Management')}</title>
      </Helmet>
      <div className="bg-slate-50 p-3 h-screen overflow-hidden">
        <div className="flex flex-col gap-4 md:grid md:grid-cols-4 md:grid-rows-[auto_1fr] md:gap-4 h-full">
          <div className="col-start-1 col-end-5 row-start-1 w-full rounded-lg ">
            <div className="flex items-center justify-between">
              <Title level={4} className="mt-2 uppercase opacity-85 ">
                {t('Role Management')}
              </Title>
              <RoleManagementActions
                fetchDataGroups={fetchDataGroups}
                openModalAddUserGroups={openModalAddUserGroups}
                handleSubmitSheet={handleSubmitSheet}
                handleDeleteDataSheet={handleDeleteDataSheet}
                handleDeleteGroups={handleDeleteGroups}
              />
            </div>
          </div>

          <div className="col-start-1 col-end-5 row-start-2 w-full h-full rounded-lg  overflow-auto">
            <ViewRoleManagement
              data={data}
              loading={loading}
              groups={groups}
              setChangedIds={setChangedIds}
              changedIds={changedIds}
              setSelectedRowKeys={setSelectedRowKeys}
              selectedRowKeys={selectedRowKeys}
              setCheckStatus={setCheckStatus}
              setSelectedGroup={setSelectedGroup}
              checkStatus={checkStatus}
              selectedGroup={selectedGroup}
              setOpenView={setOpenView}
              openView={openView}
            />
          </div>
        </div>

        <DrawerAddUserGroups
          isOpen={isModalOpenAddUserGroups}
          onClose={closeModalAddUserGroups}
          fetchDataGroups={fetchDataGroups}
        />
        <WarningDeleteGroup
          modalOpen={openModal}
          setModalOpen={setOpenModal}
          selectedGroup={selectedGroup}
          setSelectedGroup={setSelectedGroup}
          setOpenView={setOpenView}
          fetchDataGroups={fetchDataGroups}
        />
      </div>
    </>
  )
}
