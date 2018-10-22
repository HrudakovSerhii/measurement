/**
 * Created by Serhiy on 07.10.18.
 */

import { BATTERIES_CALCULATION, COMMANDS } from './../../../constants';

const batteriesCalculation = (state = BATTERIES_CALCULATION, action) => {
  switch (action.type) {
    case COMMANDS.BATTERIES_CALCULATION_COMMAND.CONTAINER_SIZE:
      return {};
    case COMMANDS.BATTERIES_CALCULATION_COMMAND.ELECTRIC_PARAMS:
      return {};
    default:
      return state;
  }
};


export default batteriesCalculation;