/**
 * Created by Serhiy on 03.10.18.
 */
import workSpaceState from '../views/WorkSpaceView/constants';

export const TOOL_BAR_POSITION = {
  LEFT: 'left',
  RIGHT: 'right',
  UP: 'up',
  DOWN: 'down'
};

export const TOOLS_TYPES = {
  ELECTRIC: 'ELECTRIC'
};

export const TOOLS = {
  MEASUREMENT: 'MEASUREMENT',
  CALCULATION: 'CALCULATION'
};

export const LANGUAGES = {
  DEFAULT: 'EN',
  ENGLISH: 'EN',
  UKRAINIAN: 'UA'
};

export const THEME_TYPES = {
  DEFAULT: 'LIGHT',
  DARK: 'DARK',
  GREY: 'GREY'
};

export const BATTERIES_TYPES = {
  LI_ION: 'LI-ION',
  LI_FE: 'LI-FE',
  PB: 'PB'
};



export const PACK_CALCULATION = {
  batteriesType: BATTERIES_TYPES.LI_ION
};

export const BATTERIES_CALCULATION = {
  containerSize: {
    width: 100,
    height: 50,
    length: 40
  },
  electricParams: {
    amps: 10,
    maxAmp: 40,
  }
};

export const COMMANDS = {
  PACK_CALCULATION_COMMAND: {
    BATTERIES_SIZE: 'BATTERIES_SIZE', // width/height/length
    BATTERIES_ELECTRICS_PARAMS: 'BATTERIES_ELECTRICS_PARAMS', // volts/amps/watts
    BATTERIES_PHYSICS_PARAMS: 'BATTERIES_PHYSICS_PARAMS', // weight/
    BATTERIES_SAFETY_PARAMS: 'BATTERIES_SAFETY_PARAMS' // charge/discharge/dangers
  },
  BATTERIES_CALCULATION_COMMAND: {
    CONTAINER_SIZE: 'CONTAINER_SIZE', // MAX width/height/length of battery container,
    ELECTRIC_PARAMS: 'ELECTRIC_PARAMS' // desired electric params of the battery pack
  }
};

export const APP_SETTINGS = {
  appState: {
    themeType: THEME_TYPES.DEFAULT,
    language: LANGUAGES.DEFAULT,
    toolbarPosition: TOOL_BAR_POSITION.LEFT,
  },
  toolsState: {
    toolsTypes: TOOLS_TYPES.ELECTRIC,
    tools: TOOLS.MEASUREMENT
  },
  calculationState: {
    batteriesCalculation: {
      // containerSize: BATTERIES_CALCULATION.containerSize,
      // electricParams: BATTERIES_CALCULATION.electricParams
    },
    packCalculation: {

    }
  },
  workSpaceState // TODO: this is how the props should be initialised
  // settings: {
  //
  // }
};

const AppConstants = {
  TOOL_BAR_POSITION
};

export default AppConstants;
