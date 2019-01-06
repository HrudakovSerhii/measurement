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
    type: PropTypes.string.isRequired,
    format: PropTypes.string.isRequired,
    showInfo: PropTypes.bool,
    info: PropTypes.object,
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
    const { type, format, showInfo, info } = this.props;
    const { power, current } = info;

    return (
      <div>
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
