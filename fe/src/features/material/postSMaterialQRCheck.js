import axios from 'axios'
import { HOST_API_SERVER_1 } from '../../services'

const generateXml = (data) => {
  return `
        <DataBlock1>
            <WorkingTag>${data.workingTag}</WorkingTag>
            <IDX_NO>${data.idx_no}</IDX_NO>
            <Status>${data.status}</Status>
            <DataSeq>${data.dataSeq}</DataSeq>
            <Selected>${data.selected}</Selected>
            <TABLE_NAME>DataBlock1</TABLE_NAME>
            
            <PermitSeq>${data.permitSeq}</PermitSeq>
            <PermitSerl>${data.permitSerl}</PermitSerl>
    
            <BizUnit>${data.bizUnit}</BizUnit>
            <BizUnitName>${data.bizUnitName}</BizUnitName>
            <SMImpKind>${data.sMImpKind}</SMImpKind>
            <SMImpKindName>${data.sMImpKindName}</SMImpKindName>
            <ItemNo>${data.itemNo}</ItemNo>
            <LotNo>${data.lotNo}</LotNo>
            <Qty>${data.qty}</Qty>
            <DateCode>${data.dateCode}</DateCode>
            <ReelNo>${data.reelNo}</ReelNo>
            <Barcode>${data.barcode}</Barcode>
        </DataBlock1>
    `
}

const DEFAULTS = {
  xmlFlags: 2,
  serviceSeq: 60010001,
  workingTag: '',
  companySeq: 1,
  languageSeq: 6,
  userSeq: 3106,
  pgmSeq: 1036085,
}

export const SMaterialQRCheckWeb = (requestData) => {
  const requestParams = {
    ...DEFAULTS,
    ...requestData,
  }
  const xmlDocument = generateXml(requestParams)
  const dataToSend = {
    xmlDocument,
    xmlFlags: requestParams.xmlFlags,
    serviceSeq: requestParams.serviceSeq,
    workingTag: requestParams.workingTag,
    companySeq: requestParams.companySeq,
    languageSeq: requestParams.languageSeq,
    userSeq: requestParams.userSeq,
    pgmSeq: requestParams.pgmSeq,
  }

  return axios
    .post(
      `${HOST_API_SERVER_1}/mssql/stock-in/smaterial-qr-check-web`,
      dataToSend,
      {
        headers: {
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
      const errorMessage = error.response
        ? error.response.data.message || 'Error from API'
        : 'Unknown error occurred'
      throw new Error(errorMessage)
    })
}
