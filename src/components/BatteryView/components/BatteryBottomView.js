/**
 * Created by Serhiy on 1/6/19
 * BatteryBottomView Component
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
    const { id, width, height, format } = this.props;
    const batteryStyle = {
      width: `${st(width)}px`,
      height: `${st(height)}px`,
    };

    return (
      <div id={id} style={batteryStyle} className="battery-c">
        <img alt="battery-bottom" src={`../images/${format}-Bottom.png`} />
      </div>
    );
  }
}
