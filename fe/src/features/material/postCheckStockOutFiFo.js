import axios from 'axios'
import {
  HOST_API_SERVER_1
} from '../../services'
import { accessToken } from '../../services/tokenService'

const generateXml = (data) => {
  return `
        <DataBlock1>
          <WorkingTag>${data.WorkingTag}</WorkingTag>
          <IDX_NO>1</IDX_NO>
          <Status>0</Status>
          <DataSeq>1</DataSeq>
          <Selected>1</Selected>
          <TABLE_NAME>DataBlock1</TABLE_NAME>
          <OutReqSeq>${data.OutReqSeq}</OutReqSeq>
          <OutReqItemSerl>${data.OutReqItemSerl}</OutReqItemSerl>
          <WorkOrderSeq>${data.WorkOrderSeq}</WorkOrderSeq>
          <WorkOrderSerl>${data.WorkOrderSerl}</WorkOrderSerl>
          <FactUnit>${data.FactUnit}</FactUnit>
          <FactUnitName>${data.FactUnitName}</FactUnitName>
          <InWHSeq>${data.InWHSeq}</InWHSeq>
          <InWHName>${data.InWHName}</InWHName>>
          <OutWHSeq>${data.OutWHSeq}</OutWHSeq>
          <OutWHName>${data.OutWHName}</OutWHName>
          <ItemSeq>${data.ItemSeq}</ItemSeq>
          <UnitSeq>${data.UnitSeq}</UnitSeq>
          <ItemNo>${data.ItemNo}</ItemNo>
          <LotNo>${data.LotNo}</LotNo>
          <Qty>${data.Qty}</Qty>
          <DateCode>${data.DateCode}</DateCode>
          <ReelNo>${data.ReelNo}</ReelNo>
          <Barcode>${data.Barcode}</Barcode>
        </DataBlock1>
    `
}

const DEFAULTS = {
  xmlFlags: 2,
  serviceSeq: 60010002,
  workingTag: '',
  languageSeq: 6,
  pgmSeq: 1036085,
}

export const SMaterialQRCheckStockOutFiFoWeb = (requestData) => {
  const requestParams = {
    ...DEFAULTS,
    ...requestData,
  }
  const token = accessToken()
  const xmlDocument = generateXml(requestParams)
  const dataToSend = {
    xmlDocument,
    xmlFlags: requestParams.xmlFlags,
    serviceSeq: requestParams.serviceSeq,
    workingTag: requestParams.workingTag,
    languageSeq: requestParams.languageSeq,
    pgmSeq: requestParams.pgmSeq,
  }

  return axios
    .post(
      `${HOST_API_SERVER_1}/mssql/stock-out/smaterial-qr-check-stock-out-web`,
      dataToSend, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      },
    )
    .then((response) => {
      if (response.status === 200 || response.status === 201) {
        return response.data
      }
      throw new Error('Error from API: ' + response.data.message)
    })
    .catch((error) => {
      const errorMessage = error.response ?
        error.response.data.message || 'Error from API' :
        'Unknown error occurred'
      throw new Error(errorMessage)
    })
}