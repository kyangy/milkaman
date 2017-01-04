'use strict'

import { polyfill } from 'es6-promise';
import { GET, PUT, POST, DELETE } from '../utils/requests';

import types from '../types';

polyfill();

export function signUp(email) {
  return {
    type: types.SIGN_UP,
    promise: POST('signup', {
      data: {
        email
      }
    })
  }
}
