/**
 * Created by Serhiy on 07.10.18.
 */
import { LANGUAGES } from './../../../constants';

const language = (state = { language: LANGUAGES.DEFAULT }, action) => {
  switch (action.type) {
    case LANGUAGES.UKRAINIAN: return { language: LANGUAGES.UKRAINIAN};
    default:
      return state;
  }
};


export default language;