/**
 * Created by Serhiy on 03.10.18.
 */
import { combineReducers } from 'redux'


// import calculationReducer from '../views/CalculationView/reducers';
// import workSpaceReducer from '../views/WorkDeskView/reducers';
import appState from '../views/SettingsView/reducers';
import toolsState from '../views/ToolsView/reducers';
// import settings from './../views'

const appReducer = combineReducers({
  appState,
  toolsState
  // calculationReducer,
  // workSpaceReducer
});

export default appReducer;
