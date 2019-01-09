/**
 * Created by Serhiy on 12/6/18
 * BatteryView Component
 */

import React from 'react';

import _ from 'lodash';

import BatteryFaceView from './components/BatteryFaceView';
import BatteryTopView from './components/BatteryTopView';
import BatteryBottomView from './components/BatteryBottomView';

import PropTypes from 'prop-types';

import './styles.scss';

import { VIEW_TYPE, BATTERIES_TYPES_LIST, BATTERIES_FORMAT_LIST } from '../../constants';

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
    viewType: PropTypes.string,
    id: PropTypes.number,
    typeId: PropTypes.number.isRequired,
    formatId: PropTypes.number.isRequired,
    infoVisible: PropTypes.bool,
    infoData: PropTypes.object,
    schemeVisible: PropTypes.bool,
    schemaType: PropTypes.string,
    schemaData: PropTypes.object,
  };

  getDataFromId(array, id) {
    return _.find(array, (item) => item.id === id);
  }

  renderBatteryView(typeId, formatId, viewType, infoVisible, infoData) {
    const typeObj = this.getDataFromId(BATTERIES_TYPES_LIST, typeId);
    const formatObj = this.getDataFromId(BATTERIES_FORMAT_LIST, formatId);

    const { type } = typeObj;
    const { size, format } = formatObj;

    const height = viewType === VIEW_TYPE.FACE ? size.height : size.length;

    switch(viewType) {
      case VIEW_TYPE.FACE: return (
        <BatteryFaceView width={size.width} height={height} type={type} format={format} showInfo={infoVisible} info={infoData} />
      );
      case VIEW_TYPE.TOP: return (
        <BatteryTopView width={size.width} height={height} format={format} />
      );
      case VIEW_TYPE.BOTTOM: return (
        <BatteryBottomView width={size.width} height={height} format={format} />
      );
      default:
        return (
          <BatteryFaceView width={size.width} height={height} type={type} format={format} showInfo={infoVisible} info={infoData} />
        );
    }
  }

  renderSchemaView(type, data) {
    return <span>schema view</span>
  }

  render() {
    console.log(this.props);
    const { id, visible, viewType, typeId, formatId, infoVisible, infoData } = this.props;
    const { schemeVisible, schemaType, schemaData } = this.props;

    const renderedView = this.renderBatteryView(typeId, formatId, viewType, infoVisible, infoData);
    const renderedSchemaView = this.renderSchemaView(schemaType, schemaData);

    return (
      <div key={id} className="BatteryViewContainer">
        { visible && renderedView }
        { schemeVisible && renderedSchemaView }
      </div>
    )
  }
}
