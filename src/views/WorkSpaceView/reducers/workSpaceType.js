/**
 * Created by Serhiy on 10.10.18.
 */
import { VIEW_TYPE } from '../constants';

const workSpaceType = (state = VIEW_TYPE.VOLUME, action) => {
  switch (action.type) {
    case VIEW_TYPE.VOLUME:
      return {};
    case VIEW_TYPE.SCHEMATIC:
      return {};
    default:
      return state;
  }
};

export default workSpaceType;
