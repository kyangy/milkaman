'use strict'

import express from 'express';
import mongoose from 'mongoose';
import subdomain from 'express-subdomain';
import webpack from 'webpack';
import { ENV } from './config/appConfig';
import { connect } from './db';
import expressConfig from './config/express';
import routes from './config/routes';
import api from './config/api';
import passport from './config/passport';
const App = require('../public/assets/server');
const app = express();

mongoose.Promise = global.Promise

/*
 * Database-specific setup
 * - connect to MongoDB using mongoose
 * - register mongoose Schema
 */
connect();

/*
 * Passport configuration
 */
passport();


if (ENV === 'development') {
  const webpackDevConfig = require('../webpack/webpack.config.dev-client');
  const compiler = webpack(webpackDevConfig);
  app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: webpackDevConfig.output.publicPath
  }));

  app.use(require('webpack-hot-middleware')(compiler));
}

expressConfig(app);
app.use('/', routes)

if (ENV !== 'production') {
  // no subdomain in development
  app.use('/api', api)
} else {
  // use subdomain in production
  app.use(subdomain('api', api))
}

app.get('*', App.default);

app.listen(app.get('port'));
