import { useState } from 'react'
import { Button } from 'antd'
import {
  SaveOutlined,
  DeleteOutlined,
  FileDoneOutlined,
  SearchOutlined,
} from '@ant-design/icons'

export default function StockOutRequestActions({
  nextPage,
  debouncedFetchSPDMMOutReqListQueryWeb,
}) {
  return (
    <div className="flex items-center gap-2">
      <Button
        key="Reset"
        type="default"
        icon={<FileDoneOutlined />}
        size="middle"
        className="uppercase"
        color="default"
        variant="filled"
        onClick={nextPage}
        style={{ backgroundColor: '#f0f0f0', borderColor: '#d9d9d9' }}
      >
        XỬ LÝ XUẤT KHO
      </Button>
      <Button
        key="Save"
        type="primary"
        icon={<SearchOutlined />}
        size="middle"
        onClick={debouncedFetchSPDMMOutReqListQueryWeb}
        className="uppercase"
      >
        SEARCH
      </Button>
    </div>
  )
}
