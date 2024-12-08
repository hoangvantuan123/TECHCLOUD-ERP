import apiService from '../services/apiService'

export const Delete = (id) => {
  return apiService
    .delete(`/hr-timekeeping/delete/${id}`, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then((response) => {
      return {
        success: true,
        message: 'Xóa thành công',
      }
    })
    .catch((error) => {
      return {
        success: false,
        message: error.response
          ? error.response.data.message || 'Có lỗi xảy ra'
          : 'Không thể kết nối tới server',
      }
    })
}
