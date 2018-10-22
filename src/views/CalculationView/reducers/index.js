/**
 * Created by Serhiy on 03.10.18.
 */

import { combineReducers } from 'redux'
import packCalculation from './packCalculation';
import batteriesCalculation from './batteriesCalculation';

const calculationReducer = combineReducers({
  batteriesCalculation,
  packCalculation
});

export default calculationReducer;
