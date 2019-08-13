import { navigate } from '@reach/router'

import { IUser } from '../models/user'


interface IAuthResponse {
  status: number
  data?: string
  errorText?: string
}

const CheckCredentials = (data: IUser) => {
  if (data.username === 'Admin' && data.password === '12345') {
    return true
  } else {
    return false
  }
}

export const authenticate = (data: IUser): Promise<IAuthResponse> => {
  const promise = new Promise<IAuthResponse>((resolve, reject) => {
    if (!CheckCredentials(data)) {
      reject({
        status: 500,
        errorText: 'incorrect_login_or_password',
      })
    }
    window.localStorage.setItem('tstz.authenticated', 'true')
    resolve({
      status: 200,
      data: 'ok'
    })
  })

  return promise
}