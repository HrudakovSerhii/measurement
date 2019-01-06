/**
 * Created by Serhiy on 12/6/18
 * BatteryView Component
 */

import React from 'react';

import BatteryFaceView from './components/BatteryFaceView';
import BatteryTopView from './components/BatteryTopView';
import BatteryBottomView from './components/BatteryBottomView';

import PropTypes from 'prop-types';

import { sizeTranslator as st }  from '../../helpers';

import './styles.scss';

import { VIEW_TYPE, BATTERY_TYPES_LIST } from '../../constants';

// TODO: Update info after detailed analise. Try to make them more informative.
/**
 * Represents a battery view
 * @param {bool} visible - visibility of component
 * @param {bool} showInfo - visibility of battery info (controlled from redux state)
 * @param {string} viewType - type of battery view look. Face, Top or Bottom view of the battery
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
    viewType: PropTypes.string,
    packNumber: PropTypes.number,
    type: PropTypes.string.isRequired,
    format: PropTypes.string.isRequired,
    schemeVisible: PropTypes.bool,
    schemaType: PropTypes.string,
    schemaData: PropTypes.object,
  };

  renderBatteryView(showInfo, type, format, viewType) {
    const { id, size, info } = BATTERY_TYPES_LIST[type][format];

    const height = viewType === VIEW_TYPE.FACE ? size.height : size.length;

    const batteryStyle = {
      width: `${st(size.width)}px`,
      height: `${st(height)}px`,
    };

    let batteryView;

    switch(viewType) {
      case VIEW_TYPE.FACE: batteryView = (
        <BatteryFaceView type={type} format={format} showInfo={showInfo} info={info} />
      ); break;
      case VIEW_TYPE.TOP: batteryView = (
        <BatteryTopView type={type} format={format} />
      ); break;
      case VIEW_TYPE.BOTTOM: batteryView = (
        <BatteryBottomView type={type} format={format} />
      ); break;
    }

    return (
      <div id={id} style={batteryStyle} className="battery-c">
        { batteryView }
      </div>
    )
  }

  renderSchemaView(type, data) {
    return <span>schema view</span>
  }

  render() {
    const { visible, showInfo, viewType, type, format, packNumber } = this.props;
    const { schemeVisible, schemaType, schemaData } = this.props;

    const renderedView = this.renderBatteryView(showInfo, type, format, viewType);
    const renderedSchemaView = this.renderSchemaView(schemaType, schemaData);

    return (
      <div key={packNumber} className="BatteryViewContainer">
        { visible && renderedView }
        { schemeVisible && renderedSchemaView }
      </div>
    )
  }
}
