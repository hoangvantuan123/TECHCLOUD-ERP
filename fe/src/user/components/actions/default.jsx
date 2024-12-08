import { useState } from 'react'
import { Button } from 'antd'
import {
  SaveOutlined,
  DeleteOutlined,
  UploadOutlined,
  SearchOutlined,
} from '@ant-design/icons'

export default function Default() {
  return (
    <div className="flex items-center gap-2">
      <Button
        key="Save"
        type="primary"
        icon={<SaveOutlined />}
        size="middle"
        className="uppercase"
        style={{ backgroundColor: '#52c41a', borderColor: '#52c41a' }}
      >
        Save
      </Button>

      <Button
        key="Row Delete"
        type="primary"
        icon={<DeleteOutlined />}
        size="middle"
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
        style={{ backgroundColor: '#ffa500', borderColor: '#ffa500' }}
      >
        Excel Upload
      </Button>
    </div>
  )
}
