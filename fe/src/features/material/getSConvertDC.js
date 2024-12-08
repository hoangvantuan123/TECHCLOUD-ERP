import axios from 'axios'
import { HOST_API_SERVER_1 } from '../../services'
import { ERROR_MESSAGES } from '../../utils/constants'

export const GetSConvertDC = async (itemNo, prodDate1, inDate1) => {
  try {
    const url = `${HOST_API_SERVER_1}/mssql/stock-in/convert-dc`

    const response = await axios.get(url, {
      params: {
        itemNo: `'${itemNo}'`,
        prodDate1: `'${prodDate1}'`,
        inDate1: `'${inDate1}'`,
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
