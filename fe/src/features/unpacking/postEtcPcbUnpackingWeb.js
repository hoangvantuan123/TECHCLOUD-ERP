import axios from 'axios'
import { HOST_API_SERVER_1 } from '../../services'
import { ERROR_MESSAGES } from '../../utils/constants'
export const PostEpuw = async (data) => {
  try {
    const response = await axios.post(
      `${HOST_API_SERVER_1}/unpacking/create`,
      {
        data,
      },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      },
    )

    if (
      (response.status === 200 || response.status === 201) &&
      response.data.status === true
    ) {
      return {
        success: true,
        data: response.data,
      }
    } else {
      return {
        success: false,
        message: response.data.message || ERROR_MESSAGES.ERROR_DATA,
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
