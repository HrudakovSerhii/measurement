/**
 * Created by Serhiy on 03.10.18.
 */

import { combineReducers } from 'redux';

import workSpaceType from './workSpaceType';
import workSpaceMode from './workSpaceMode';
import workSpaceQuality from './workSpaceQuality';

const isViewIn3D = (state, action) => {
  return {}; //return state.hasOwnProperty('isViewIn3D') && state.isViewIn3D
}; // return Object.assign({}, [...state, { isViewIn3D: !state.isViewIn3D}])}; // This is on/off reducer

const workSpaceState = combineReducers({
  workSpaceType,
  workSpaceMode,
  workSpaceQuality,
  isViewIn3D
});

export default workSpaceState;