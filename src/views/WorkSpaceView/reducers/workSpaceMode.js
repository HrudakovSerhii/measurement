import { VIEW_MODE } from './../constants';

const initialState = VIEW_MODE.VIEWING;

const workSpaceMode = (state = initialState, action) => {
  switch (action.type) {
    case VIEW_MODE.CALCULATION:
      return {};
    default:
      return state;
  }
};


export default workSpaceMode;