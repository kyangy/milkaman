'use strict'

/**
 * Routes for express app
 */

import { Router } from 'express'
import passport from 'passport'

const router = Router()

router.get('/', (req, res, next) => {
  if (req.subdomains.indexOf('api') > -1) {
    return res.send({
      Message: 'Welcome to KYANGY'
    })
  }
  next()
})

router.get('/logout', (req, res, next) => {
  req.logout()
  res.redirect('/')
})

export default router
