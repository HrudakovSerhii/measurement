import React from 'react';
import App from './App';

import { render } from 'react-dom'
import { Provider } from 'react-redux';
import {createStore} from 'redux';

import serviceWorker from './serviceWorker';

import appReducer from './reducers'

import {APP_SETTINGS} from './constants';

import './index.css';

const store = createStore(appReducer, APP_SETTINGS);

const currentState = store.getState();

render(
  <Provider store={store}>
    <App appState={currentState.appState}
         toolsState={currentState.toolsState}
         calculationState={currentState.calculationState}
         workSpaceState={currentState.workSpaceState}
    />
  </Provider>,
  document.getElementById('root')
);

serviceWorker();
