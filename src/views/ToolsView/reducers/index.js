/**
 * Created by Serhiy on 03.10.18.
 */

import { combineReducers } from 'redux'
import toolsTypes from './toolsTypes';
import tools from './tools';

const toolsState = combineReducers({
  toolsTypes,
  tools
});

export default toolsState

