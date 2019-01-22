/**
 * Created by Serhiy on 12/17/18
 */

import React from 'react';

import PropTypes from 'prop-types';
import _ from 'lodash';

import BatteryView from './../BatteryView';

import { POSITION, BATTERIES_TYPES_LIST } from './../../constants';

// import './styles.scss';

/**
 * Represents a battery Pack View
 * @param {string} viewType - type of battery view look. Face, Top or Bottom view of the battery
 * @param {string} viewPosition - type of battery pack view look. Horizontal or Vertical
 * @param {number} packId - id of the pack (usable for picking pack from multiple pack block
 * @param {number} typeId - type id of the battery (Li-Ion, NiMg, LTO ets)
 * @param {number} formatId - form factor id of the battery (original physical size)
 * @param {object} packPrefSize - preferable size of the pack (width, height, length)
 * @param {number} packVoltage - preferable voltage of the pack (Volts)
 * @param {number} packPower - preferable power of the pack (Ah)
 * @param {number} packCurrent - preferable current of the pack (Ah)
 * @param {number} pValue - number of parallel connected batteries
 * @param {number} sValue - number of successively connected batteries
 */
export default class BatteryPackView extends React.Component {
  static propTypes = {
    viewType: PropTypes.string,
    viewPosition: PropTypes.string,
    packId: PropTypes.number,
    typeId: PropTypes.number,
    formatId: PropTypes.number,
    packPrefSize: PropTypes.object,
    packVoltage: PropTypes.number,
    packPower: PropTypes.number,
    packCurrent: PropTypes.number,
    pValue: PropTypes.number,
    sValue: PropTypes.number,
  };

  constructor(props) {
    super(props);

    const { packId, typeId, formatId } = this.props;

    this.state = {
      packId,
      typeId,
      formatId,
    }
  }

  renderVerticalView() {
    const { pValue, sValue, viewType } = this.props;
    const { typeId, formatId } = this.state;

    const pLine = [];

    for (let p = 0; p < pValue; p += 1) {
      const sLine = [];

      for (let s = 0; s < sValue; s += 1) {
        sLine.push(<BatteryView id={`s${s + 1}p${p + 1}`} visible typeId={typeId} formatId={formatId} viewType={viewType} />)
      }

      pLine.push(
        <div className="p-line-c" id={`p${p + 1}`}>
          { sLine }
        </div>
      );
    }

    return pLine;
  }

  renderHorizontalView() {
    const { S, P } = this.props;
    const sLine = [];
    const pLine = [];

    for(let s = 0; s < S; s += 1) {

    }
  }

  render() {
    const { viewType, viewPosition } = this.props;

    const batteryView = viewPosition === POSITION.HORIZONTAL ? this.renderHorizontalView(viewType) : this.renderVerticalView(viewType);

    return (
      <div className="BatteryPackViewContainer">
        { batteryView }
      </div>
    );
  }
}
