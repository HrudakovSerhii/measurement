/**
 * Created by Serhiy on 06.10.18.
 */
import { TOOL_BAR_POSITION } from './../../../constants';

const positionReducer = (state, type) => {
  switch(type) {
    case TOOL_BAR_POSITION.UP:
      return state.toolbarPosition = type;
  }
};

const toolbarReducer = (state = '', action) => {
  switch (action.type) {
    case 'POSITION': return positionReducer(state, action.positionType);
    default:
      return state;
  }
};

export default toolbarReducer

