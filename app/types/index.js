'use strict'

import keyMirror from 'keymirror'

const types = keyMirror({
  CREATE_REQUEST: null,
  REQUEST_SUCCESS: null,
  REQUEST_FAILURE: null,

  SHOW_USER: null,
  GET_CONTACTS: null,
  SELECT_CONTACT: null,
  DESELECT_CONTACT: null,
  SELECT_ALL_CONTACTS: null,
  DESELECT_ALL_CONTACTS: null,
  SEND_INVITES: null,
})

export default types
