/**
 * Created by Serhiy on 03.10.18.
 */
import workSpaceState from '../views/WorkSpaceView/constants';

/*
 * App settings constants
 */
export const TOOL_BAR_POSITION = {
  LEFT: 'left',
  RIGHT: 'right',
  UP: 'up',
  DOWN: 'down'
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
export const MENU_TYPES = {
  ENABLED: 'ENABLED',
  DISABLED: 'DISABLED',
  HAS_OPTIONS: 'HAS_OPTIONS'
};

/*
 * App tools constants
 */
export const TOOLS_TYPES = {
  ELECTRIC: 'ELECTRIC'
};

export const TOOLS = {
  MEASUREMENT: 'MEASUREMENT',
  CALCULATION: 'CALCULATION'
};

/*
 * App view constants
 */
export const FILE_MENU = {
  TITLE: 'File',
  MENU: [
    {
      title: 'New',
      type: MENU_TYPES.HAS_OPTIONS,
      options: [
        {
          title: 'File'
        },
        {
          title: 'Project'
        }
      ]
    },
    {
      title: 'newDivider'
    },
    {
      title: 'Open',
      type: MENU_TYPES.ENABLED
    },
    {
      title: 'Open Recent',
      type: MENU_TYPES.HAS_OPTIONS,
      options: [
        {
          title: 'File'
        },
        {
          title: 'Project'
        }
      ]
    },
    {
      title: 'openDivider'
    },
    {
      title: 'Save',
      type: MENU_TYPES.ENABLED
    },
    {
      title: 'Save as..',
      type: MENU_TYPES.HAS_OPTIONS,
      options: [
        {
          title: 'As file'
        },
        {
          title: 'As pdf'
        },
        {
          title: 'As scheme'
        }
      ]
    },
    {
      title: 'saveDivider'
    },
    {
      title: 'Print',
      type: MENU_TYPES.ENABLED
    },
    {
      title: 'Send',
      type: MENU_TYPES.HAS_OPTIONS,
      options: [
        {
          title: 'As file'
        },
        {
          title: 'As pdf'
        },
        {
          title: 'As scheme'
        }
      ]
    }
  ]
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

export const POSITION = {
  HORIZONTAL: 'HORIZONTAL',
};

export const COEFFICIENT = 1.5;

/*
 * App batteries constants
 */
// TODO: Update list according to the new structure
export const LI_ION_PARAMS_LIST = {
  '18650': {
    id: 1,
    size: {
      width: 18,
      length: 18,
      height: 65,
    },
    info: {
      current: 20,
      power: 3000,
    }
  }
};

// TODO: Update size option
// export const LI_ION_PARAMS_LIST = [
//   {
//     format: '18650',
//     size: {
//       width: 18,
//       length: 18,
//       height: 65,
//     }
//   },
//   {
//     format: '10440',
//     size: {
//       width: 10,
//       height: 10,
//       length: 440,
//     }
//   },
//   {
//     format: '14430',
//     size: {
//       width: 14,
//       height: 14,
//       length: 430,
//     }
//   },
//   {
//     format: '14500',
//     size: {
//       width: 14,
//       height: 14,
//       length: 500,
//     }
//   },
//   {
//     format: '14650',
//     size: {
//       width: 14,
//       height: 14,
//       length: 650,
//     }
//   },
//   {
//     format: '17500',
//     size: {
//       width: 17,
//       height: 17,
//       length: 500,
//     }
//   },
//   {
//     format: '20700',
//     size: {
//       width: 20,
//       height: 20,
//       length: 700,
//     }
//   },
//   {
//     format: '21700',
//     size: {
//       width: 21,
//       height: 21,
//       length: 700,
//     }
//   }
// ];
export const LI_PO_PARAMS_LIST = [
  {
    format: '18650',
    id: 1,
    size: {
      width: 18,
      height: 18,
      length: 650,
    },
  }
];

// TODO: Update list according to the new structure
export const BATTERY_TYPES_LIST = {
  'Li-ion': LI_ION_PARAMS_LIST
};

// export const BATTERY_TYPES_LIST = [
//   {
//     type: 'Li-ion',
//     id: 1,
//     params: LI_ION_PARAMS_LIST,
//   },
//   {
//     type: 'LiPo',
//     id: 2,
//     params: LI_PO_PARAMS_LIST,
//   },
//   {
//     type: 'LiFePO4',
//     id: 3,
//   },
//   {
//     type: 'LTO',
//     id: 4,
//   }
// ];


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
