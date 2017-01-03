'use strict'

/*
 * For all the action helpers
 */

export function actionCreator(ACTION) {
  return function(res = null) {
    return {
      type: ACTION,
      res
    }
  }
}

export function fetchAction(dispatch, url, requestObj, REQUEST, SUCCESS, FAILURE) {
  // Start request
  dispatch(REQUEST())

  try {
    return fetch(url, requestObj)
      .then(res => res.json())
      .then(json => {
        // Handle success and failure
        if (json.success) {
          dispatch(SUCCESS(json))
        } else {
          dispatch(FAILURE(json))
        }
      })
  } catch (e) {
    dispatch(FAILURE(json))
  }
}
