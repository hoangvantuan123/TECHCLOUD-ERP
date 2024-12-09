import { useState, useCallback, useEffect, useRef, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { Helmet } from 'react-helmet'
import { Input, notification, Table, Typography, Alert, Spin, Layout } from 'antd'
const { Title, Text } = Typography
import { FilterOutlined, LoadingOutlined } from '@ant-design/icons'
import { ArrowIcon } from '../../components/icons'
import dayjs from 'dayjs'
import { GetCodeHelpCombo } from '../../../features/codeHelp/getCodeHelpCombo'
import { debounce } from 'lodash'
import { useNavigate } from 'react-router-dom'
import { encodeBase64Url } from '../../../utils/decode-JWT'
import CryptoJS from 'crypto-js'
import StockOutRequestQuery from '../../components/query/material/stockOutReqQuery'
import StockOutRequestActions from '../../components/actions/material/StockOutRequestActions'
import TableStockOutRequest from '../../components/table/material/tableStockOutRequest'
import CodeHelpStockOut1 from '../../components/modal/material/codeHelpStockOut1'
import CodeHelpStockOut2 from '../../components/modal/material/codeHelpStockOut2'
import CodeHelpStockOut3 from '../../components/modal/material/codeHelpStockOut3'
import { SPDMMOutReqListQueryWeb } from '../../../features/material/postStockOutList'
import { GetCodeHelp } from '../../../features/codeHelp/getCodeHelp'
import { CompactSelection } from '@glideapps/glide-data-grid'
export default function StockOutRequest({ permissions, isMobile }) {
  const { t } = useTranslation()
  const gridRef = useRef(null)
  const navigate = useNavigate()
  /*OutReqSeq
   */
  const [loading, setLoading] = useState(false)
  const [loadingA, setLoadingA] = useState(null)

  const [errorA, setErrorA] = useState(false)
  const [data, setData] = useState([])
  const [dataUnit, setDataUnit] = useState([])
  const [minorName, setMinorName] = useState([])
  const [minorName2, setMinorName2] = useState([])
  const [formData, setFormData] = useState(dayjs().startOf('month') || '')
  const [toDate, setToDate] = useState(dayjs())
  const [bizUnit, setBizUnit] = useState(4)
  const [factUnit, setFactUnit] = useState('')
  const [progStatus, setProgStatus] = useState('')
  const [useType, setUseType] = useState('')
  const [keyPath, setKeyPath] = useState(null)
  const formatDate = useCallback((date) => date.format('YYYYMMDD'), '')
  const [isMinusClicked, setIsMinusClicked] = useState(false)
  const [lastClickedCell, setLastClickedCell] = useState(null)
  const [clickedRowData, setClickedRowData] = useState(null)
  const [gridData, setGridData] = useState([])
  const [isOpenDetails, setIsOpenDetails] = useState(false)
  /* CodeHelp */
  const [modalVisible1, setModalVisible1] = useState(false)
  const [data1, setData1] = useState([])
  const [data2, setData2] = useState([])
  const [data3, setData3] = useState([])
  const [modalVisible2, setModalVisible2] = useState(false)
  const [modalVisible3, setModalVisible3] = useState(false)
  const [loadingCodeHelp, setLoadingCodeHelp] = useState(false)
  const [conditionSeq, setConditionSeq] = useState(1)
  const [subConditionSql, setSubConditionSql] = useState(1)
  const [keyword, setKeyword] = useState('')
  const [deptName, setDeptName] = useState('')
  const [deptSeq, setDeptSeq] = useState('')
  const [empName, setEmpName] = useState('')
  const [empSeq, setEmpSeq] = useState('')
  const [custSeq, setCustSeq] = useState('')
  const [custName, setCustName] = useState('')
  const [prodPlanNo, setProdPlanNo] = useState('')
  const [workOrderNo, setWorkOrderNo] = useState('')
  const [prodReqNo, setProdReqNo] = useState('')
  const [outReqNo, setOutReqNo] = useState('')
  const [selection, setSelection] = useState({
    columns: CompactSelection.empty(),
    rows: CompactSelection.empty(),
  })
  const [selection2, setSelection2] = useState({
    columns: CompactSelection.empty(),
    rows: CompactSelection.empty(),
  })
  const [selection3, setSelection3] = useState({
    columns: CompactSelection.empty(),
    rows: CompactSelection.empty(),
  })

  useEffect(() => {
    const savedState = localStorage.getItem('detailsStateStockOut')
    setIsOpenDetails(savedState === 'open')
  }, [])

  const handleToggle = (event) => {
    const isOpen = event.target.open
    setIsOpenDetails(isOpen)
    localStorage.setItem('detailsStateStockOut', isOpen ? 'open' : 'closed')
  }

  let loadingNotification;

  const fetchSPDMMOutReqListQueryWeb = async () => {
    setLoadingA(true);


    try {
      const formA = {
        IsChangedMst: '1',
        FactUnit: factUnit,
        ReqDate: formData ? formatDate(formData) : '',
        ReqDateTo: toDate ? formatDate(toDate) : '',
        OutReqNo: outReqNo,
        UseType: useType,
        DeptName: '',
        DeptSeq: deptSeq,
        EmpSeq: empSeq,
        EmpName: '',
        CustSeq: custSeq,
        CustName: '',
        ProgStatus: progStatus,
        ProdPlanNo: prodPlanNo,
        WorkOrderNo: workOrderNo,
        ProdReqNo: prodReqNo,
      };

      const response = await SPDMMOutReqListQueryWeb(formA);
      const fetchedData = response?.data || [];
      setData(fetchedData);

      /*  notification.destroy();
 
       if (fetchedData.length > 0) {
         notification.success({
           message: 'Thành công',
           description: 'Dữ liệu đã được tải thành công.',
         });
       } else {
         notification.success({
           message: 'Thành công',
           description: 'Không có dữ liệu phù hợp được tìm thấy.',
         });
       } */

    } catch (error) {
      setErrorA(true);

      notification.destroy();

      notification.error({
        message: 'Lỗi',
        description: 'Có lỗi xảy ra khi tải dữ liệu.',
      });
    } finally {
      setLoadingA(false);
    }
  };


  const fetchCodehelpData1 = useCallback(async () => {
    setLoading(true)
    try {
      const response = await GetCodeHelp(
        'Q',
        6,
        10010,
        1,
        deptName,
        '',
        '',
        '',
        '',
        conditionSeq,
        1,
        100000,
        subConditionSql,
        '1',
        0,
        0,
        0,
        0,
        0,
        18770,
      )
      setData1(response?.data || [])
    } catch (error) {
      setData1([])
    } finally {
      setLoading(false)
    }
  }, [conditionSeq, subConditionSql, deptName])

  const fetchCodehelpData2 = useCallback(async () => {
    setLoading(true)
    try {
      const response = await GetCodeHelp(
        'Q',
        6,
        10009,
        1,
        keyword,
        '',
        '',
        '',
        '',
        conditionSeq,
        1,
        100000,
        subConditionSql,
        '1',
        0,
        0,
        0,
        0,
        0,
        18770,
      )
      setData2(response?.data || [])
    } catch (error) {
      setData2([])
    } finally {
      setLoading(false)
    }
  }, [conditionSeq, subConditionSql, keyword])
  const fetchCodehelpData3 = useCallback(async () => {
    setLoading(true)
    try {
      const response = await GetCodeHelp(
        'Q',
        6,
        17071,
        1,
        keyword,
        '',
        '',
        '',
        '',
        conditionSeq,
        1,
        100000,
        'SMCustStatus=2004001',
        '1',
        0,
        0,
        0,
        0,
        0,
        18770,
      )
      setData3(response?.data || [])
    } catch (error) {
      setData3([])
    } finally {
      setLoading(false)
    }
  }, [conditionSeq, subConditionSql, keyword])

  const fetchCodeHelpData = useCallback(async () => {
    setLoading(true)
    try {
      const [codeHelpResponse1, codeHelpResponse2, codeHelpResponse3] =
        await Promise.all([
          GetCodeHelpCombo('', 6, 60001, 1, '%', '', '', '', ''),
          GetCodeHelpCombo('', 6, 19998, 1, '%', '6036', '', '', ''),
          GetCodeHelpCombo('', 6, 19998, 1, '%', '6044', '', '', ''),
        ])

      setDataUnit(codeHelpResponse1?.data || [])
      setMinorName(codeHelpResponse2?.data || [])
      setMinorName2(codeHelpResponse3?.data || [])
    } catch (error) {
      setDataUnit([])
      setMinorName([])
    } finally {
      setLoading(false)
    }
  }, [])


  const debouncedFetchCodeHelpData = useMemo(
    () => debounce(fetchCodeHelpData, 100),
    [fetchCodeHelpData],
  )


  const nextPage = useCallback(() => {
    if (keyPath) {
      navigate(`/u/warehouse/material/stock-out-request/${keyPath}`)
    }
  }, [keyPath, navigate])

  const onCellClicked = (cell, event) => {
    let rowIndex

    if (cell[0] !== -1) {
      return
    }

    if (cell[0] === -1) {
      rowIndex = cell[1]
      setIsMinusClicked(true)
    } else {
      rowIndex = cell[0]
      setIsMinusClicked(false)
    }

    if (
      lastClickedCell &&
      lastClickedCell[0] === cell[0] &&
      lastClickedCell[1] === cell[1]
    ) {
      setKeyPath(null)
      setLastClickedCell(null)
      setClickedRowData(null)
      return
    }

    if (rowIndex >= 0 && rowIndex < data.length) {
      const rowData = data[rowIndex]

      const filteredData = {
        IDX_NO: rowData.IDX_NO,
        EmpName: rowData.EmpName,
        FactUnit: rowData.FactUnit,
        FactUnitName: rowData.FactUnitName,
        IsConfirm: rowData.IsConfirm,
        IsReturn: rowData.IsReturn,
        IsStop: rowData.IsStop,
        ItemName: rowData.ItemName,
        ItemNo: rowData.ItemNo,
        ItemSeq: rowData.ItemSeq,
        ItemSpec: rowData.ItemSpec,
        ItemUnitSeq: rowData.ItemUnitSeq,
        OSPPOSeq: rowData.OSPPOSeq,
        OutReqNo: rowData.OutReqNo,
        OutReqSeq: rowData.OutReqSeq,
        PJTSeq: rowData.PJTSeq,
        ProdPlanSeq: rowData.ProdPlanSeq,
        ProdReqNo: rowData.ProdReqNo,
        ProgQty: rowData.ProgQty,
        ProgStatus: rowData.ProgStatus,
        ProgStatusName: rowData.ProgStatusName,
        Qty: rowData.Qty,
        Remark: rowData.Remark,
        ReqDate: rowData.ReqDate,
        UnitName: rowData.UnitName,
        UseType: rowData.UseType,
        UseTypeName: rowData.UseTypeName,
        WBSSeq: rowData.WBSSeq,
        WorkOrderNo: rowData.WorkOrderNo,
      }
      const secretKey = 'TEST_ACCESS_KEY'
      const encryptedData = CryptoJS.AES.encrypt(
        JSON.stringify(filteredData),
        secretKey,
      ).toString()
      const encryptedToken = encodeBase64Url(encryptedData)
      setKeyPath(encryptedToken)
      setClickedRowData(rowData)
      setLastClickedCell(cell)
    }
  }

  const handleSearch1 = async () => {
    setLoadingCodeHelp(true)
    setModalVisible1(true)
    fetchCodehelpData1()
  }
  const handleSearch2 = async () => {
    setLoadingCodeHelp(true)
    setModalVisible2(true)
    fetchCodehelpData2()
  }

  const handleSearch3 = async () => {
    setLoadingCodeHelp(true)
    setModalVisible3(true)
    fetchCodehelpData3()
  }
  useEffect(() => {
    debouncedFetchCodeHelpData()
    return () => {
      debouncedFetchCodeHelpData.cancel()
    }
  }, [debouncedFetchCodeHelpData])

  useEffect(() => {
    fetchSPDMMOutReqListQueryWeb()
  }, [])


  const resetTable = () => {
    setSelection({
      columns: CompactSelection.empty(),
      rows: CompactSelection.empty(),
    });
  };
  const resetTable2 = () => {
    setSelection2({
      columns: CompactSelection.empty(),
      rows: CompactSelection.empty(),
    });
  };
  const resetTable3 = () => {
    setSelection3({
      columns: CompactSelection.empty(),
      rows: CompactSelection.empty(),
    });
  };

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
                {t('Stock Out Request')}
              </Title>
              <StockOutRequestActions
                nextPage={nextPage}
                debouncedFetchSPDMMOutReqListQueryWeb={
                  fetchSPDMMOutReqListQueryWeb
                }
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
                <StockOutRequestQuery
                  formData={formData}
                  setFormData={setFormData}
                  setToDate={setToDate}
                  toDate={toDate}
                  dataUnit={dataUnit}
                  setBizUnit={setBizUnit}
                  deptName={deptName}
                  setDeptName={setDeptName}
                  setDeptSeq={setDeptSeq}
                  handleSearch1={handleSearch1}
                  handleSearch2={handleSearch2}
                  handleSearch3={handleSearch3}
                  setModalVisible1={setModalVisible1}
                  setModalVisible2={setModalVisible2}
                  loadingCodeHelp={loadingCodeHelp}
                  modalVisible1={modalVisible1}
                  modalVisible2={modalVisible2}
                  setMinorName={setMinorName}
                  minorName={minorName}
                  setFactUnit={setFactUnit}
                  setProgStatus={setProgStatus}
                  minorName2={minorName2}
                  setUseType={setUseType}
                  empName={empName}
                  custName={custName}
                  setProdPlanNo={setProdPlanNo}
                  prodPlanNo={prodPlanNo}
                  setWorkOrderNo={setWorkOrderNo}
                  workOrderNo={workOrderNo}
                  setProdReqNo={setProdReqNo}
                  prodReqNo={prodReqNo}
                  setOutReqNo={setOutReqNo}
                  outReqNo={outReqNo}
                  resetTable={resetTable}
                  setEmpName={setEmpName}
                  setEmpSeq={setEmpSeq}
                  resetTable2={resetTable2}
                  resetTable3={resetTable3}
                  setCustName={setCustName}
                  setCustSeq={setCustSeq}
                />
              </div>
            </details>
          </div>
          <div className="col-start-1 col-end-5 row-start-2 w-full h-full rounded-lg">
            <TableStockOutRequest
              data={data}
              loading={loading}
              setData={setData}
              onCellClicked={onCellClicked}
              setGridData={setGridData}
              gridData={gridData}
            />
          </div>
        </div>
      </div>
      <CodeHelpStockOut1
        setModalVisible={setModalVisible1}
        modalVisible={modalVisible1}
        loadingCodeHelp={loadingCodeHelp}
        handleSearch={handleSearch1}
        data={data1}
        setConditionSeq={setConditionSeq}
        setSubConditionSql={setSubConditionSql}
        fetchCodehelpData1={fetchCodehelpData1}
        keyword={keyword}
        setKeyword={setKeyword}
        setDeptSeq={setDeptSeq}
        setDeptName={setDeptName}
        deptName={deptName}
        setData1={setData1}
        setSelection={setSelection}
        selection={selection}
        resetTable={resetTable}
      />
      <CodeHelpStockOut2
        setModalVisible={setModalVisible2}
        modalVisible={modalVisible2}
        loadingCodeHelp={loadingCodeHelp}
        handleSearch={handleSearch2}
        data={data2}
        setConditionSeq={setConditionSeq}
        setSubConditionSql={setSubConditionSql}
        fetchCodehelpData2={fetchCodehelpData2}
        keyword={keyword}
        setKeyword={setKeyword}
        setEmpName={setEmpName}
        setEmpSeq={setEmpSeq}
        setSelection={setSelection2}
        selection={selection2}
        resetTable={resetTable2}
        empName={empName}
      />
      <CodeHelpStockOut3
        setModalVisible={setModalVisible3}
        modalVisible={modalVisible3}
        loadingCodeHelp={loadingCodeHelp}
        handleSearch={handleSearch3}
        data={data3}
        setConditionSeq={setConditionSeq}
        setSubConditionSql={setSubConditionSql}
        fetchCodehelpData3={fetchCodehelpData3}
        keyword={keyword}
        setKeyword={setKeyword}
        setCustName={setCustName}
        setCustSeq={setCustSeq}
        resetTable={resetTable3}
        setSelection={setSelection3}
        selection={selection3}
        custName={custName}
      />
    </>
  )
}
