/**
 * Created by Serhiy on 06.10.18.
 */

import { combineReducers } from 'redux'
import themeType from './themeType';
import language from './language';
import toolbarPosition from './toolbarPosition';

const appState = combineReducers({
  themeType,
  language,
  toolbarPosition
});

export default appState

