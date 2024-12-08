import { useState, useCallback, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import {
  Input,
  Space,
  Table,
  Typography,
  Tooltip,
  Tabs,
  Button,
  DatePicker,
  Select,
  Segmented,
  Modal,
} from 'antd'
import { CloumnIcon } from '../icons'
import {
  SearchOutlined,
  SaveOutlined,
  DeleteOutlined,
  PlusOutlined,
  UserOutlined,
  BarsOutlined,
  TableOutlined,
  FileTextOutlined,
} from '@ant-design/icons'
const { RangePicker } = DatePicker

export default function UsersSelectors({
  handleDeleteDebounced,
  keyword,
  setKeyword,
  value,
  setValue,
  loadingCodeHelp,
  setIsDrawerVisible,
  handleSearch,
  setUmEmpType,
  dateRange,
  setDateRange,
  keyEmIDWord,
  handleEmpSeqQuery,
}) {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const handleChange = (value) => {
    setUmEmpType(value)
  }

  const handleChangeView = (newValue) => {
    setValue(newValue)
  }
  const handleColumn = () => {
    setIsDrawerVisible(true)
  }
  const handleOnClickAddLink = () => {
    navigate('/u/action=gen-info-1-2/from=add')
  }
  return (
    <div className="mt-1">
      <div className="group p-2 mb-2  bg-white border rounded-lg">
        <div className="flex gap-4 justify-between">
          <div className="flex gap-4">
            <Button
              type="primary"
              onClick={handleEmpSeqQuery}
              icon={<SearchOutlined />}
              size="middle"
            >
              Truy vấn
            </Button>
            <Button
              type="primary"
              danger
              icon={<DeleteOutlined />}
              size="middle"
              onClick={handleDeleteDebounced}
            >
              Xóa
            </Button>
            <Button
              type="dashed"
              onClick={handleOnClickAddLink}
              icon={<PlusOutlined />}
              size="middle"
            >
              Thêm
            </Button>
          </div>
          <div className="flex gap-4">
            <Segmented
              options={[
                {
                  label: 'Table',
                  value: 'Table',
                  icon: <TableOutlined />,
                },
                /*  {
                                    label: 'Sheet',
                                    value: 'Sheet',
                                    icon: <FileTextOutlined />,
                                }, */
              ]}
              size="middle"
              value={value}
              onChange={handleChangeView}
            />
          </div>
        </div>
      </div>
      <details
        className="group p-2 [&_summary::-webkit-details-marker]:hidden  bg-white border rounded-lg"
        open
      >
        <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-gray-900">
          <h2 className=" text-base font-medium">{t('CÔNG CỤ')}</h2>
          <span className="relative size-5 shrink-0">
            <svg
              className="size-5 shrink-0 transition duration-300 group-open:-rotate-180"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </span>
        </summary>
        <div className="flex p-3 gap-4">
          <div className="flex flex-col">
            <Tooltip title="Giá trị mặc định là 2024-01-01">
              <label htmlFor="datePicker">Thời gian</label>
            </Tooltip>
            <RangePicker
              id="datePicker"
              size="middle"
              value={dateRange}
              onChange={setDateRange}
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="typeSelect">Phân loại nhân viên</label>
            <Select
              id="typeSelect"
              defaultValue="All"
              style={{
                width: 120,
              }}
              size="middle"
              onChange={handleChange}
              options={[
                {
                  value: 0,
                  label: 'All',
                },
                {
                  value: 3059001,
                  label: 'Official',
                },
                {
                  value: 3059002,
                  label: 'Seasonal',
                },
              ]}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="typeSelect">Nhân viên</label>
            <Input
              size="middle"
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
              placeholder="Tên hoặc mã nhân viên"
              className="bg-blue-50"
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  handleSearch()
                }
              }}
              onDoubleClick={handleSearch}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="typeSelect">Mã nhân viên</label>
            <Input
              size="middle"
              value={keyEmIDWord}
              readOnly={true}
              placeholder="Mã nhân viên"
              className="bg-blue-50"
            />
          </div>
        </div>
      </details>
    </div>
  )
}
