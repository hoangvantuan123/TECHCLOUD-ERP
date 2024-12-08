import axios from 'axios'
import { HOST_API_SERVER_2 } from '../../services'
import { ERROR_MESSAGES } from '../../utils/constants'
import { accessToken } from '../../services/tokenService'

export const PostRolesRootMenu = async (rootMenuIds, groupId, type) => {
  try {
    const token = accessToken()
    const response = await axios.post(
      `${HOST_API_SERVER_2}/mssql/system-users/itm-roles-root-menus`,
      { rootMenuIds, groupId, type },
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
    // Xử lý lỗi tốt hơn
    return {
      success: false,
      message: error.response
        ? error.response.data.message || 'Có lỗi xảy ra'
        : 'Không thể kết nối tới server',
    }
  }
}
