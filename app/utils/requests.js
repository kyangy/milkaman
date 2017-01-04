'use strict'

import axios from 'axios';
const apiUrl = (process.env.NODE_ENV === 'production') ? '' : 'http://localhost:3000/api';

export function GET(endpoint) {
  return axios.get(endpoint)
}

export function PUT(endpoint, obj, token) {
  let requestObj = Object.assign({
    method: 'PUT',
    url: `/${endpoint}`,
    credentials: 'include',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    }
  }, obj)

  return axios(requestObj)
}

export function POST(endpoint, obj) {
  let requestObj = Object.assign({
    method: 'POST',
    url: `${apiUrl}/${endpoint}`,
    credentials: 'include',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
  }, obj)

  return axios(requestObj)
}

export function DELETE(endpoint, obj, token) {
  let requestObj = Object.assign({
    method: 'DELETE',
    url: `/${endpoint}`,
    credentials: 'include',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    }
  }, obj)

  return axios(requestObj)
}
