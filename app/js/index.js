import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import RootReducer from 'core/reducers'
import style from '../css/style.css'
import App from 'core/components/App';

const logger = createLogger()
const createStoreMiddleware = applyMiddleware(
  thunkMiddleware,
  logger
)(createStore)

const store = createStoreMiddleware(RootReducer)

ReactDOM.render(
  <App store={store} />,
  document.getElementById('react-content')
)
