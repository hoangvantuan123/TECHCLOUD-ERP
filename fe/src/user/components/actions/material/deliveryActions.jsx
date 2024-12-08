import { useState } from 'react'
import { Button } from 'antd'
import {
  SaveOutlined,
  DeleteOutlined,
  UploadOutlined,
  SearchOutlined,
} from '@ant-design/icons'

export default function DeliveryActions({ fetchData, nextPageStockIn }) {
  return (
    <div className="flex items-center gap-2">
      <Button
        key="Reset"
        type="default"
        icon={<SaveOutlined />}
        size="middle"
        className="uppercase"
        color="default"
        variant="filled"
        style={{ backgroundColor: '#f0f0f0', borderColor: '#d9d9d9' }}
        onClick={nextPageStockIn}
      >
        STOCK IN (IQC)
      </Button>
      <Button
        key="Save"
        type="primary"
        icon={<SearchOutlined />}
        size="middle"
        className="uppercase"
        onClick={fetchData}
      >
        SEARCH
      </Button>
    </div>
  )
}
