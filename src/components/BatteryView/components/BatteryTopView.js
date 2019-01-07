/**
 * Created by Serhiy on 1/6/19
 * BatteryTopView Component
 */

import React from 'react';

import PropTypes from 'prop-types';

import { sizeTranslator as st }  from '../../../helpers';

export default class extends React.Component {
  static propTypes = {
    width: PropTypes.number,
    height: PropTypes.number,
    format: PropTypes.string.isRequired,
  };

  render() {
    const { width, height, format } = this.props;
    const batteryStyle = {
      width: `${st(width)}px`,
      height: `${st(height)}px`,
    };

    return (
      <div style={batteryStyle} className="battery-c">
        <img alt="battery-top" src={`../images/${format}-Top.png`} />
      </div>
    );
  }
}
