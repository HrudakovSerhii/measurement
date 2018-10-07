/**
 * Created by Serhiy on 07.10.18.
 */
import { TOOL_BAR_POSITION } from './../../../constants';

const toolbarPosition = (state = { toolbarPosition: TOOL_BAR_POSITION.DEFAULT }, action) => {
  switch (action.type) {
    case TOOL_BAR_POSITION.UP: return { toolbarPosition: TOOL_BAR_POSITION.UP};
    default:
      return state;
  }
};


export default toolbarPosition;