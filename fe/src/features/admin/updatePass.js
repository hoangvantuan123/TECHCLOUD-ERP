import axios from 'axios'
import { HOST_API_SERVER_2 } from '../../services'
import { ERROR_MESSAGES } from '../../utils/constants'
import { accessToken } from '../../services/tokenService'

export const UpdatePass2 = async (userIds) => {
  try {
    const token = accessToken()
    const response = await axios.post(
      `${HOST_API_SERVER_2}/acc/admin/update-passwords-2`,
      {
        userIds,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      },
    )

    if (response.status === 200 || response.status === 201) {
      return {
        success: true,
        message: response.data.message || 'Operation successful',
        data: response.data,
      }
    } else {
      return {
        success: false,
        message: `Unexpected status code: ${response.status}`,
      }
    }
  } catch (error) {
    return {
      success: false,
      message: error.response
        ? error.response.data.message || 'Có lỗi xảy ra'
        : 'Không thể kết nối tới server',
    }
  }
}
