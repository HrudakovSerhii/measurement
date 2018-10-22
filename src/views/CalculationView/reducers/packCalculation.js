/**
 * Created by Serhiy on 07.10.18.
 */

import { PACK_CALCULATION, COMMANDS } from './../../../constants';

const getBatteriesSize = (params) => {
  return { width: 100, height: 40, length: 50};
};

const getBatteriesElectricParams = (params) => {
  return {
    amp: 10,
    maxAmp: 40,
    watts: 4000,
    ohms: 2,
    volts: 24
  }
};

const packCalculation = (state = PACK_CALCULATION, action) => {
  switch (action.type) {
    case COMMANDS.PACK_CALCULATION_COMMAND.BATTERIES_SIZE:
      return getBatteriesSize(action.params);
    case COMMANDS.PACK_CALCULATION_COMMAND.BATTERIES_ELECTRICS_PARAMS:
      return getBatteriesElectricParams(action.params);
    default:
      return state;
  }
};


export default packCalculation;