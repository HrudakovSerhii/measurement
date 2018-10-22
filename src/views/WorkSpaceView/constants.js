/**
 * Created by Serhiy on 10.10.18.
 */
export const VIEW_MODE = {
  VIEWING: 'VIEWING',
  CALCULATION: 'CALCULATION',
  MEASUREMENT: 'MEASUREMENT'
};

export const VIEW_TYPE = {
  SCHEMATIC: 'SCHEMATIC',
  VOLUME: 'VOLUME'
};

export const VIEW_QUALITY = {
  BEST: 'BEST',
  NORMAL: 'NORMAL',
  POOR: 'POOR'
};

const workSpaceState = {
  workSpaceType: VIEW_TYPE.VOLUME,
  workSpaceMode: VIEW_MODE.VIEWING,
  workSpaceQuality: VIEW_QUALITY.NORMAL,
  isViewIn3D: false,
};

export default workSpaceState;