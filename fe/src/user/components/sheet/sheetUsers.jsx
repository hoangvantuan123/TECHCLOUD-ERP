import { useState, useMemo, useRef, useCallback } from 'react'
import { HotTable } from '@handsontable/react'
import { registerAllModules } from 'handsontable/registry'
import 'handsontable/dist/handsontable.full.min.css'
import { message, Button } from 'antd'
import { debounce } from 'lodash'
import { SUCCESS_MESSAGES, ERROR_MESSAGES } from '../../../utils/constants'

registerAllModules()

export default function SheetUsers({ data: propData, onDataChange }) {
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
    'EmpSeq',
  ]

  const initialData = () =>
    Array(200)
      .fill()
      .map(() => Array(colHeaders.length).fill('')) // Load first 200 rows as empty

  const [invalidColumns, setInvalidColumns] = useState(new Set())
  const [rowA, setRowA] = useState([])
  const [rowD, setRowD] = useState([])
  const [rowU, setRowU] = useState([])
  const [idOpen, setIdOpen] = useState(null)

  const requiredColumns = useMemo(() => [0, 1, 3, 4, 5], [])
  const hotTableRef = useRef(null)

  const mapPropDataToTableData = (propData) => {
    return propData.map((item) => [
      item.EmpFamilyName || '',
      item.EmpFirstName || '',
      item.EmpID || '',
      item.ResidID || '',
      item.EntDate || '',
      item.UMEmpTypeName || '',
      item.BirthDate || '',
      item.EmpChnName || '',
      item.EmpEngFirstName || '',
      item.Remark || '',
      item.EmpSeq || '',
    ])
  }

  const [data, setData] = useState(() => {
    const initialRows = propData.slice(0, 200)
    return initialRows.length > 0
      ? mapPropDataToTableData(initialRows)
      : initialData()
  })

  const [rowStatus, setRowStatus] = useState(() => {
    const initialRows = propData.slice(0, 200)
    return initialRows.length > 0
      ? initialRows.map((item, index) =>
          item.EmpSeq ? (index + 1).toString() : 'A',
        )
      : Array(200).fill('A')
  })

  const handleLoadMore = () => {
    const startIndex = data.length
    const newRows = propData.slice(startIndex, startIndex + 200)
    const newRowStatus = newRows.map((item, index) =>
      item.EmpSeq ? (startIndex + index + 1).toString() : 'A',
    )

    setData((prevData) => [...prevData, ...mapPropDataToTableData(newRows)])
    setRowStatus((prevStatus) => [...prevStatus, ...newRowStatus])
  }

  const handleAfterChange = (changes, source) => {
    if (changes && source !== 'loadData') {
      const updatedData = [...data]
      const updatedStatus = [...rowStatus]

      changes.forEach(([rowIndex, colIndex, oldValue, newValue]) => {
        if (newValue !== oldValue) {
          if (updatedStatus[rowIndex] !== 'A') {
            updatedStatus[rowIndex] = 'U'
          }
        }
      })

      setRowStatus(updatedStatus)
      setData(updatedData)
    }
  }

  const handleLogSelectedRows = () => {
    if (hotTableRef.current) {
      const hotInstance = hotTableRef.current.hotInstance
      const allData = hotInstance.getData()
      const allRowsWithStatus = allData.map((row, index) => ({
        data: row,
        status: rowStatus[index],
      }))

      const rowsWithStatusA = allRowsWithStatus.filter(
        (row) =>
          row.status === 'A' &&
          row.data.some((cell) => cell !== '' && cell !== null),
      )
      if (rowsWithStatusA.length > 0) {
        console.log('Rows with status A:', rowsWithStatusA)
      }

      const rowsWithStatusU = allRowsWithStatus.filter(
        (row) =>
          row.status === 'U' &&
          row.data.some((cell) => cell !== '' && cell !== null),
      )
      if (rowsWithStatusU.length > 0) {
        console.log('Rows with status U:', rowsWithStatusU)
      }

      const rowsWithOtherStatus = allRowsWithStatus.filter(
        (row) =>
          row.status !== 'A' &&
          row.status !== 'U' &&
          row.data.some((cell) => cell !== '' && cell !== null),
      )
      if (rowsWithOtherStatus.length > 0) {
        console.log('Rows with other status:', rowsWithOtherStatus)
      }
    }
  }

  const isSampleRow = (row) => row.every((cell) => cell === '' || cell === null)

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

      const newEntries = []
      const updatedEntries = []

      validData.forEach((row, index) => {
        if (rowStatus[index] === 'A') {
          newEntries.push(row)
        } else if (rowStatus[index] === 'U') {
          updatedEntries.push(row)
        }
      })

      console.log('New Entries:', newEntries)
      console.log('Updated Entries:', updatedEntries)

      if (onDataChange) {
        onDataChange({ newEntries, updatedEntries })
      }
    }, 300),
    [data, rowStatus],
  )

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
  columns[10] = {
    hidden: true,
  }

  return (
    <div className="overflow-auto p-3">
      <Button
        onClick={handleLogSelectedRows}
        type="primary"
        style={{ marginBottom: '10px' }}
      >
        Log Selected Rows
      </Button>
      <HotTable
        ref={hotTableRef}
        data={data}
        colHeaders={colHeaders}
        rowHeaders={rowStatus}
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
            open_form: {
              name: 'Mở Form',
              callback: (key, selectedRows) => {
                if (selectedRows.length > 0) {
                  const selected = hotTableRef.current.hotInstance.getSelected()
                  if (selected) {
                    const selectedRowIndex = selected[0][0]
                    const selectedRowData = data[selectedRowIndex]
                    if (selectedRowData) {
                      console.log('Dữ liệu hàng đã chọn:', selectedRowData[10])
                    }
                  }
                }
              },
            },
          },
        }}
        beforeRemoveRow={(index, amount) => {
          const deletedRows = []

          for (let i = 0; i < amount; i++) {
            const rowIndex = index + i
            deletedRows.push({
              rowData: data[rowIndex],
              rowStatus: rowStatus[rowIndex],
            })
          }
          setRowD(deletedRows)
        }}
        manualColumnResize
        autoColumnSize
        manualRowResize
        autoRowSize
        renderAllRows={false}
        outsideClickDeselects
        persistentState={true}
        afterChange={handleAfterChange}
        columns={columns}
        hiddenColumns={{
          columns: [10],
          indicators: true,
        }}
        afterGetColHeader={(col, TH) => {
          if (requiredColumns.includes(col)) {
            TH.style.color = 'red'
          } else {
            TH.style.color = ''
          }
        }}
      />
      <Button
        onClick={handleLoadMore}
        type="primary"
        style={{ marginTop: '10px' }}
      >
        Load More Rows
      </Button>
    </div>
  )
}
