import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'

const instance = axios.create({
  baseURL: '/',
  timeout: 60000, // 改为60s
})

const responseInterceptor = (response: AxiosResponse<any>) => {
  if (!response.data.code) {
    const e = {} as any
    e.message = response.data.message
    e.code = response.data.code
    throw e
  }
  return response.data
}

const requestInterceptor = (config: AxiosRequestConfig) => {
  return config
}


instance.interceptors.response.use(responseInterceptor)
instance.interceptors.request.use(requestInterceptor)

export default instance