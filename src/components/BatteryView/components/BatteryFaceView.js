/**
 * Created by Serhiy on 1/6/19
 * BatteryFaceView Component
 */

import React from 'react';

import PropTypes from 'prop-types';

import { BATTERY_LABEL_BASE_FONT_SIZE } from '../../../constants';

import { sizeTranslator as st }  from '../../../helpers';

export default class extends React.Component {
  static propTypes = {
    width: PropTypes.number,
    height: PropTypes.number,
    type: PropTypes.string,
    format: PropTypes.string.isRequired,
    showInfo: PropTypes.bool,
    infoData: PropTypes.object,
  };

  renderInfoContainer(type, format, power, current) {
    const labelStyle = { fontSize: `${st(BATTERY_LABEL_BASE_FONT_SIZE)}px`};

    return (
      <div className="info-c">
        <label style={labelStyle}>{type}</label>
        <label style={labelStyle}>{format}</label>
        <label style={labelStyle}>{power}</label>
        <label style={labelStyle}>{current}</label>
      </div>
    );
  }

  render() {
    const { width, height, type, format, showInfo, infoData } = this.props;
    const { power, current } = infoData;

    const batteryStyle = {
      width: `${st(width)}px`,
      height: `${st(height)}px`,
    };

    return (
      <div style={batteryStyle} className="battery-c">
        <img alt="battery-head" src={`../images/${format}-Head.png`} />
        <div className="battery-b-c">
          <img alt="battery-body" src={`../images/${format}-Body.png`} />
          { showInfo && this.renderInfoContainer(type, format, power, current) }
        </div>
        <img alt="battery-foot" src={`../images/${format}-Footer.png`} />
      </div>
    )
  }
}
