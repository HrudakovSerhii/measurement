/**
 * Created by Serhiy on 07.10.18.
 */
import { THEME_TYPES } from './../../../constants';

const themeType = (state = { themeType: THEME_TYPES.DEFAULT }, action) => {
  switch (action.type) {
    case THEME_TYPES.DARK: return { themeType: THEME_TYPES.DARK};
    default:
      return state;
  }
};


export default themeType;