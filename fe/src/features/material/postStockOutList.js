import axios from 'axios'
import { HOST_API_SERVER_1 } from '../../services'

const generateXml = (data) => {
  return `
       <DataBlock1>
    <WorkingTag>A</WorkingTag>
    <IDX_NO>1</IDX_NO>
    <Status>0</Status>
    <DataSeq>1</DataSeq>
    <Selected>1</Selected>
    <TABLE_NAME>DataBlock1</TABLE_NAME>
    <IsChangedMst>${data.IsChangedMst}</IsChangedMst>
    <FactUnit>${data.FactUnit}</FactUnit>
    <ReqDate>${data.ReqDate}</ReqDate>
    <ReqDateTo>${data.ReqDateTo}</ReqDateTo>
    <OutReqNo>${data.OutReqNo}</OutReqNo>
    <UseType>${data.UseType}</UseType>
    <DeptSeq>${data.DeptSeq}</DeptSeq>
    <DeptName>${data.DeptName} </DeptName>
    <EmpSeq>${data.EmpSeq} </EmpSeq>
    <EmpName>${data.EmpName}</EmpName>
    <CustSeq>${data.CustSeq}</CustSeq>
    <CustName>${data.CustName}</CustName>
    <ProgStatus>${data.ProgStatus}</ProgStatus>
    <ProdPlanNo>${data.ProdPlanNo}</ProdPlanNo>
    <WorkOrderNo>${data.WorkOrderNo}</WorkOrderNo>
    <ProdReqNo>${data.ProdReqNo}</ProdReqNo>
  </DataBlock1>
    `
}

const DEFAULTS = {
  xmlFlags: 2,
  serviceSeq: 4594,
  workingTag: '',
  companySeq: 1,
  languageSeq: 6,
  userSeq: 3106,
  pgmSeq: 1036085,
}

export const SPDMMOutReqListQueryWeb = (requestData) => {
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
      `${HOST_API_SERVER_1}/mssql/stock-out/sp-dmm-out-req-list`,
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
