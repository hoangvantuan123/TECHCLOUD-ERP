import axios from 'axios'
import {
  HOST_API_SERVER_1
} from '../../services'
import {
  accessToken
} from '../../services/tokenService'

const DEFAULTS = {
  xmlFlags: 2,
  serviceSeq: 2639,
  workingTag: '',
  languageSeq: 6,
  pgmSeq: 1036085,
}

export const CheckAllProceduresStockOutFiFo = async (dataSave, xmlDocuments) => {
  try {
    const token = accessToken()
    const dataToSend = {
      ...DEFAULTS,
      dataSave,
      xmlDocument: {
        xmlSCOMCloseCheckWEB: xmlDocuments.xmlSCOMCloseCheckWEB,
        xmlSCOMCloseItemCheckWEB: xmlDocuments.xmlSCOMCloseItemCheckWEB,
        xmlSPDMMOutProcCheckWEB: xmlDocuments.xmlSPDMMOutProcCheckWEB,
        xmlSPDMMOutProcItemCheckWEB: xmlDocuments.xmlSPDMMOutProcItemCheckWEB,
      },
    }

    const response = await axios.post(
      `${HOST_API_SERVER_1}/mssql/stock-out/check-all-procedures-stock-out-fifo`,
      dataToSend, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      },
    )

    if (response.status >= 200 && response.status < 300) {
      return response.data
    }

    throw new Error('Unexpected response status: ' + response.status)
  } catch (error) {
    let errorMessage = 'Unknown error occurred'

    if (error.response) {
      errorMessage =
        error.response.data.message ||
        `API error with status ${error.response.status}`
    } else if (error.request) {
      errorMessage = 'No response received from the server'
    } else {
      errorMessage = error.message
    }

    throw new Error(errorMessage)
  }
}