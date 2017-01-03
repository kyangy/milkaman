'use strict'

/**
 * API
 */

import { Router } from 'express'
import passport from 'passport'
import { controllers } from '../db'

const usersController = controllers && controllers.users

const router = Router()

router.post('/signup', usersController.signUp)

export default router
