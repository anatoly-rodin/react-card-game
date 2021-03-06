import 'react-app-polyfill/ie9';
import 'react-app-polyfill/stable';

import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { compose, createStore, applyMiddleware } from 'redux'
import { rootReducer } from './redux/rootReducer'
import thunk from 'redux-thunk'

import './index.scss'
import App from './App'
import * as serviceWorker from './serviceWorker'
import {checkMiddleware} from './redux/middleware'


const store = createStore(
  rootReducer,
  compose(applyMiddleware(thunk, checkMiddleware)))

render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)

serviceWorker.unregister()
