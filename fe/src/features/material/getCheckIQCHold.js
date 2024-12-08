import axios from 'axios'
import { HOST_API_SERVER_1 } from '../../services'
import { ERROR_MESSAGES } from '../../utils/constants'

export const GetCheckIQCHold = async (itemNo, lotno) => {
  try {
    const url = `${HOST_API_SERVER_1}/mssql/stock-in/check-iqc-hold`

    const response = await axios.get(url, {
      params: {
        itemNo: `'${itemNo}'`,
        lotno: `'${lotno}'`,
      },
      headers: {
        'Content-Type': 'application/json',
      },
    })

    if (response.status === 200) {
      if (response.data && response.data.data) {
        return {
          success: true,
          data: response.data.data,
        }
      } else {
        return {
          success: false,
          message: ERROR_MESSAGES.DATABASE_ERROR, // Dữ liệu không có
        }
      }
    } else {
      return {
        success: false,
        message: ERROR_MESSAGES.ERROR, // Lỗi chung
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
