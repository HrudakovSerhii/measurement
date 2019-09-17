/**
 * Created by Serhiy on 03.10.18.
 */
// import { combineReducers } from 'redux'
//
// import calculationState from '../views/CalculationView/reducers';
// import workSpaceState from '../views/WorkSpaceView/reducers';
// import appState from '../views/SettingsView/reducers';
// import toolsState from '../views/ToolsView/reducers';
// import settings from './../views'

// const appReducer = combineReducers({
//   appState,
//   toolsState,
//   calculationState,
//   workSpaceState
// });

const appReducer = (state = {}, action) => {
  switch (action.type) {
    case 1:
      return {};
    default:
      return state;
  }
};

export default appReducer;
