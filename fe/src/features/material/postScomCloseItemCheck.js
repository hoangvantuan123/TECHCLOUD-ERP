import axios from 'axios'
import { HOST_API_SERVER_1 } from '../../services'

const DEFAULTS = {
  xmlFlags: 2,
  serviceSeq: 2639,
  workingTag: '',
  companySeq: 1,
  languageSeq: 6,
  userSeq: 3106,
  pgmSeq: 1036085,
}

export const SCOMCloseItemCheckWEB = async (xmlDocument) => {
  try {
    const dataToSend = {
      ...DEFAULTS,
      xmlDocument,
    }

    const response = await axios.post(
      `${HOST_API_SERVER_1}/mssql/stock-in/scom-close-item-check-web`,
      dataToSend,
      {
        headers: {
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
