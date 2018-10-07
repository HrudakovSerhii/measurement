/**
 * Created by Serhiy on 06.10.18.
 */

import { TOOLS_TYPES } from './../../../constants';

const toolsTypes = (state = { toolsTypes: TOOLS_TYPES.ELECTRIC}, action) => {
  switch (action.type) {
    case TOOLS_TYPES.ELECTRIC: return 'voltage, current, amp';
    default:
      return state;
  }
};


export default toolsTypes;