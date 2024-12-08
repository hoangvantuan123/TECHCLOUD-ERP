import { useState, useMemo, useRef, useCallback } from 'react'
import { HotTable } from '@handsontable/react'
import { useNavigate } from 'react-router-dom'
import { registerAllModules } from 'handsontable/registry'
import 'handsontable/dist/handsontable.full.min.css'
import { SaveOutlined, DeleteOutlined } from '@ant-design/icons'
import { message, Button } from 'antd'
import { debounce } from 'lodash'
import { SHREmpInCheck } from '../../../features/users/SHREmpInCheck'
import { ERROR_MESSAGES, SUCCESS_MESSAGES } from '../../../utils/constants'

registerAllModules()

export default function AddUserSheetDrawer({ data: propData, onDataChange }) {
  const MAX_ROWS = 10000

  const colHeaders = [
    'Họ',
    'Tên',
    'Mã nhân viên',
    'Số CCCD',
    'Ngày vào',
    'Phân loại nhân viên',
    'Ngày sinh',
    'Xưởng',
    'Bộ phận',
    'Ghi chú',
  ]
  const navigate = useNavigate()
  const createEmptyData = () =>
    Array(20)
      .fill()
      .map(() => Array(colHeaders.length).fill(''))
  const [data, setData] = useState(propData || createEmptyData())
  const [rowStatus, setRowStatus] = useState(
    Array((propData && propData.length) || 20).fill('A'),
  )
  const [invalidColumns, setInvalidColumns] = useState(new Set())
  const requiredColumns = useMemo(() => [0, 1, 3, 4, 5], [])
  const hotTableRef = useRef(null)
  const isSampleRow = (row) => row.every((cell) => cell === '' || cell === null)
  const limitedData = data.slice(0, MAX_ROWS)

  const validateRowData = (row, rowIndex) => {
    const missingColumns = requiredColumns.filter(
      (colIndex) =>
        typeof row[colIndex] !== 'string' || row[colIndex].trim() === '',
    )
    if (missingColumns.length > 0) {
      missingColumns.forEach((colIndex) => {
        setInvalidColumns((prev) => new Set(prev.add(colIndex)))
      })
      return false
    }

    return row.some((cell) => typeof cell === 'string' && cell.trim() !== '')
  }

  const employeeTypes = {
    3059001: 'Official',
    3059002: 'Seasonal',
  }

  const employeeTypeValues = Object.values(employeeTypes)

  const handleSaveDebounced = useCallback(
    debounce(() => {
      const validData = data.filter((row, rowIndex) => {
        if (isSampleRow(row)) return false
        return validateRowData(row, rowIndex)
      })

      if (validData.length === 0) {
        message.error(ERROR_MESSAGES.ERROR_NULL_DATA)
        return
      }

      const xmlData = validData
        .map((row, index) => {
          const empTypeValue = row[5]
          let empTypeKey = ''

          for (const key in employeeTypes) {
            if (employeeTypes[key] === empTypeValue) {
              empTypeKey = key
              break
            }
          }

          const empTypeToUse = empTypeKey ? empTypeKey : '0'

          return `
          <DataBlock1>
            <WorkingTag>A</WorkingTag>
           <IDX_NO>${index + 1}</IDX_NO>
           <DataSeq>${index + 1}</DataSeq>
            <Status>0</Status>
            <Selected>0</Selected>
            <EmpFamilyName>${row[0]}</EmpFamilyName>  
            <EmpFirstName>${row[1]}</EmpFirstName>  
            <EmpName>${row[0]} ${row[1]} </EmpName> 
            <EmpSeq>0</EmpSeq>
            <EmpID>${row[2]}</EmpID>  
            <ResidID>${row[3]}</ResidID> 
            <EntDate>${row[4]}</EntDate>  
            <UMEmpType>${empTypeToUse}</UMEmpType> 
            <EmpChnName>${row[6]} </EmpChnName> 
            <EmpEngFirstName>${row[7]}</EmpEngFirstName> 
            <EmpEngLastName>${row[8]}</EmpEngLastName> 
            <Remark>${row[9]}</Remark> 
            <TABLE_NAME>DataBlock1</TABLE_NAME>
          </DataBlock1>
        `
        })
        .join('\n')

      const finalXml = `<?xml version="1.0" encoding="UTF-8"?>
    <Data>
      ${xmlData}
    </Data>`

      if (onDataChange) onDataChange(finalXml)
      const workingTag = ''
      SHREmpInCheck(xmlData, workingTag)
        .then((req) => {
          if (req.success === true) {
            message.success(SUCCESS_MESSAGES.RECORD_CREATED)
          } else {
            message.error(req.message)
          }
        })
        .catch((err) => {
          message.error(ERROR_MESSAGES.ERROR_FE)
        })
    }, 300),
    [data],
  )

  const handleAfterChange = (changes, source) => {
    if (changes && source !== 'loadData') {
      const updatedData = [...data]
      const updatedStatus = [...rowStatus]

      changes.forEach(([rowIndex, colIndex, oldValue, newValue]) => {
        if (newValue !== oldValue && updatedStatus[rowIndex] === 'A') {
          updatedStatus[rowIndex] = 'U'
        }
      })

      setRowStatus(updatedStatus)
      setData(updatedData)
    }
  }

  const handleAddRow = () => {
    const newRow = Array(colHeaders.length).fill('')
    setData((prevData) => [...prevData, newRow])
    setRowStatus((prevStatus) => [...prevStatus, 'A'])
  }

  const columns = Array(colHeaders.length).fill({})

  columns[5] = {
    type: 'dropdown',
    source: employeeTypeValues,
    validator: (value, callback) => {
      callback(value !== '')
    },
  }
  columns[4] = {
    type: 'date',
    dateFormat: 'YYYYMMDD',
    correctFormat: true,
    defaultDate: new Date().toLocaleDateString('en-US'),
    datePickerConfig: {
      firstDay: 0,
      showWeekNumber: true,
      disableDayFn(date) {
        return date.getDay() === 0 || date.getDay() === 6
      },
    },
  }

  const handleNavigateToDetail = () => {
    navigate(`/u/action=gen-info-1-2/from=view`)
  }

  return (
    <div className="h-screen overflow-auto p-3">
      <div className="group p-2 mb-2  bg-white border rounded-lg">
        <div className="flex gap-4">
          <Button onClick={handleNavigateToDetail}>Quay lại</Button>
          <Button
            type="default"
            onClick={handleSaveDebounced}
            icon={<SaveOutlined />}
            size="middle"
          >
            Lưu
          </Button>
        </div>
      </div>

      <HotTable
        ref={hotTableRef}
        data={limitedData}
        colHeaders={colHeaders}
        rowHeaders="A"
        stretchH="all"
        width="100%"
        height="auto"
        autoWrapRow
        autoWrapCol
        licenseKey="non-commercial-and-evaluation"
        contextMenu={{
          items: {
            remove_row: { name: 'Xóa Hàng', disabled: false },
            insert_row: { name: 'Thêm Hàng Mới', callback: handleAddRow },
            duplicate_row: { name: 'Sao Chép Hàng', disabled: true },
            insert_column: { name: 'Thêm Cột', disabled: true },
            remove_column: { name: 'Xóa Cột', disabled: true },
          },
        }}
        manualColumnResize
        autoColumnSize
        manualRowResize
        autoRowSize
        outsideClickDeselects
        persistentState={true}
        afterChange={handleAfterChange}
        columns={columns}
        afterGetColHeader={(col, TH) => {
          if (requiredColumns.includes(col)) {
            TH.style.color = 'red'
          } else {
            TH.style.color = ''
          }
        }}
      />
    </div>
  )
}
