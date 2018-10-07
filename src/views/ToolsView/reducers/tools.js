/**
 * Created by Serhiy on 06.10.18.
 */

import { TOOLS } from './../../../constants';

const tools = (state = { tools: TOOLS.MEASUREMENT}, action) => {
  switch (action.type) {
    case TOOLS.MEASUREMENT: return 'voltmeter, line, diameter';
    case TOOLS.CALCULATION: return 'caclulator, test';
    default:
      return state;
  }
};


export default tools;