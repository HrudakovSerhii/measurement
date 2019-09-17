import React from 'react';
import App from './App';

import { render } from 'react-dom'
import { Provider } from 'react-redux';
import {createStore} from 'redux';

import serviceWorker from './serviceWorker';

import appReducer from './reducers'

import { APP_STATE } from './constants';

import './index.css';

const store = createStore(appReducer, APP_STATE);
// const currentState = store.getState();

render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
);

serviceWorker();
