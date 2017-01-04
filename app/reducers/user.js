'use strict'

import types from '../types';
import { combineReducers } from 'redux';

const signedUp = (
  state = {
    message: ''
  },
  action
) => {
  switch (action.type) {
    case `${types.SIGN_UP}_REQUEST`:
      return state
    case `${types.SIGN_UP}_SUCCESS`:
      return {
        message: action.res.data.message
      }
    case `${types.SIGN_UP}_FAILURE`:
      return {
        message: 'Please try again'
      }
    default:
      return state
  }
}

const authenticated = (
  state = false,
  action
) => {
  switch (action.type) {
    default:
      return state;
  }
};

const userReducer = combineReducers({
  signedUp,
  authenticated
});

export default userReducer;
