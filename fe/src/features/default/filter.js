import apiService from '../services/apiService'

export const Filter = (page = 1, limit = 50, filter = {}) => {
  return apiService
    .get('/hr-timekeeping/filter-me', {
      params: {
        page,
        limit,
        ...filter,
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
