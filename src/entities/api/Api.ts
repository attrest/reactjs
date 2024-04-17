"use client"

import axios from 'axios'
import qs from 'qs'

/**
 * Moment Timezone
 */
// moment.tz('Asia/Seoul')

/**
 * Proxy API Config
 * @param params
 * @returns
 */

export const Api = axios.create({
  paramsSerializer: (params) => qs.stringify(params),
})

Api.interceptors.response.use(
  (response) => response,
  async (error) => {
    // console.log(error.response.status)
    switch (error.response.status) {
      case 401: //인증오류 발생  ( TODO: Refresh Token 으로 갱신 )
        // FIXME: await signOut()
        // await signOut()
        // console.error('Signout')
        break
      default:
    }
    return Promise.reject(error)
  },
)

