import axios from 'axios'
import { HOST_API_SERVER_2 } from '../../services'
import { ERROR_MESSAGES } from '../../utils/constants'

export const GetSysttemUsersList = async (userId, userName) => {
  try {
    const url = `${HOST_API_SERVER_2}/mssql/system-users/itm-roles-data-users-web`

    const response = await axios.get(url, {
      params: {
        userId,
        userName,
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
