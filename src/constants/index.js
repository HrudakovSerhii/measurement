/**
 * Created by Serhiy on 03.10.18.
 */

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

export const APP_SETTINGS = {
  appState: {
    loaded: false,
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

    },
    packCalculation: {

    }
  },
  workSpaceState: {
    type: 'SCHEMATIC',
    mode: 'CALCULATION',
    view: '3D',
    quality: 'BEST'
  },
  settings: {

  }
};

const AppConstants = {
  TOOL_BAR_POSITION
};

export default AppConstants;
