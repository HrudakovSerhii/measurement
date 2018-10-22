import { VIEW_QUALITY } from './../constants';

const initialState = VIEW_QUALITY.NORMAL;

const workSpaceQuality = (state = initialState, action) => {
  switch (action.type) {
    case VIEW_QUALITY.BEST:
      return {};
    default:
      return state;
  }
};


export default workSpaceQuality;