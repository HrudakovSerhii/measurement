/**
 * Created by Serhiy on 03.10.18.
 */

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

/*
 * App view constants
 */
export const MENU_TYPES = {
  ENABLED: 'ENABLED',
  DISABLED: 'DISABLED',
  HAS_OPTIONS: 'HAS_OPTIONS'
};

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


export const POSITION = {
  HORIZONTAL: 'HORIZONTAL',
  VERTICAL: 'VERTICAL',
};

export const VIEW_TYPE = {
  TOP: "TOP",
  BOTTOM: "BOTTOM",
  FACE: "FACE",
};

export const COEFFICIENT = 1.5;

// TODO: Think about using normal css zoom without js dynamic styles adjustments
export const BATTERY_LABEL_BASE_FONT_SIZE = 5;

/*
 * App batteries constants
 */

/**
 * Represents a battery types
 * return values:
 * id - id of the battery format
 * type {string} - type of the battery chemistry
 * info {object} - default information for specific battery format (current, voltage, power)
 */
export const BATTERIES_TYPES_LIST = [
  {
    id: 1,
    label: 'Li-ion',
    type: 'Li-ion',
    info: {
      volts: {
        nom: 3.7,
        min: 2.8,
        max: 4.2
      }
    }
  },
  {
    id: 2,
    label: 'LiPo',
    type: 'LiPo',
    info: {
      volts: {
        nom: 3.7,
        min: 3.0,
        max: 4.2
      }
    }
  },
  {
    id: 3,
    label: 'LiFePO4',
    type: 'LiFePO4',
    info: {
      volts: {
        nom: 3.2,
        min: 2.8,
        max: 4.2
      },
      charge: {
        volts: 3.4,
      }
    }
  },
  {
    id: 4,
    label: 'LTO',
    type: 'LTO',
    info: {
      volts: {
        nom: 3.2,
        min: 2.8,
        max: 4.2
      },
    }
  },
];

/**
 * Represents a battery formats
 * return values:
 * id - id of the battery format
 * format {string} - format value label
 * types {array} - list of battery type id's that are available in this format
 * size {object} - size object of the battery for specific format (real size in mm). Include height, width, length
 * info {object} - default information for specific battery format (current, voltage, power)
 */
export const BATTERIES_FORMAT_LIST = [
  {
    id: 1,
    label: '18650',
    format: '18650',
    types: [1,2,3,4],
    size: {
      width: 18,
      length: 18,
      height: 65,
    },
  },
  {
    id: 2,
    label: '10440',
    format: '10440',
    types: [1,2,3,4],
    size: {
      width: 10,
      length: 10,
      height: 44,

    },
  },
  {
    id: 3,
    label: '14430',
    format: '14430',
    types: [1,2,3,4],
    size: {
      width: 14,
      length: 14,
      height: 43,
    },
  },
  {
    id: 4,
    label: '14500',
    format: '14500',
    types: [1,2,3,4],
    size: {
      width: 14,
      length: 14,
      height: 50,
    },
  },
  {
    id: 5,
    label: '14650',
    format: '14650',
    types: [1,2,3,4],
    size: {
      width: 14,
      length: 14,
      height: 65,
    },
  },
  {
    id: 6,
    label: '17500',
    format: '17500',
    types: [1,2,3,4],
    size: {
      width: 17,
      length: 17,
      height: 50,
    },
  },
  {
    id: 7,
    label: '20700',
    format: '20700',
    types: [1,2,3,4],
    size: {
      width: 20,
      length: 20,
      height: 70,
    },
  },
  {
    id: 8,
    label: '21700',
    format: '21700',
    types: [1,2,3,4],
    size: {
      width: 21,
      length: 70,
      height: 21,
    },
  }
];

export const APP_STATE = {
  appState: {

  }
};