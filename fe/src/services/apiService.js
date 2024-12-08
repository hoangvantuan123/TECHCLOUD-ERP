import axios from 'axios'
import { accessToken } from './tokenService'
import { HOST_API_SERVER_1 } from '.'

const apiService = axios.create({
  baseURL: HOST_API_SERVER_1,
  headers: {
    'Content-Type': 'application/json',
  },
})

/* apiService.interceptors.request.use(
  (config) => {
    const token = accessToken();
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
); */

export default apiService
