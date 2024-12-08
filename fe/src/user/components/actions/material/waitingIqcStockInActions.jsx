import { useState } from 'react'
import { Button } from 'antd'
import {
  SaveOutlined,
  DeleteOutlined,
  UploadOutlined,
  SearchOutlined,
} from '@ant-design/icons'
import { LiveIcon, OffIcon } from '../../icons'

export default function WaitingIqcStockInActions({
  status,
  handleSubmit,
  handleDelete,
  handleRestFrom,
  handleUploadExcel,
}) {
  return (
    <div className="flex items-center gap-2">
      {status ? (
        <>
          <span className="inline-flex items-center justify-center rounded-lg w-20 bg-emerald-100 px-5 py-[6px] text-emerald-700">
            <p className="whitespace-nowrap text-sm">LIVE</p>
          </span>
        </>
      ) : (
        <>
          <span className="inline-flex items-center justify-center rounded-lg w-20 bg-red-100 px-5 py-[6px] text-red-700">
            <p className="whitespace-nowrap text-sm">OFF</p>
          </span>
        </>
      )}
      <Button
        key="Save"
        type="primary"
        icon={<SaveOutlined />}
        size="middle"
        className="uppercase"
        onClick={handleSubmit}
        style={{ backgroundColor: '#52c41a', borderColor: '#52c41a' }}
      >
        Save
      </Button>

      <Button
        key="Row Delete"
        type="primary"
        icon={<DeleteOutlined />}
        size="middle"
        onClick={handleDelete}
        className="uppercase text-white"
        style={{ backgroundColor: '#ff4d4f', borderColor: '#ff4d4f' }}
      >
        Row Delete
      </Button>

      <Button
        key="Reset"
        type="default"
        icon={<SaveOutlined />}
        size="middle"
        className="uppercase"
        color="default"
        variant="filled"
        onClick={handleRestFrom}
        style={{ backgroundColor: '#f0f0f0', borderColor: '#d9d9d9' }}
      >
        Reset
      </Button>

      <Button
        key="Excel Upload"
        type="default"
        icon={<UploadOutlined />}
        size="middle"
        className="uppercase"
        color="default"
        variant="filled"
        onClick={handleUploadExcel}
        style={{ backgroundColor: '#ffa500', borderColor: '#ffa500' }}
      >
        Excel Upload
      </Button>
    </div>
  )
}
