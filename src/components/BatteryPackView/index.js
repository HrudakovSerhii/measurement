/**
 * Created by Serhiy on 12/17/18
 */

import React from 'react';

import PropTypes from 'prop-types';
import _ from 'lodash';

import BatteryView from './../BatteryView';

import { POSITION, BATTERY_TYPES_LIST } from './../../constants';

import './styles.scss';

class BatteryPackView extends React.Component {
  constructor(props) {
    super(props);

    const { params, type } = this.getBatteryData(props.batteryType);
    const { id, format, size } = params;

    this.state = {
      packId: id,
      type,
      format,
      batterySize: size,
    }
  }

  getBatteryData(type) {
    const batteryDataIndex = _.findIndex(BATTERY_TYPES_LIST, (data) => data.id === type);

    return BATTERY_TYPES_LIST[batteryDataIndex];
  }

  renderHorizontalView() {
    const { S, P } = this.props;
    const sLine = [];
    const pLine = [];

    for(let s = 0; s < S; s += 1) {
      sLine.push()

    }
  }

  renderPLine(P, i) {
    const pLine = [];
    const { batteryId, batteryType, batteryFormat } = this.state;
    const label = this.getBatteryLabel()

    for(let p = 0; p < P; p += 1) {
      pLine.push(<BatteryView packNumber={`p${i}${p}`} type={batteryType} format={batteryFormat}/>)
    }
  }

  renderBatteryView() {
    const { batteryId, batteryType, batteryFormat, batterySize } = this.state;
  }

  renderVerticalView() {

  }

  render() {
    const { viewType, batteryType } = this.props;
    const { position } = viewType;

    const batteryView = viewType.position === POSITION.HORIZONTAL ? this.renderHorizontalView() : this.renderVerticalView();

    return (
      <div className="BatteryPackViewContainer">
        { batteryView }
      </div>
    );
  }
}

BatteryPackView.propTypes = {
  viewType: PropTypes.string,

  S: PropTypes.number,
  P: PropTypes.number,
};

export default BatteryPackView;