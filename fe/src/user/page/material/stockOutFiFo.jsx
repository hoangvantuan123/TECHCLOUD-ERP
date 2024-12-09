import { useState, useCallback, useEffect, useRef, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { useParams } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import { Input, Space, Table, Typography, message, Tabs, Layout } from 'antd'
const { Title, Text } = Typography
import { FileTextOutlined } from '@ant-design/icons'
import { ArrowIcon } from '../../components/icons'
import dayjs from 'dayjs'
import { debounce } from 'lodash'
import { useNavigate } from 'react-router-dom'
import { encodeBase64Url } from '../../../utils/decode-JWT'
import CryptoJS from 'crypto-js'
import StockOutRequestActionsDetails from '../../components/actions/material/StockOutRequestActionsDetails'
import StockOutRequestQueryFiFo from '../../components/query/material/stockOutReqQueryFiFo'
import TableTransferStockOutFiFo from '../../components/table/material/tableTransferStockOutFifo'
import { GetITMSPDMMOutReqItemListWEB } from '../../../features/material/GetITMSPDMMOutReqItemListWEB'
import { SMaterialQRCheckStockOutFiFoWeb } from '../../../features/material/postCheckStockOutFiFo'
import ModalWaiting from '../../components/modal/material/modalWaiting'
import { CheckAllProceduresStockOutFiFo } from '../../../features/material/postCheckAllProceduresStockOutFiFo'
import SuccessSubmit from '../default/successSubmit'
import LoadSubmit from '../default/loadSubmit'
import { CompactSelection } from '@glideapps/glide-data-grid'

export default function StockOutRequestFiFo({ permissions, isMobile }) {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const { id } = useParams()
  /* SOS*/
  const workerRef = useRef(null)
  const [inputCode, setInputCode] = useState(null)
  const [inputBarCode, setInputBarCode] = useState(null)
  const [result, setResult] = useState(null)
  const [loadingSave, setLoadingSave] = useState(false)

  const bufferRef = useRef('')
  const [dataA, setDataA] = useState([])
  const dataRef = useRef(dataA)  /* DATA */
  const [modal2Open, setModal2Open] = useState(false)
  const [modal3Open, setModal3Open] = useState(false)
  const [modal4Open, setModal4Open] = useState(false)
  const [modal5Open, setModal5Open] = useState(false)
  const [error, setError] = useState(null)
  const [successMessage, setSuccessMessage] = useState(null)
  const [scanHistory, setScanHistory] = useState([])
  const dataRefSacenHistory = useRef(scanHistory) /* DATA */
  const [status, setStatus] = useState(false)
  const [filteredData, setFilteredData] = useState(null)
  const [selection, setSelection] = useState({
    columns: CompactSelection.empty(),
    rows: CompactSelection.empty(),
  })


  const [loading, setLoading] = useState(false)


  const [isOpenDetails, setIsOpenDetails] = useState(false)
  const secretKey = 'TEST_ACCESS_KEY'
  /*  */

  useEffect(() => {
    const savedState = localStorage.getItem('detailsStateStockOutFiFo')
    setIsOpenDetails(savedState === 'open')
  }, [])

  const handleToggle = (event) => {
    const isOpen = event.target.open
    setIsOpenDetails(isOpen)
    localStorage.setItem(
      'detailsStateStockOutFiFo',
      isOpen ? 'open' : 'closed',
    )
  }


  const decodeBase64Url = (base64Url) => {
    try {
      let base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/')
      const padding =
        base64.length % 4 === 0 ? '' : '='.repeat(4 - (base64.length % 4))
      return base64 + padding
    } catch (error) {
      throw new Error('Invalid Base64 URL')
    }
  }

  const decryptData = (encryptedToken) => {
    try {
      const base64Data = decodeBase64Url(encryptedToken)
      const bytes = CryptoJS.AES.decrypt(base64Data, secretKey)
      const decryptedData = bytes.toString(CryptoJS.enc.Utf8)
      return JSON.parse(decryptedData)
    } catch (error) {
      navigate(`/u/warehouse/material/stock-out-request`)
      return null
    }
  }

  const fetchDataA = async (outReqSeq) => {
    try {
      setLoading(true)
      const response = await GetITMSPDMMOutReqItemListWEB(outReqSeq)
      setDataA(response?.data || [])
    } catch (error) {
      setDataA([])
    } finally {
      setLoading(false)
    }
  }
  useEffect(() => {
    if (id) {
      const data = decryptData(id)
      console.log('data122', data)
      if (data) {
        setFilteredData(data)
        fetchDataA(data?.OutReqSeq)
      }
    }
  }, [id])


  /* SOS 2 */
  const addToScanHistory = useCallback((dataResSuccess, callback) => {
    const newLotNoFull = dataResSuccess?.LotNoFull?.trim().toLowerCase()
    const newBarcode = dataResSuccess?.Barcode?.trim().toLowerCase()

    setScanHistory((prevHistory) => {
      const isExist = prevHistory.some(
        (item) =>
          item.LotNoFull?.trim().toLowerCase() === newLotNoFull &&
          item.Barcode?.trim().toLowerCase() === newBarcode,
      )

      if (!isExist) {
        const updatedHistory = [
          ...prevHistory,
          {
            OutReqSeq: dataResSuccess?.OutReqSeq,
            OutReqItemSerl: dataResSuccess?.OutReqItemSerl,
            WorkOrderSeq: dataResSuccess?.WorkOrderSeq,
            WorkOrderSerl: dataResSuccess?.WorkOrderSerl,
            FactUnit: dataResSuccess?.FactUnit,
            FactUnitName: dataResSuccess?.FactUnitName,
            InWHSeq: dataResSuccess?.InWHSeq,
            InWHName: dataResSuccess?.InWHName,
            OutWHSeq: dataResSuccess?.OutWHSeq,
            OutWHName: dataResSuccess?.OutWHName,
            ItemSeq: dataResSuccess?.ItemSeq,
            UnitSeq: dataResSuccess?.UnitSeq,
            ItemNo: dataResSuccess?.ItemNo,
            LotNo: dataResSuccess?.LotNo,
            Qty: dataResSuccess?.Qty,
            DateCode: dataResSuccess?.DateCode,
            ReelNo: dataResSuccess?.ReelNo,
            Barcode: dataResSuccess?.Barcode,
            StockOutDate: dataResSuccess?.StockOutDate,
            LotNoFull: dataResSuccess?.LotNoFull,
            ReqQty: dataResSuccess?.ReqQty,
            EmpSeq: dataResSuccess?.EmpSeq,
          },
        ]
        callback()
        return updatedHistory
      }
      return prevHistory
    })
  }, [])

  const handleCheckBarcode = useCallback((barcode) => {
    const currentTableData = dataRef.current
    const currentScanHistory = dataRefSacenHistory.current

    workerRef.current.postMessage({
      type: 'CHECK_BARCODE',
      barcode,
      tableData: currentTableData,
      tableScanHistory: currentScanHistory,
    })
  }, [])


  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === 'Enter' && bufferRef.current.trim()) {
        const barcode = bufferRef.current.trim()
        handleCheckBarcode(barcode)
        setInputCode(barcode)
        bufferRef.current = ''
      } else if (e.key.length === 1) {
        bufferRef.current += e.key
      }
    }

    const handleFocus = () => setStatus(true)

    const handleBlur = () => setStatus(false)

    const handleClick = () => setStatus(true)

    window.addEventListener('keypress', handleKeyPress)
    window.addEventListener('focus', handleFocus)
    window.addEventListener('blur', handleBlur)
    document.addEventListener('click', handleClick)

    return () => {
      window.removeEventListener('keypress', handleKeyPress)
      window.removeEventListener('focus', handleFocus)
      window.removeEventListener('blur', handleBlur)
      document.removeEventListener('click', handleClick)
    }
  }, [])

  const debouncedCheckBarcode = useCallback(
    debounce(async (formData, resultMessage) => {
      const resSuccess = await SMaterialQRCheckStockOutFiFoWeb(formData)
      if (resSuccess.success) {
        const dataResSuccess = resSuccess.data[0]
        message.success(resultMessage)
        setInputBarCode(null)
        setModal2Open(false)
        setInputCode(null)
        addToScanHistory(dataResSuccess, () => {
          setDataA((prevData) =>
            prevData.map((item) =>
              item.ItemNo === formData.ItemNo
                ? {
                  ...item,
                  OutQty: item.OutQty + formData.Qty,
                  RemainQty: item.RemainQty - formData.Qty,
                }
                : item,
            ),
          )
        })
      } else {
        setModal2Open(true)
        setError(resSuccess?.message)
      }
    }, 100),
    [],
  )

  useEffect(() => {
    workerRef.current = new Worker(
      new URL('../../../workers/workeStockOutFiFo.js', import.meta.url),
    )

    workerRef.current.onmessage = async (event) => {
      const { success, message: resultMessage, data: resultData } = event.data
      if (success) {
        if (resultData) {
          const { itemNo, qty, lot, dc, reel, barcode, UnitSeq, ItemSeq,
            OutWHName, OutWHSeq, InWHName, InWHSeq, FactUnitName,
            FactUnit, WorkOrderSerl, WorkOrderSeq, OutReqItemSerl, OutReqSeq } =
            resultData

          const formData = {
            WorkingTag: 'A',
            Idx_no: '1',
            Status: '0',
            DataSeq: '1',
            Selected: '1',
            OutReqSeq: OutReqSeq,
            OutReqItemSerl: OutReqItemSerl,
            WorkOrderSeq: WorkOrderSeq,
            WorkOrderSerl: WorkOrderSerl,
            FactUnit: FactUnit,
            FactUnitName: FactUnitName,
            InWHSeq: InWHSeq,
            InWHName: InWHName,
            OutWHSeq: OutWHSeq,
            OutWHName: OutWHName,
            ItemSeq: ItemSeq,
            UnitSeq: UnitSeq,
            ItemNo: itemNo,
            LotNo: lot,
            Qty: qty,
            DateCode: dc,
            ReelNo: reel,
            Barcode: barcode
          }
          debouncedCheckBarcode(formData, resultMessage)
        }
      } else {
        setModal2Open(true)
        setError(resultMessage)
      }
    }
    return () => {
      workerRef.current.terminate()
      debouncedCheckBarcode.cancel()
    }
  }, [filteredData, debouncedCheckBarcode])

  useEffect(() => {
    dataRef.current = dataA
    dataRefSacenHistory.current = scanHistory
  }, [dataA, scanHistory])


  const createXmlDataCloseCheck = (data) => {
    return `
          <DataBlock1>
              <WorkingTag>A</WorkingTag>
              <IDX_NO>1</IDX_NO>
              <Status>0</Status>
              <DataSeq>1</DataSeq>
              <Selected>1</Selected>
              <TABLE_NAME>DataBlock1</TABLE_NAME>
              <IsChangedMst>1</IsChangedMst>
              <FactUnit>${data.FactUnit}</FactUnit>
              <Date>${data.StockOutDate}</Date>
              <ServiceSeq>3032</ServiceSeq>
              <MethodSeq>2</MethodSeq>
              <DtlUnitSeq>1</DtlUnitSeq>
          </DataBlock1>
      `
  }


  const createXmlCloseItemCheck = (row, index) => `
  <DataBlock2>
   <WorkingTag>A</WorkingTag>
    <IDX_NO>${index + 1}</IDX_NO>
    <DataSeq>${index + 1}</DataSeq>
    <Status>0</Status>
    <Selected>0</Selected>
    <ItemSeq>${row.ItemSeq}</ItemSeq>
    <FactUnit>${row.FactUnit}</FactUnit>
    <TABLE_NAME>DataBlock2</TABLE_NAME>
    <FactUnitOld>1</FactUnitOld>
    <DateOld>${row.StockOutDate}</DateOld>
    <ServiceSeq>3032</ServiceSeq>
    <MethodSeq>2</MethodSeq>
    <Date>${row.StockOutDate}</Date>
  </DataBlock2>
`

  const createXmlOutProcCheck = (data) => {
    return `
        <DataBlock1>
            <WorkingTag>A</WorkingTag>
    <IDX_NO>1</IDX_NO>
    <Status>0</Status>
    <DataSeq>1</DataSeq>
    <Selected>1</Selected>
    <TABLE_NAME>DataBlock1</TABLE_NAME>
    <IsChangedMst>1</IsChangedMst>
    <UseType>6044001</UseType>
    <IsOutSide>0</IsOutSide>
    <OutWHSeq />
    <InWHSeq>${data.InWHSeq}</InWHSeq>
    <MatOutSeq>0</MatOutSeq>
    <FactUnit>${data.FactUnit}</FactUnit>
    <MatOutNo />
    <MatOutDate>${data.StockOutDate}</MatOutDate>
    <EmpSeq>${data.EmpSeq}</EmpSeq>
    <MatOutType />
    <Remark />
        </DataBlock1>
    `
  }

  const createXmlOutProcItemCheck = (row, index) => `
  <DataBlock3>
   <WorkingTag>A</WorkingTag>
     <IDX_NO>${index + 1}</IDX_NO>
    <DataSeq>${index + 1}</DataSeq>
    <Status>0</Status>
    <Selected>0</Selected>
    <ReqQty>${row.ReqQty}</ReqQty>
    <Qty>${row.Qty}</Qty>
    <StdUnitQty>0</StdUnitQty>
    <Remark />
    <ItemLotNo>${row.LotNoFull}</ItemLotNo>
    <SerialNoFrom />
    <MatOutSeq></MatOutSeq>
    <OutItemSerl>0</OutItemSerl>
    <ItemSeq>${row.ItemSeq}</ItemSeq>
    <OutWHSeq>${row.OutWHSeq}</OutWHSeq>
    <InWHSeq>${row.InWHSeq}</InWHSeq>
    <UnitSeq>${row.UnitSeq}</UnitSeq>
    <WorkOrderSeq>${row.WorkOrderSeq}</WorkOrderSeq>
    <ConsgnmtCustSeq>0</ConsgnmtCustSeq>
    <OutReqSeq>${row.OutReqSeq}</OutReqSeq>
    <OutReqItemSerl>${row.OutReqItemSerl}</OutReqItemSerl>
    <PJTSeq>0</PJTSeq>
    <WBSSeq>0</WBSSeq>
    <WorkOrderSerl>${row.WorkOrderSerl}</WorkOrderSerl>
    <AlterRate>0</AlterRate>
    <TABLE_NAME>DataBlock3</TABLE_NAME>
  </DataBlock3>
`
  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault()
      setLoadingSave(true)
      setResult(null)
      setModal4Open(true)
      if (scanHistory.length === 0) {
        setLoadingSave(false)
        setModal2Open(true)
        setModal4Open(false)
        setResult(null)
        setError('Chưa có dữ liệu để gửi. Vui lòng quét dữ liệu trước khi gửi.')

        return
      }
      const xmlSCOMCloseCheckWEB = createXmlDataCloseCheck(scanHistory[0])
      const xmlSCOMCloseItemCheckWEB = scanHistory
        .map(createXmlCloseItemCheck)
        .join('\n')
      const xmlSPDMMOutProcCheckWEB = createXmlOutProcCheck(scanHistory[0])
      const xmlSPDMMOutProcItemCheckWEB = scanHistory.map(createXmlOutProcItemCheck).join('\n')

      try {
        const response = await CheckAllProceduresStockOutFiFo(scanHistory, {
          xmlSCOMCloseCheckWEB: xmlSCOMCloseCheckWEB,
          xmlSCOMCloseItemCheckWEB: xmlSCOMCloseItemCheckWEB,
          xmlSPDMMOutProcCheckWEB: xmlSPDMMOutProcCheckWEB,
          xmlSPDMMOutProcItemCheckWEB: xmlSPDMMOutProcItemCheckWEB,
        })

        setResult(response)
        if (response.success) {
          setModal4Open(false)
          setModal5Open(true)
          setSuccessMessage('Tất cả các dữ liệu đã được thực thi thành công!')
          handleRestFrom()
          navigate(`/u/warehouse/material/stock-out-request`)
          setScanHistory([])
        } else {
          setModal4Open(false)
          setModal2Open(true)
          setError(response.message)
        }
      } catch (error) {
        setModal4Open(false)
        setResult({ error: error.message })
        setModal2Open(true)
        setError(error.message)
      } finally {
        setLoadingSave(false)
      }
    },
    [filteredData, scanHistory],
  )

  const handleRestFrom = useCallback(
    async (e) => {
      e.preventDefault()
      if (scanHistory.length === 0) {
        setModal2Open(true)
        setError('Không có dữ liệu để reset! Vui lòng quét dữ liệu trước.')
        return
      }
      setScanHistory([])
      fetchDataA(dataA?.OutReqSeq)
      message.success('Reset form thành công!')
    },
    [filteredData, scanHistory],
  )


  const getSelectedRowIndices = () => {
    const selectedRows = selection.rows.items
    let indices = []

    selectedRows.forEach((range) => {
      const start = range[0]
      const end = range[1] - 1

      for (let i = start; i <= end; i++) {
        indices.push(i)
      }
    })

    return indices
  }

  const handleDelete = useCallback(
    async (e) => {
      e.preventDefault()

      const selectedRowIndices = getSelectedRowIndices()
      if (selectedRowIndices.length === 0) {
        setModal2Open(true)
        setError('Vui lòng chọn ít nhất một hàng để xóa.')
        return
      }
      if (scanHistory.length === 0) {
        setModal2Open(true)
        setError('Không có dữ liệu nào để xóa.')
        return
      }

      const remainingRows = scanHistory.filter(
        (row, index) => !selectedRowIndices.includes(index),
      )

      setScanHistory(remainingRows)
    },
    [scanHistory, selection],
  )

  return (
    <>
      <Helmet>
        <title>ITM - {t('Stock Out Request')}</title>
      </Helmet>
      <div className="bg-slate-50 p-3 h-screen overflow-hidden">
        <div className="flex flex-col gap-4 md:grid md:grid-cols-4 md:grid-rows-[auto_1fr] md:gap-4 h-full">
          <div className="col-start-1 col-end-5 row-start-1 w-full rounded-lg ">
            <div className="flex items-center justify-between mb-2">
              <Title level={4} className="mt-2 uppercase opacity-85 ">
                {t('Stock Out FIFO')}
              </Title>
              <StockOutRequestActionsDetails status={status} handleSubmit={handleSubmit} handleRestFrom={handleRestFrom} handleDelete={handleDelete} />
            </div>
            <details
              className="group p-2 [&_summary::-webkit-details-marker]:hidden border rounded-lg bg-white"
              open

            >
              <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-gray-900">
                <h2 className="text-xs font-medium flex items-center gap-2 text-blue-600 uppercase">
                  <FileTextOutlined />
                  {t('Giá trị')}
                </h2>
                <span className="relative size-5 shrink-0">
                  <ArrowIcon />
                </span>
              </summary>
              <div className="flex p-2 gap-4">
                <StockOutRequestQueryFiFo />
              </div>
            </details>
          </div>

          <div className="col-start-1 col-end-5 row-start-2 w-full h-full rounded-lg">
            <TableTransferStockOutFiFo sampleTableA={dataA} sampleTableB={scanHistory} setSelection={setSelection}
              selection={selection} />
          </div>
        </div>
        <ModalWaiting
          modal2Open={modal2Open}
          setModal2Open={setModal2Open}
          error={error}
        />
        <LoadSubmit setModal4Open={setModal4Open} modal4Open={modal4Open} />
        <SuccessSubmit
          setModal5Open={setModal5Open}
          modal5Open={modal5Open}
          successMessage={successMessage}
        />

      </div>
    </>
  )
}
