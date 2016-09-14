'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import Routing from './components/Routing.js';
import RootReducer from './reducers'

const logger = createLogger()
const createStoreMiddleware = applyMiddleware(
  thunkMiddleware,
  logger
)(createStore)

const store = createStoreMiddleware(RootReducer)

ReactDOM.render(
  <Provider store={store}>
    <Routing />
  </Provider>,
  document.getElementById('react-content')
)
