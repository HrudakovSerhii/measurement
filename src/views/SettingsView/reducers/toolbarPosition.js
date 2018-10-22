/**
 * Created by Serhiy on 07.10.18.
 */
import { TOOL_BAR_POSITION } from './../../../constants';

const toolbarPosition = (state = TOOL_BAR_POSITION.UP, action) => {
  switch (action.type) {
    case TOOL_BAR_POSITION.DOWN:
      return TOOL_BAR_POSITION.DOWN;
    case TOOL_BAR_POSITION.UP:
      return TOOL_BAR_POSITION.UP;
    case TOOL_BAR_POSITION.LEFT:
      return TOOL_BAR_POSITION.LEFT;
    case TOOL_BAR_POSITION.RIGHT:
      return TOOL_BAR_POSITION.RIGHT;
    default:
      return state;
  }
};


export default toolbarPosition;