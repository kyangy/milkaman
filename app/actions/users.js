'use strict'

import { USER } from '../constants'
import { actionCreator, fetchAction } from './index.js'

export function signUp(email) { 
  return (dispatch, getState) => {
    fetchAction(
      dispatch,
      `http://localhost:3000/api/signup`,
      {
        credentials: 'include',
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email
        })
      },
      actionCreator(USER.SIGN_UP_REQUEST),
      actionCreator(USER.SIGN_UP_SUCCESS),
      actionCreator(USER.SIGN_UP_FAILURE)
    )
  }
}
