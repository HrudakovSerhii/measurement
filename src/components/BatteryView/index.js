/**
 * Created by Serhiy on 12/6/18
 * BatteryView Component
 */

import React from 'react';

import _ from 'lodash';

import PropTypes from 'prop-types';

import { sizeTranslator as st }  from '../../helpers';

import './styles.scss';

import { VIEW_TYPE, BATTERIES_TYPES_LIST, BATTERIES_FORMAT_LIST, BATTERY_LABEL_BASE_FONT_SIZE } from '../../constants';

// TODO: Update info after detailed analise. Try to make them more informative.
/**
 * Represents a battery view
 * @param {string} id - string id of the battery view
 * @param {bool} visible - visibility of component
 * @param {bool} showInfo - visibility of battery info (controlled from redux state)
 * @param {string} viewType - type of battery view look. Face, Top or Bottom view of the battery
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
    id: PropTypes.string,
    typeId: PropTypes.number.isRequired,
    formatId: PropTypes.number.isRequired,
    infoVisible: PropTypes.bool,
    schemeVisible: PropTypes.bool,
    schemaType: PropTypes.string,
    schemaData: PropTypes.object,
  };

  getDataFromId(array, id) {
    return _.find(array, (item) => item.id === id);
  }

  renderInfoContainer(type, format, power) {
    const labelStyle = { fontSize: `${st(BATTERY_LABEL_BASE_FONT_SIZE)}px`};

    return (
      <div className="info-c">
        <label style={labelStyle}>{type}</label>
        <label style={labelStyle}>{format}</label>
        <label style={labelStyle}>{power}</label>
      </div>
    );
  }

  renderBatteryFaceView(type, format, infoVisible, info) {
    const { volts } = info;
    const { nom } = volts;

    return (
      <div className="battery-c">
        <img alt="battery-head" src={`../images/${format}-Head.png`} />
        <div className="battery-b-c">
          <img alt="battery-body" src={`../images/${format}-Body.png`} />
          { infoVisible && this.renderInfoContainer(type, format, nom) }
        </div>
        <img alt="battery-foot" src={`../images/${format}-Footer.png`} />
      </div>
    )
  }

  renderBatteryBottomView(format) {
    return (
      <div className="battery-c">
        <img alt="battery-bottom" src={`../images/${format}-Bottom.png`} />
      </div>
    )
  }

  renderBatteryTopView(format) {
    return (
      <div className="battery-c">
        <img alt="battery-top" src={`../images/${format}-Top.png`} />
      </div>
    )
  }

  renderBatteryView(type, format, viewType, infoVisible, info) {
    switch(viewType) {
      case VIEW_TYPE.FACE  : return this.renderBatteryFaceView(type, format, infoVisible, info);
      case VIEW_TYPE.TOP   : return this.renderBatteryTopView(format);
      case VIEW_TYPE.BOTTOM: return this.renderBatteryBottomView(format);
      default:
        return this.renderBatteryFaceView(type, format, infoVisible, info);
    }
  }

  renderSchemaView(type, data) {
    return <span>schema view</span>
  }

  render() {
    const { id, visible, viewType, typeId, formatId, infoVisible } = this.props;
    const { schemeVisible, schemaType, schemaData } = this.props;

    const typeObj = this.getDataFromId(BATTERIES_TYPES_LIST, typeId);
    const formatObj = this.getDataFromId(BATTERIES_FORMAT_LIST, formatId);

    const { type, info } = typeObj;
    const { size, format } = formatObj;

    const height = viewType === VIEW_TYPE.FACE ? size.height : size.length;

    const renderedView = this.renderBatteryView(type, format, viewType, infoVisible, info);
    const renderedSchemaView = this.renderSchemaView(schemaType, schemaData);

    const batteryStyle = {
      width: `${st(size.width)}px`,
      height: `${st(height)}px`,
    };

    return (
      <div key={id} style={batteryStyle} className="BatteryViewContainer">
        { visible && renderedView }
        { schemeVisible && renderedSchemaView }
      </div>
    )
  }
}
