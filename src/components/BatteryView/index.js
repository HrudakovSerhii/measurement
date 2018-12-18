/**
 * Created by Serhiy on 12/6/18
 */

import React from 'react';

import PropTypes from 'prop-types';

import './styles.scss';

import { sizeTranslator as st }  from '../../helpers';

class BatteryView extends React.Component {

  renderBatteryView(size, label) {
    const batteryStyle = {
      width: `${st(size.width)}px`,
      height: `${st(size.height)}px`,
      length: size.length && { length: `${st(size.length)}px`}
    };

    const batteryHeaderStyle = {
      backgroundImage: url(`./${type}-H`),
    };

    const batteryBodyStyle = {
      backgroundImage: url(`./${type}-B`),
    };

    const batteryFooterStyle = {
      backgroundImage: url(`./${type}-F`),
    };

    return (
      <div style={batteryStyle} className="battery-c">
        <div style={batteryHeaderStyle} className="battery-h-c"></div>
        <div style={batteryBodyStyle} className="battery-b-c">
          <label>{label}</label>
        </div>
        <div style={batteryFooterStyle} className="battery-f-c"></div>
      </div>
    )
  }

  renderSchemaView(type, data) {
    return <span>schema view</span>
  }

  render() {
    const { visible, id, label, size } = this.props;
    const { schemeVisible, schemaType, schemaData } = this.props;

    const renderedView = this.renderBatteryView(size, label);
    const renderedSchemaView = this.renderSchemaView(schemaType, schemaData);

    return (
      <div key={id} className="BatteryViewContainer">
        { visible && renderedView }
        { schemeVisible && renderedSchemaView }
      </div>
    )
  }
}

BatteryView.propTypes = {
  id: PropTypes.number,
  visible: PropTypes.bool,
  label: PropTypes.string,
  size: PropTypes.object,
  schemeVisible: PropTypes.bool,
  schemaType: PropTypes.string,
  schemaData: PropTypes.object,
};

export default BatteryView;