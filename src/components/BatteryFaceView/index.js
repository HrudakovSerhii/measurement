/**
 * Created by Serhiy on 12/6/18
 */

import React from 'react';

import PropTypes from 'prop-types';

import './styles.scss';

import { sizeTranslator as st }  from '../../helpers';

import { BATTERY_TYPES_LIST } from '../../constants';

// TODO: Update info after detailed analise. Try to make them more informative.
/**
 * Represents a battery view
 * @param {bool} visible - visibility of component
 * @param {bool} showInfo - visibility of battery info (controlled from redux state)
 * @param {number} packNumber - number of the buttery in a pack (used to manipulate with schema connection)
 * @param {string} type - type of the battery (Li-Ion, NiMg, LTO ets)
 * @param {string} format - form factor of the battery (original physical size)
 * @param {bool} schemeVisible - visibility of scheme connection view
 * @param {string} schemaType - type of battery connection in the pack
 * @param {object} schemaData - information used for representing connection to the battery in the pack
 */
export default class extends React.Component {
  static propTypes = {
    visible: PropTypes.bool,
    showInfo: PropTypes.bool,
    packNumber: PropTypes.number,
    type: PropTypes.string.isRequired,
    format: PropTypes.string.isRequired,
    schemeVisible: PropTypes.bool,
    schemaType: PropTypes.string,
    schemaData: PropTypes.object,
  };

  renderInfoContainer(type, format, power, current) {
    const labelStyle = { fontSize: `${st(5)}px`};

    return (
      <div className="info-c">
        <label style={labelStyle}>{type}</label>
        <label style={labelStyle}>{format}</label>
        <label style={labelStyle}>{power}</label>
        <label style={labelStyle}>{current}</label>
      </div>
    );
  }

  renderBatteryView(showInfo, type, format) {
    const { id, size, info } = BATTERY_TYPES_LIST[type][format];
    const { power, current } = info;

    const batteryStyle = {
      width: `${st(size.width)}px`,
      height: `${st(size.height)}px`,
    };

    return (
      <div id={id} style={batteryStyle} className="battery-c">
        <img alt="battery-head" src={`../images/${format}-H.png`} />
        <div className="battery-b-c">
          <img alt="battery-body" src={`../images/${format}-B.png`} />
          { showInfo && this.renderInfoContainer(type, format, power, current) }
        </div>
        <img alt="battery-foot" src={`../images/${format}-F.png`} />
      </div>
    )
  }

  renderSchemaView(type, data) {
    return <span>schema view</span>
  }

  render() {
    const { visible, showInfo, type, format, packNumber } = this.props;
    const { schemeVisible, schemaType, schemaData } = this.props;

    const renderedView = this.renderBatteryView(showInfo, type, format);
    const renderedSchemaView = this.renderSchemaView(schemaType, schemaData);

    return (
      <div key={packNumber} className="BatteryViewContainer">
        { visible && renderedView }
        { schemeVisible && renderedSchemaView }
      </div>
    )
  }
}
