import { HOST_API_SERVER_2 } from '../../services'
import axios from 'axios'
export const ChangePassword = async (employeeId, oldPassword, newPassword) => {
  try {
    const response = await axios.post(
      `${HOST_API_SERVER_2}/acc/p2/change-password`,
      {
        employeeId: employeeId,
        oldPassword: oldPassword,
        newPassword: newPassword,
      },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      },
    )

    if (response.status === 201 && response.data.success === true) {
      return { success: true, message: response.data.message }
    }
  } catch (error) {
    return {
      success: false,
      message: error.response ? error.response.data.message : 'Có lỗi xảy ra',
    }
  }
}
