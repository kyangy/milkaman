'use strict'

import React from 'react';
import { createMemoryHistory, match } from 'react-router';
import createRoutes from 'routes';
import configureStore from 'store/configureStore';
import types from 'types';
import preRenderMiddleware from 'middlewares/preRenderMiddleware';
import pageRenderer from 'utils/pageRenderer';

export default function render(req, res) {
  const authenticated = req.isAuthenticated();

  const history = createMemoryHistory();
  const store = configureStore({
    user: {
      authenticated
    }
  }, history);
  const routes = createRoutes(store);

  match({routes, location: req.url}, (err, redirect, props) => {
    if (err) {
      res.status(500).json(err);
    } else if (redirect) {
      res.redirect(302, redirect.pathname + redirect.search);
    } else if (props) {
      // This method waits for all render component
      // promises to resolve before returning to browser
      store.dispatch({ type: types.CREATE_REQUEST });
      preRenderMiddleware(props)
      .then(data => {
        store.dispatch({ type: types.REQUEST_SUCCESS, data });
        const html = pageRenderer(store, props)
        res.status(200).send(html);
      })
      .catch(err => {
        console.error(err);
        res.status(500).json(err);
      });
    } else {
      res.sendStatus(404);
    }
  });
}
