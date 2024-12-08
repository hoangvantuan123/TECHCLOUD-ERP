import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { HotTable } from '@handsontable/react'
import { registerAllModules } from 'handsontable/registry'
import 'handsontable/dist/handsontable.full.min.css'
import * as XLSX from 'xlsx'
import Papa from 'papaparse'
import { message, Button, Spin } from 'antd'
import { PostAllDataEpuw } from '../../../features/unpacking/postAllDataEtcpcb'
import Spinner from '../../page/default/load'
import BG from '../../../assets/ItmLogo.png'
import {
  ERROR_MESSAGES,
  SUCCESS_MESSAGES,
  WARNING_MESSAGES,
} from '../../../utils/constants'

registerAllModules()

export default function SheetViewEpuw() {
  const CHUNK_SIZE = 200
  const navigate = useNavigate()
  const [data, setData] = useState([])
  const [allData, setAllData] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [currentChunk, setCurrentChunk] = useState(1)

  const handleFileUpload = (e) => {
    const file = e.target.files[0]
    if (!file) return

    setIsLoading(true)
    const extension = file.name.split('.').pop().toLowerCase()
    const handlerMap = {
      csv: handleCSVUpload,
      xlsx: handleExcelUpload,
      xls: handleExcelUpload,
    }

    const handler = handlerMap[extension]
    if (handler) {
      handler(file)
    } else {
      message.error(ERROR_MESSAGES.ERROR_CSV_EXCEL)
      setIsLoading(false)
    }
  }

  const handleExcelUpload = (file) => {
    const reader = new FileReader()
    reader.onload = (e) => {
      const workbook = XLSX.read(e.target.result, { type: 'array' })
      const sheet = workbook.Sheets[workbook.SheetNames[0]]
      const sheetData = XLSX.utils.sheet_to_json(sheet, {
        header: 1,
        raw: true,
      })

      setAllData(sheetData)
      setData(sheetData.slice(0, CHUNK_SIZE))
      setIsLoading(false)
    }
    reader.onerror = () => {
      message.error(ERROR_MESSAGES.ERROR_XLSX)
      setIsLoading(false)
    }
    reader.readAsArrayBuffer(file)
  }

  const handleCSVUpload = (file) => {
    Papa.parse(file, {
      complete: ({ data }) => {
        setAllData(data)
        setData(data.slice(0, CHUNK_SIZE))
        setIsLoading(false)
      },
      error: () => {
        message.error(ERROR_MESSAGES.ERROR_CSV)
        setIsLoading(false)
      },
      header: false,
      skipEmptyLines: true,
    })
  }

  const loadMoreData = () => {
    const nextChunk = currentChunk + 1
    const newData = allData.slice(0, nextChunk * CHUNK_SIZE)
    setData(newData)
    setCurrentChunk(nextChunk)
  }
  const exportToFile = (format) => {
    let blob, link
    switch (format) {
      case 'csv':
        blob = new Blob([Papa.unparse(allData)], {
          type: 'text/csv;charset=utf-8;',
        })
        link = document.createElement('a')
        link.download = 'data.csv'
        break
      case 'json':
        blob = new Blob([JSON.stringify(allData)], { type: 'application/json' })
        link = document.createElement('a')
        link.download = 'data.json'
        break
      case 'xlsx':
        const ws = XLSX.utils.aoa_to_sheet(allData)
        const wb = XLSX.utils.book_new()
        XLSX.utils.book_append_sheet(wb, ws, 'Sheet1')
        XLSX.writeFile(wb, 'data.xlsx')
        return message.success(SUCCESS_MESSAGES.XLSX_DATA)
    }
    if (blob && link) {
      link.href = URL.createObjectURL(blob)
      link.click()
    }
  }

  const sendDataToServer = async () => {
    if (allData.length === 0) {
      message.warning(WARNING_MESSAGES.DATA_WARNING)
      return
    }

    const loadingMessage = message.loading(SUCCESS_MESSAGES.DATA_LOAD, 0)
    try {
      const response = await PostAllDataEpuw(allData)
      loadingMessage()
      if (response.success) {
        message.success(SUCCESS_MESSAGES.RECORD_CREATED)
        setAllData([])
        setData([])
        onClickBlackHistory()
      } else {
        message.error(ERROR_MESSAGES.INVALID_DATA)
      }
    } catch (error) {
      loadingMessage()
      message.error(ERROR_MESSAGES.INVALID_DATA)
    }
  }

  const onClickBlackHistory = () => {
    navigate(`/u/action=data-1-2/db=ETC_PCB_UNPACKING_WEB`)
    setAllData([])
  }

  return (
    <div className="w-full h-screen overflow-auto bg-slate-50 p-3">
      <Button type="text" onClick={onClickBlackHistory} className="mb-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4 mr-2"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 19l-7-7 7-7"
          />
        </svg>
        ETC PCB UNPACKING WEB
      </Button>
      <div className="flex justify-between mb-2">
        <input
          type="file"
          accept=".xlsx, .xls, .csv"
          onChange={handleFileUpload}
          className="border rounded-lg p-2 cursor-pointer"
        />
        <div className="flex items-center gap-3">
          <Button onClick={sendDataToServer} size="large">
            Import Data
          </Button>
          <Button onClick={() => exportToFile('csv')} size="large">
            Export to CSV
          </Button>
          <Button onClick={() => exportToFile('json')} size="large">
            Export to JSON
          </Button>
          <Button onClick={() => exportToFile('xlsx')} size="large">
            Export to Excel
          </Button>
        </div>
      </div>
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          {data.length === 0 ? (
            <>
              <div className="grid h-screen place-content-center items-center  justify-center bg-white">
                <img src={BG} className="  w-96  opacity-60 h-auto " />
              </div>
            </>
          ) : (
            <>
              {' '}
              <HotTable
                data={data}
                rowHeaders
                colHeaders
                height="auto"
                stretchH="all"
                autoWrapRow
                autoWrapCol
                licenseKey="non-commercial-and-evaluation"
                contextMenu
                manualColumnResize
                autoColumnSize
                manualRowResize
                autoRowSize
                outsideClickDeselects
              />
              {currentChunk * CHUNK_SIZE < allData.length && (
                <div className="flex justify-center mt-4">
                  <Button
                    onClick={loadMoreData}
                    className="p-2 bg-blue-500 text-white rounded"
                  >
                    Tải thêm dữ liệu
                  </Button>
                </div>
              )}
            </>
          )}
        </>
      )}
    </div>
  )
}
