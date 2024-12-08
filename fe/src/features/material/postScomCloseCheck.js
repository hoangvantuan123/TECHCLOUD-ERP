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
            <IsChangedMst>${data.isChangedMst}</IsChangedMst>
            <BizUnit>${data.bizUnit}</BizUnit>
            <Date>${data.date}</Date>
            <DeptSeq>${data.deptSeq}</DeptSeq>
            <ServiceSeq>${data.serviceSeq2}</ServiceSeq>
            <MethodSeq>${data.methodSeq}</MethodSeq>
            <DtlUnitSeq>${data.dtlUnitSeq}</DtlUnitSeq>
        </DataBlock1>
    `
}

const DEFAULTS = {
  xmlFlags: 2,
  serviceSeq: 2639,
  workingTag: '',
  companySeq: 1,
  languageSeq: 6,
  userSeq: 3106,
  pgmSeq: 1036085,
}

export const SCOMCloseCheckWEB = (requestData) => {
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
      `${HOST_API_SERVER_1}/mssql/stock-in/scom-close-check-web`,
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
