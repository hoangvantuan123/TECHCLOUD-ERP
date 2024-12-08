import axios from 'axios'
import { HOST_API_SERVER_1 } from '../../services'

const DEFAULTS = {
  workingTag: 'Q',
  companySeq: 1,
  languageSeq: 6,
  codeHelpSeq: '10009',
  keyword: null,
  param1: '',
  param2: '',
  param3: '',
  param4: '',
  conditionSeq: null,
  pageCount: 1,
  pageSize: 350,
  subConditionSql: null,
  accUnit: 1,
  bizUnit: 0,
  factUnit: 0,
  deptSeq: 0,
  wkDeptSeq: 0,
  empSeq: 0,
  userSeq: 18770,
}

export const SCACodeHelpQuery = (keyword, conditionSeq, subConditionSql) => {
  const requestParams = {
    ...DEFAULTS,
    keyword,
    conditionSeq,
    subConditionSql,
  }

  const dataToSend = {
    workingTag: requestParams.workingTag,
    companySeq: requestParams.companySeq,
    languageSeq: requestParams.languageSeq,
    codeHelpSeq: requestParams.codeHelpSeq,
    keyword: `%${requestParams.keyword}%`,
    param1: requestParams.param1,
    param2: requestParams.param2,
    param3: requestParams.param3,
    param4: requestParams.param4,
    conditionSeq: `${requestParams.conditionSeq}`,
    pageCount: requestParams.pageCount,
    pageSize: requestParams.pageSize,
    subConditionSql: `${requestParams.subConditionSql}`,
    accUnit: requestParams.accUnit,
    bizUnit: requestParams.bizUnit,
    factUnit: requestParams.factUnit,
    deptSeq: requestParams.deptSeq,
    wkDeptSeq: requestParams.wkDeptSeq,
    empSeq: requestParams.empSeq,
    userSeq: requestParams.userSeq,
  }

  return axios
    .post(`${HOST_API_SERVER_1}/mssql/users/SCACodeHelpQuery`, dataToSend, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then((response) => {
      if (response.status === 200 || response.status === 201) {
        return response.data
      }
      throw new Error(
        'Error from API: ' + (response.data.message || 'Unknown error'),
      )
    })
    .catch((error) => {
      const errorMessage = error.response
        ? error.response.data.message || 'Error from API'
        : 'Unknown error occurred'
      throw new Error(errorMessage)
    })
}
