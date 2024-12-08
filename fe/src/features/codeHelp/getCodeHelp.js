import axios from 'axios'
import { HOST_API_SERVER_1 } from '../../services'
import { ERROR_MESSAGES } from '../../utils/constants'

export const GetCodeHelp = async (
  workingTag,
  languageSeq,
  codeHelpSeq,
  companySeq,
  keyword,
  param1,
  param2,
  param3,
  param4,
  conditionSeq,
  pageCount,
  pageSize,
  subConditionSql,
  accUnit,
  bizUnit,
  factUnit,
  deptSeq,
  wkDeptSeq,
  empSeq,
  userSeq,
) => {
  try {
    const url = `${HOST_API_SERVER_1}/mssql/code-help-query`

    const response = await axios.get(url, {
      params: {
        workingTag,
        languageSeq,
        codeHelpSeq,
        companySeq,
        keyword,
        param1,
        param2,
        param3,
        param4,
        conditionSeq,
        pageCount,
        pageSize,
        subConditionSql,
        accUnit,
        bizUnit,
        factUnit,
        deptSeq,
        wkDeptSeq,
        empSeq,
        userSeq,
      },
      headers: {
        'Content-Type': 'application/json',
      },
    })

    if (response.status === 200) {
      return {
        success: true,
        data: response.data.data,
      }
    } else {
      return {
        success: false,
        message: ERROR_MESSAGES.ERROR,
      }
    }
  } catch (error) {
    return {
      success: false,
      message: error.response
        ? error.response.data.message
        : ERROR_MESSAGES.ERROR,
    }
  }
}
