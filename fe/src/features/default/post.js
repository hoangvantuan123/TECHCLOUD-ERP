import apiService from '../services/apiService'

export const Create = (data) => {
  return apiService
    .post('/hr-timekeeping/create', data, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then((response) => {
      return {
        success: true,
        data: response.data,
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
