import axios from 'axios'
import {
  getLocalAccessToken,
  getLocalRefreshToken,
  updateLocalAccessToken,
} from './localStorage'
export const customFetch = axios.create({
  baseURL: 'http://172.173.169.122:3000/api',
})
const handleFetchResponse = (customFetch) => {
  customFetch.interceptors.request.use(
    (config) => {
      const token = getLocalAccessToken()
      if (token) {
        config.headers['Authorization'] = 'Bearer ' + token
        // config.headers['x-access-token'] = token
      }
      return config
    },
    (error) => {
      return Promise.reject(error)
    }
  )
  customFetch.interceptors.response.use(
    (res) => {
      return res
    },
    async (err) => {
      const originalConfig = err.config

      if (originalConfig.url !== '/signup/basic' && err.response) {
        if (err.response.status === 401 && !originalConfig._retry) {
          originalConfig._retry = true
          try {
            const refreshToken = { refreshToken: getLocalRefreshToken() }
            const rs = await customFetch.post('/token/refresh', refreshToken)
            const { accessToken } = rs.data
            updateLocalAccessToken(accessToken)
            return customFetch(originalConfig)
          } catch (_error) {
            return Promise.reject(_error)
          }
        }
      }
      return Promise.reject(err)
    }
  )
}
handleFetchResponse(customFetch)
