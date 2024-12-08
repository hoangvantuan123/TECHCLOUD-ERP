import axios from 'axios'
import { HOST_API_SERVER_1 } from '../../services'
import { ERROR_MESSAGES } from '../../utils/constants'
export const GetEtcPcbUnpackingWeb = async (page, limit, filter = {}) => {
  try {
    const response = await axios.get(
      `${HOST_API_SERVER_1}/unpacking/paginated?page=${page}&limit=${limit}`,
      {
        ...filter,
      },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      },
    )

    if (response.status === 200) {
      return {
        success: true,
        data: response.data.data.data,
        total: response.data.data.total,
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
