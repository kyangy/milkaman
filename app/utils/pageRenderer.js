'use strict'

import React from 'react'
import { renderToString } from 'react-dom/server'
import { Provider } from 'react-redux'
import { RouterContext } from 'react-router'
import Helmet from 'react-helmet'

// create a redux app
const createApp = (store, props) => renderToString(
  <Provider store={ store }>
    <RouterContext { ...props } />
  </Provider>
)

// build the page
const buildPage = (header, componentHTML, initialState) =>
  `<!doctype html>
  <html ${header.htmlAttributes.toString()}>
    <head>

      <title>Chocolatey Club | Subscription Service On Milka Chocolates</title>

      <meta charset="utf-8" />
      <meta http-equiv"="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
      <meta name="author" content="Kevin Yang" />
      <meta property="fb:app_id" content="1860192070878885" />
      <meta property="og:url" content="https://www.chocolatey.club" />
      <meta property="og:title" content="Chocolatey Club" />
      <meta property="og:description" content="Web/Mobile Apps" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black" />
      <meta name="apple-mobile-web-app-title" content= "Chocolatey Club" />
      <meta name="msapplication-TileColor" content= "#3372DF" />

      ${header.meta.toString()}
      ${header.link.toString()}

      <link rel="shortcut icon" href="/imgs/favicon.ico" type="image/x-icon">
      <link rel="icon" href="/imgs/favicon.ico" type="image/x-icon">
      <link rel="canonical" href="http://www.chocolatey.club/" />
      <link rel="copyright" href="http://www.chocolatey.club" />

      <link rel="stylesheet" href="/vendors/tether/dist/css/tether.min.css" />
      <link rel="stylesheet" href="/vendors/bootstrap/dist/css/bootstrap.min.css" />
      <link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/font-awesome/4.6.3/css/font-awesome.min.css" />
      <link rel="stylesheet" href="/vendors/toastr/toastr.min.css">
      <link rel="stylesheet" href="/assets/styles/main.css" />

    </head>
    <body>
      <div id="app">${componentHTML}</div>
      <script>window.__INITIAL_STATE__ = ${JSON.stringify(initialState)};</script>

      <!-- Assets -->
      <script type="text/javascript" charset="utf-8" src="/vendors/jquery/dist/jquery.min.js"></script>
      <script type="text/javascript" charset="utf-8" src="/vendors/tether/dist/js/tether.min.js"></script>
      <script type="text/javascript" charset="utf-8" src="/vendors/bootstrap/dist/js/bootstrap.min.js"></script>
      <script type="text/javascript" charset="utf-8" src="/vendors/toastr/toastr.min.js"></script>
      <script type="text/javascript" charset="utf-8" src="/assets/app.js"></script>
    </body>
  </html>`

export default (store, props) => {
  const initialState = store.getState()
  const componentHTML = createApp(store, props)
  const header = Helmet.rewind()
  return buildPage(header, componentHTML, initialState)
}
