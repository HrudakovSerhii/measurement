/**
 * Created by Serhiy on 11/12/18
 * SimpleCalculationScreen component
 */

import React from 'react';

// libraries
// import PropTypes from 'prop-types';
import _ from 'lodash';

// components
import { InputField, DropDownSelect, BatteryPackView } from './../../components';

// constants
import { BATTERIES_TYPES_LIST, BATTERIES_FORMAT_LIST, VIEW_TYPE, POSITION } from './../../constants';

// import './styles.scss';

export default class extends React.Component {
  static propTypes = {

  };

  constructor(props) {
    super(props);

    this.state = {
      powerValue: undefined,
      currentValue: undefined,
      batteryTypeId: null,
      batteryFormatId: null,
    };
  }

  setData(key, value) {
    const nValue = Number(value);

    if (key === 'batteryTypeId' && !nValue) {
      this.setState({
        batteryFormatId: null,
        [key]: nValue,
      })
    } else {
      this.setState({
        [key]: nValue,
      })
    }
  }

  getBatteriesFormatList(typeId) {
    return _.filter(BATTERIES_FORMAT_LIST, (item) => {
      const { types } = item;
      return _.includes(types, Number(typeId));
    });
  }

  render() {
    const { batteryTypeId, batteryFormatId } = this.state;
    const batteriesFormatList = this.getBatteriesFormatList(batteryTypeId);

    return (
      <div className="SimpleCalculationScreenContainer">
        <InputField label={'Power (Watt/H)'} placeholder={'Input power value for target device'} onInput={(text) => this.setData('powerValue', text)}/>
        <InputField label={'Current (Volts)'} placeholder={'Input current value for target device'} onInput={(text) => this.setData('currentValue', text)}/>
        <DropDownSelect label={'Choose your battery type'} dataList={BATTERIES_TYPES_LIST} onChange={(type) => this.setData('batteryTypeId', type)}/>
        <DropDownSelect label={'Choose your battery format'} dataList={batteriesFormatList} onChange={(format) => this.setData('batteryFormatId', format)}/>
        { batteryTypeId && batteryFormatId && (
          <BatteryPackView id={1}
                           visible
                           viewType={VIEW_TYPE.FACE}
                           viewPosition={POSITION.VERTICAL}
                           typeId={batteryTypeId}
                           formatId={batteryFormatId}
                           sValue={3}
                           pValue={2}
                           packNumber={1} />
        )}
      </div>
    );
  }
}
