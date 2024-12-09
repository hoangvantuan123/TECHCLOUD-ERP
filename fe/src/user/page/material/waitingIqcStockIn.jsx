import { useState, useEffect, useRef, useCallback } from 'react'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Helmet } from 'react-helmet'
import { Typography, message, Modal } from 'antd'
const { Title } = Typography
import 'moment/locale/vi'
import WaitingIqcStockInActions from '../../components/actions/material/waitingIqcStockInActions'
import TableTransferWaitingIqcStockIn from '../../components/table/material/tableTransferWaitingIqcStockIn'
import { FilterOutlined } from '@ant-design/icons'
import WaitingIqcStockInQuery from '../../components/query/material/waitingIqcStockInQuery'
import { ArrowIcon } from '../../components/icons'
import CryptoJS from 'crypto-js'
import ModalWaiting from '../../components/modal/material/modalWaiting'
import { SMaterialQRCheckWeb } from '../../../features/material/postSMaterialQRCheck'
import ErrorPage from '../../components/modal/default/errorPage'
import { GetSUGGetActiveDeliveryItem } from '../../../features/material/getSUGGetActiveDeliveryItem'
import debounce from 'lodash.debounce'
import { SUCCESS_MESSAGES, ERROR_MESSAGES } from '../../../utils/constants'
import { CheckAllProceduresStockIn } from '../../../features/material/postCheckAllProceduresStockIn'
import LoadSubmit from '../default/loadSubmit'
import SuccessSubmit from '../default/successSubmit'
import { CompactSelection } from '@glideapps/glide-data-grid'

export default function WaitingIqcStockIn({ permissions, isMobile }) {
  const { t } = useTranslation()
  const { id } = useParams()
  const workerRef = useRef(null)
  const inputCodeRef = useRef(null)
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate()
  const gridRef = useRef(null)
  const [inputCode, setInputCode] = useState(null)
  const [inputBarCode, setInputBarCode] = useState(null)
  const [result, setResult] = useState(null)
  const [loadingSave, setLoadingSave] = useState(false)
  const [data, setData] = useState([])
  const bufferRef = useRef('')
  const dataRef = useRef(data)
  const [modal2Open, setModal2Open] = useState(false)
  const [modal3Open, setModal3Open] = useState(false)
  const [modal4Open, setModal4Open] = useState(false)
  const [modal5Open, setModal5Open] = useState(false)
  
  const [error, setError] = useState(null)
  const [successMessage, setSuccessMessage] = useState(null)
  const [scanHistory, setScanHistory] = useState([])
  const dataRefSacenHistory = useRef(scanHistory)
  const [status, setStatus] = useState(false)
  const [filteredData, setFilteredData] = useState(null)
  const [YYWW, setYYWW] = useState(null)
  const [YYYYMM, setYYYYMM] = useState(null)
  const secretKey = 'TEST_ACCESS_KEY'
  const [selection, setSelection] = useState({
    columns: CompactSelection.empty(),
    rows: CompactSelection.empty(),
  })


  const [isOpenDetails, setIsOpenDetails] = useState(false)

  useEffect(() => {
    const savedState = localStorage.getItem('detailsStateIqc')
    setIsOpenDetails(savedState === 'open')
  }, [])

  const handleToggle = (event) => {
    const isOpen = event.target.open
    setIsOpenDetails(isOpen)
    localStorage.setItem('detailsStateIqc', isOpen ? 'open' : 'closed')
  }

  const Format = useCallback((date) => {
    const d = new Date(date)
    const year = d.getFullYear()
    const month = String(d.getMonth() + 1).padStart(2, '0')
    const day = String(d.getDate()).padStart(2, '0')
    return `${year}${month}${day}`
  }, [])

  const DateIn = Format(new Date())

  const fetchDeliveryData = async (delvNo, purchaseType) => {
    try {
      setLoading(true)
      const response = await GetSUGGetActiveDeliveryItem(delvNo, purchaseType)
      setData(response?.data || [])
    } catch (error) {
      setData([])
    } finally {
      setLoading(false)
    }
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
      navigate(`/u/warehouse/material/delivery-list`)
      setModal3Open(true)
      return null
    }
  }

  useEffect(() => {
    if (id) {
      const data = decryptData(id)
      if (data) {
        setFilteredData(data)
        fetchDeliveryData(data?.DelvNo, data?.PurchaseType)
      }
    }
  }, [id])

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
            SMImpKind: dataResSuccess?.SMImpKind,
            ItemNo: dataResSuccess?.ItemNo,
            LotNo: dataResSuccess?.LotNo,
            Qty: dataResSuccess?.Qty,
            DateCode: dataResSuccess?.DateCode,
            ReelNo: dataResSuccess?.ReelNo,
            Barcode: dataResSuccess?.Barcode,
            ItemSeq: dataResSuccess?.ItemSeq,
            WHSeq: dataResSuccess?.WHSeq,
            WHName: dataResSuccess?.WHName,
            CreateDate: dataResSuccess?.CreateDate,
            RegDate: dataResSuccess?.RegDate,
            YYWW: dataResSuccess?.YYWW,
            YYMM: dataResSuccess?.YYMM,
            YYMMDD: dataResSuccess?.YYMMDD,
            InvoiceNo: dataResSuccess?.InvoiceNo,
            PermitSerl: dataResSuccess?.PermitSerl,
            PermitSeq: dataResSuccess?.PermitSeq,
            EmpSeq: dataResSuccess?.EmpSeq,
            EmpName: dataResSuccess?.EmpName,
            DeptSeq: dataResSuccess?.DeptSeq,
            DeptName: dataResSuccess?.DeptName,
            CurrSeq: dataResSuccess?.CurrSeq,
            CurrName: dataResSuccess?.CurrName,
            ExRate: dataResSuccess?.ExRate,
            Price: dataResSuccess?.Price,
            CurAmt: dataResSuccess?.CurAmt,
            DomPrice: dataResSuccess?.DomPrice,
            DomAmt: dataResSuccess?.DomAmt,
            LotNoFull: dataResSuccess?.LotNoFull,
            StdUnitSeq: dataResSuccess?.StdUnitSeq,
            STDUnitName: dataResSuccess?.STDUnitName,
            UnitSeq: dataResSuccess?.UnitSeq,
            UnitName: dataResSuccess?.UnitName,
            CustSeq: dataResSuccess?.CustSeq,
            CustName: dataResSuccess?.CustName,
            ItemName: dataResSuccess?.ItemName,
            Spec: dataResSuccess?.Spec,
            DateIn: dataResSuccess?.DateIn,
            StdQty: dataResSuccess?.StdQty,
            FromAmt: dataResSuccess?.FromAmt,
            FromVAT: dataResSuccess?.FromVAT,
            BizUnit: dataResSuccess?.BizUnit,
            SMImpKindName: dataResSuccess?.SMImpKindName,
            PermitNo: dataResSuccess?.PermitNo,
          },
        ]
        callback()
        return updatedHistory
      }
      return prevHistory
    })
  }, [])

  const debouncedCheckBarcode = useCallback(
    debounce(async (formData, resultMessage) => {
      const resSuccess = await SMaterialQRCheckWeb(formData)
      if (resSuccess.success) {
        const dataResSuccess = resSuccess.data[0]
        message.success(resultMessage)
        setInputBarCode(null)
        setModal2Open(false)
        setInputCode(null)
        setYYWW(dataResSuccess?.YYWW)
        setYYYYMM(dataResSuccess?.YYMM)

        addToScanHistory(dataResSuccess, () => {
          setData((prevData) =>
            prevData.map((item) =>
              item.ItemNo === formData.itemNo
                ? {
                    ...item,
                    OkQty: item.OkQty + formData.qty,
                    RemainQty: item.RemainQty - formData.qty,
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
    [addToScanHistory],
  )

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
    workerRef.current = new Worker(
      new URL('../../../workers/workerWatingIqcStockIn.js', import.meta.url),
    )

    workerRef.current.onmessage = async (event) => {
      const { success, message: resultMessage, data: resultData } = event.data
      if (success) {
        if (resultData) {
          const { itemNo, qty, lot, dc, reel, barcode, permitSerl, permitSeq } =
            resultData

          const formData = {
            workingTag: 'A',
            idx_no: '1',
            status: '0',
            dataSeq: '1',
            selected: '1',
            permitSeq: permitSeq,
            permitSerl: permitSerl,
            bizUnit: filteredData?.BizUnit,
            bizUnitName: filteredData?.BizUnitName,
            sMImpKind: filteredData?.ImpType,
            sMImpKindName: filteredData?.PurchaseType,
            itemNo: itemNo,
            lotNo: lot,
            qty: qty,
            dateCode: dc,
            reelNo: reel,
            barcode: barcode,
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
    dataRef.current = data
    dataRefSacenHistory.current = scanHistory
  }, [data, scanHistory])

  const handleInputChange = (e) => {
    bufferRef.current = e.target.value
    setInputCode(e.target.value)
  }

  /* SAVE */
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
              <BizUnit>${data.BizUnit}</BizUnit>
              <Date>${DateIn}</Date>
              <DeptSeq>${data.DeptSeq}</DeptSeq>
              <ServiceSeq>4492</ServiceSeq> 
              <MethodSeq>2</MethodSeq>
              <DtlUnitSeq>1</DtlUnitSeq>
          </DataBlock1>
      `
  }
  const createXmlDataMasterCheck = (data) => {
    return `
          <DataBlock1>
    <WorkingTag>A</WorkingTag>
    <IDX_NO>1</IDX_NO>
    <Status>0</Status>
    <DataSeq>1</DataSeq>
    <Selected>1</Selected>
    <TABLE_NAME>DataBlock1</TABLE_NAME>
    <IsChangedMst>1</IsChangedMst>
    <DelvNo /> 
    <BLNo /> 
    <BizUnit>${data[0].BizUnit}</BizUnit> 
    <BizUnitName>${data[0].BizUnitName}</BizUnitName>
    <SMImpKind>${data[0].SMImpKind}</SMImpKind>
    <SMImpKindName>${data[0].SMImpKindName}</SMImpKindName> 
    <CustSeq>${data[0].CustSeq}</CustSeq> 
    <CustName>${data[0].CustName}</CustName> 
    <PermitNo>${data[0].PermitNo}</PermitNo>
    <DelvSeq>0</DelvSeq> 
    <DelvDate>${data[0].DateIn}</DelvDate>
    <EmpSeq>${data[0].EmpSeq}</EmpSeq>
    <EmpName>${data[0].EmpName}</EmpName>
    <DeptSeq>${data[0].DeptSeq}</DeptSeq>
    <DeptName>${data[0].DeptName}</DeptName>
    <CurrSeq>${data[0].CurrSeq}</CurrSeq>
    <CurrName>${data[0].CurrName}</CurrName>
    <ExRate>${data[0].ExRate}</ExRate>
    <Remark>${data[0].InvoiceNo}</Remark>
    <IsPJT>0</IsPJT>
  </DataBlock1>
      `
  }

  const createXmlDataBlock = (row, index) => `
  <DataBlock2>
    <WorkingTag>A</WorkingTag>
    <IDX_NO>${index + 1}</IDX_NO>
    <DataSeq>${index + 1}</DataSeq>
    <Status>0</Status>
    <Selected>0</Selected>
    <TABLE_NAME>DataBlock2</TABLE_NAME>
    <ServiceSeq>4492</ServiceSeq> 
    <MethodSeq>2</MethodSeq>
    <BizUnit>${row?.BizUnit}</BizUnit> 
    <Date>${row?.DateIn}</Date>
    <DeptSeq>${row?.DeptSeq}</DeptSeq> 
    <BizUnitOld>${row?.BizUnit}</BizUnitOld>
    <DateOld>${row?.DateIn}</DateOld> 
    <DeptSeqOld>${row?.DeptSeq}</DeptSeqOld> 
  </DataBlock2>
`

  const createXmlDataBlock2 = (row, index) => `
    <DataBlock2>
    <WorkingTag>A</WorkingTag>
    <IDX_NO>${index + 1}</IDX_NO>
    <DataSeq>${index + 1}</DataSeq>
    <Status>0</Status>
    <Selected>0</Selected>
    <PJTSeq>0</PJTSeq>
    <WBSSeq>0</WBSSeq>
    <ItemName>${row?.ItemName}</ItemName>
    <ItemNo>${row?.ItemNo}</ItemNo>
    <Spec>${row?.Spec}</Spec>
    <MakerName />
    <MakerSeq>0</MakerSeq>
    <UnitName>${row?.UnitName}</UnitName>
    <Qty>${row?.Qty}</Qty>
    <Price>${row?.Price}</Price>
    <CurAmt>${row?.CurAmt}</CurAmt>
    <DomAmt>${row?.DomAmt}</DomAmt>
    <WHName>${row?.WHName}</WHName>
    <LotNo>${row?.LotNo}</LotNo>
    <FromSerlNo />
    <ToSerlNo />
    <ProdDate />
    <STDUnitName>${row?.STDUnitName}</STDUnitName>
    <STDQty>${row?.StdQty}</STDQty>
    <DelvSerl />
    <ItemSeq>${row?.ItemSeq}</ItemSeq>
    <UnitSeq>${row?.UnitSeq}</UnitSeq>
    <STDUnitSeq>${row?.StdUnitSeq}</STDUnitSeq>
    <AccName />
    <OppAccName />
    <WHSeq>${row?.WHSeq}</WHSeq>
    <IsQtyChange />
    <Remark />
    <Memo1 />
    <Memo2 />
    <Memo3 />
    <Memo4 />
    <Memo5 />
    <Memo6 />
    <Memo7>0</Memo7>
    <Memo8>0</Memo8>
    <TABLE_NAME>DataBlock2</TABLE_NAME>
    <BizUnit>${row?.BizUnit}</BizUnit>
    <DelvDate>${row?.DateIn}</DelvDate>
    <DelvSeq></DelvSeq>
  </DataBlock2>

`
  const createXmlDataBlock3 = (row, index) => `
   <DataBlock1>
    <WorkingTag>A</WorkingTag>
    <IDX_NO>${index + 1}</IDX_NO>
    <DataSeq>${index + 1}</DataSeq>
    <Status>0</Status>
    <Selected>0</Selected> 
    <Spec>${row?.Spec}</Spec>
    <CustSeq>${row?.CustSeq}</CustSeq>
    <Qty>${row?.Qty}</Qty>
    <LotNo>${row?.LotNoFull}</LotNo>
    <CreateDate>${row?.CreateDate}</CreateDate>
    <ItemSeq>${row?.ItemSeq}</ItemSeq>
    <UnitSeq>${row?.UnitSeq}</UnitSeq>
    <ItemSeqOld>0</ItemSeqOld>
    <LotNoOLD/>
    <TABLE_NAME>DataBlock1</TABLE_NAME> 
    <RegDate>${row?.RegDate}</RegDate>
    <InNo>${row?.InvoiceNo}</InNo>
    <SupplyCustSeq>${row?.CustSeq} </SupplyCustSeq>
  </DataBlock1>
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
      const xmlForCloseCheck = createXmlDataCloseCheck(filteredData)
      const xmlForCloseItemCheck = scanHistory
        .map(createXmlDataBlock)
        .join('\n')
      const xmlForMasterCheck = createXmlDataMasterCheck(scanHistory)
      const xmlForSheetCheck = scanHistory.map(createXmlDataBlock2).join('\n')
      const xmlForLotNoMasterCheck = scanHistory
        .map(createXmlDataBlock3)
        .join('\n')

      try {
        const response = await CheckAllProceduresStockIn(scanHistory, {
          closeCheckXML: xmlForCloseCheck,
          closeItemCheckXML: xmlForCloseItemCheck,
          masterCheckXML: xmlForMasterCheck,
          sheetCheckXML: xmlForSheetCheck,
          sheetLotNoMasterCheckXML: xmlForLotNoMasterCheck,
        })

        setResult(response)
        if (response.success) {
          setModal4Open(false)
          setModal5Open(true)
          setSuccessMessage('Tất cả các dữ liệu đã được thực thi thành công!')
          setScanHistory([])
          fetchDeliveryData(filteredData?.DelvNo, filteredData?.PurchaseType)
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

  const handleRestFrom = useCallback(
    async (e) => {
      e.preventDefault()
      if (scanHistory.length === 0) {
        setModal2Open(true)
        setError('Không có dữ liệu để reset! Vui lòng quét dữ liệu trước.')
        return
      }
      setScanHistory([])
      fetchDeliveryData(filteredData?.DelvNo, filteredData?.PurchaseType)
      message.success('Reset form thành công!')
    },
    [filteredData, scanHistory],
  )

  const handleUploadExcel = useCallback(async (e) => {
    e.preventDefault()
    setModal2Open(true)
    setError('Chức năng đang trong quá trình phát triển?')
  }, [])

  return (
    <>
      <Helmet>
        <title>ITM - {t('Waiting Iqc Stock In')}</title>
      </Helmet>

      <div className="bg-slate-50 p-3 h-screen overflow-hidden">
        <div className="flex flex-col gap-4 md:grid md:grid-cols-4 md:grid-rows-[auto_1fr] md:gap-4 h-full">
          <div className="col-start-1 col-end-5 row-start-1 w-full rounded-lg ">
            <div className="flex items-center justify-between mb-2">
              <Title level={4} className="mt-2 uppercase opacity-85">
                Waiting Iqc Stock In
              </Title>
              <WaitingIqcStockInActions
                status={status}
                handleSubmit={handleSubmit}
                handleDelete={handleDelete}
                handleRestFrom={handleRestFrom}
                handleUploadExcel={handleUploadExcel}
              />
            </div>
            <details
              className="group p-2 [&_summary::-webkit-details-marker]:hidden border rounded-lg bg-white"
              open
            >
              <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-gray-900">
                <h2 className="text-xs font-medium flex items-center gap-2 text-blue-600 uppercase">
                  <FilterOutlined />
                  {t('Điều kiện truy vấn')}
                </h2>
                <span className="relative size-5 shrink-0">
                  <ArrowIcon />
                </span>
              </summary>
              <div className="flex p-2 gap-4">
                <WaitingIqcStockInQuery
                  handleCheckBarcode={handleCheckBarcode}
                  inputBarCode={inputBarCode}
                  setInputBarCode={setInputBarCode}
                  filteredData={filteredData}
                  YYWW={YYWW}
                  YYYYMM={YYYYMM}
                  bufferRef={bufferRef}
                  handleInputChange={handleInputChange}
                />
              </div>
            </details>
          </div>

          <div className="col-start-1 col-end-5 row-start-2 w-full h-full rounded-lg  overflow-auto">
            <TableTransferWaitingIqcStockIn
              sampleTableA={data}
              sampleTableB={scanHistory}
              setSelection={setSelection}
              selection={selection}
            />
          </div>
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
      <ErrorPage
        modal3Open={modal3Open}
        setModal3Open={setModal3Open}
        pathRouter="/u/warehouse/material/delivery-list"
      />
    </>
  )
}
