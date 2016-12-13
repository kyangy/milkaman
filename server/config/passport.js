'use strict'

import passport from 'passport'
import google from './passport/google'
import { passport as dbPassport } from '../db'

export default () => {
  passport.serializeUser((user, done) => {
    done(null, user.id)
  })

  passport.deserializeUser(dbPassport.deserializeUser)

  google(passport)
}
