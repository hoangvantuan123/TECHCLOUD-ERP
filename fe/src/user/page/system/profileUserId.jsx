import { useState, useCallback, useEffect, useRef, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { Helmet } from 'react-helmet'
import { Input, Space, Table, Typography, message, Tabs, Layout } from 'antd'
const { Title, Text } = Typography
import { FilterOutlined } from '@ant-design/icons'
import dayjs from 'dayjs'
import { debounce } from 'lodash'
import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import SecurityProfileID from '../../components/tabs/system/profileSecurityTab'
const items = [
  {
    key: '1',
    label: 'My details',
    children: 'Content of Tab Pane 1',
  },
  {
    key: '2',
    label: 'Access Rights',
    children: 'Content of Tab Pane 2',
  },
  {
    key: '3',
    label: 'Security',
    children: <SecurityProfileID />,
  },
]

export default function ProfileUserId({ permissions, isMobile }) {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const { id, name } = useParams()
  const onChange = (key) => {
    console.log(key)
  }
  return (
    <>
      <Helmet>
        <title>ITM - {t('User Management')}</title>
      </Helmet>
      <div className="bg-slate-50 p-2 h-screen overflow-hidden">
        <div className="flex flex-col gap-6 md:grid md:grid-cols-4 md:grid-rows-[auto_1fr] md:gap-6 h-full">
          <div className="col-start-1 col-end-5 row-start-1 w-full rounded-lg ">
            <div className="left-16 flex gap-4 items-end">
              <div className="h-32 w-32 rounded-lg bg-slate-500"></div>
              <div>
                <Title level={4}>Hoang Van Tuan</Title>
                <Text>VM3240288</Text>
              </div>
            </div>
          </div>
          <div className="col-start-1 col-end-5 row-start-2 w-full h-full rounded-lg   overflow-auto">
            <div className="w-full h-full ">
              <Tabs
                defaultActiveKey="1"
                type="card"
                size="small"
                items={items}
                onChange={onChange}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
