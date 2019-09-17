/**
 * Created by Serhiy on 11/12/18
<<<<<<< HEAD
=======
 * SimpleCalculationScreen component
>>>>>>> simple-calculation
 */

import React from 'react';

// libraries
// import PropTypes from 'prop-types';
import _ from 'lodash';

import { ampsFromWattAndCurrent } from '../../logics/electronics';

// components
import { InputField, CheckboxField, DropDownSelect, BatteryPackView } from './../../components';

// constants
import { BATTERIES_TYPES_LIST, BATTERIES_FORMAT_LIST, VIEW_TYPE, POSITION } from './../../constants';

import './styles.scss';

export default class extends React.Component {
  static propTypes = {

  };

  constructor(props) {
    super(props);

    this.state = {
      powerValue: 1500,
      currentValue: 48,
      batteryTypeId: null,
      batteryFormatId: null,
      batteryValue: 3000,
      pValue: undefined,
      sValue: undefined,
      prefWidth: undefined,
      prefHeight: undefined,
      hasPrefSize: false,
      calculateButteriesAmount: 0,
      selectedBatteryData: {},
    };

    this.setData = this.setData.bind(this);
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

  getDataFromId(array, id) {
    return _.find(array, (item) => item.id === id);
  }

  calculatePack() {
    const { powerValue, currentValue, batteryValue, batteryTypeId } = this.state;
    const batteryObj = this.getDataFromId(BATTERIES_TYPES_LIST, batteryTypeId);
    const { info } = batteryObj;
    const { volts } = info;

    const maxAh = ampsFromWattAndCurrent(powerValue, currentValue);
    const sValue = Math.round(currentValue / volts.nom);
    const pValue = Math.round(maxAh / (batteryValue / 1000));
    const calculateButteriesAmount = sValue * pValue;

    this.setState({
      pValue,
      sValue,
      calculateButteriesAmount
    });
  }

  parametersValidator() {
    const { powerValue, currentValue, batteryValue, batteryTypeId, batteryFormatId } = this.state;

    return (powerValue && currentValue && batteryValue && batteryTypeId !== null && batteryFormatId !== null);
  }

  renderPrefSizeForms() {
    return (
      <div className="form-c">
        <InputField label={'Battery Pack width (mm)'} placeholder={'Input battery pack width in mm'} onInput={(text) => this.setData('prefWidth', text)}/>
        <InputField label={'Battery Pack Height (mm)'} placeholder={'Input battery pack height in mm '} onInput={(text) => this.setData('prefHeight', text)}/>
      </div>
    )
  }

  getBatteryPackView(viewType, viewPosition, batteryTypeId, batteryFormatId, sValue, pValue, packNumber = 0, id = 0) {
    return (
      <BatteryPackView id={id}
                       visible
                       viewType={viewType}
                       viewPosition={viewPosition}
                       typeId={batteryTypeId}
                       formatId={batteryFormatId}
                       sValue={sValue}
                       pValue={pValue}
                       packNumber={packNumber} />
    )
  }

  renderBatteryPack() {
    const { batteryTypeId, batteryFormatId, sValue, pValue, prefWidth, prefHeight, hasPrefSize} = this.state;

    if (hasPrefSize) {
      const { prefWidth, prefHeight } = this.state;

      const packViews = [];
      const batteryObj = this.getDataFromId(BATTERIES_FORMAT_LIST, batteryFormatId);
      const { size } = batteryObj;
      const { width, length, height } = size;

      return packViews;
    } else {
      return this.getBatteryPackView(VIEW_TYPE.TOP, POSITION.VERTICAL, batteryTypeId, batteryFormatId, sValue, pValue);
    }
  }

  render() {
    const { batteryTypeId, batteryFormatId, pValue, sValue, hasPrefSize } = this.state;
    const batteriesFormatList = this.getBatteriesFormatList(batteryTypeId);
    const readyToCalculate = this.parametersValidator();

    return (
      <div className="SimpleCalculationScreenContainer">
        <InputField label={'Power (Watt/H)'} placeholder={'Input power value for target device'} onInput={(text) => this.setData('powerValue', text)}/>
        <InputField label={'Current (Volts)'} placeholder={'Input current value for target device'} onInput={(text) => this.setData('currentValue', text)}/>
        <DropDownSelect label={'Choose your battery type'} dataList={BATTERIES_TYPES_LIST} onChange={(type) => this.setData('batteryTypeId', type)}/>
        <DropDownSelect label={'Choose your battery format'} dataList={batteriesFormatList} onChange={(format) => this.setData('batteryFormatId', format)}/>
        <InputField label={'Battery volume (mA)'} placeholder={'Input single battery volume in mA (XXXX)'} onInput={(text) => this.setData('batteryValue', text)}/>
        <CheckboxField label={'Set Preferable Size of the Pack'} onChange={() => this.setState({ hasPrefSize: !hasPrefSize })}/>
        { hasPrefSize && this.renderPrefSizeForms() }
        <button disabled={!readyToCalculate} onClick={() => this.calculatePack()}>Calculate</button>
        { readyToCalculate && this.renderBatteryPack() }
      </div>
    );
  }
}

//
// 1. Потужність приладу що буде використовувати акамулятор (Ватт/годину - Watt/h) = 1500
//
// 2. Величина робочої напруги (Вольт - V) = 24V
//
// 3. Номінальна сила струму (Ампер/A) = 1500/24 = 62,5A
//
// 3. Тип акамулятора Li-Ion
//
// - напруга зар/ном/розр = 4,2/3,6/2,8
//
// - потужність 2500mAh
//
// - максимальний струм 20A
//
// 4. Формфактор мм(діаметр/висота) - 18/650

// тормозити виконання важконавантаженного потоку по сигналу контроллера. Таким чином буде можливо керування швидкодією
// программи, і продовжувати вчасно реагувати на дії юзера. Фактично в будь який момент інтеракції, программа може
// призупинити виконання потоку що відбувається в бекграунді. І одразу ж підключитись для обробки операції на відповідь
// у дії користувача. Звісно, цей імпрувмент як один з варіантів пришвидшення роботи программи на етапі завантаження(старту).

// Я вирішив не використовувати підхід за ReactNative у випадку з React. Структура файлів та мопонентів буде застосовуватись,
// але стилі будуть *.scss формату, так як рівень підказок у випадку з JS проектом для стилів, вищій.
// АЛЕ! У випадку якщо проект розробляється у двох версіях (мобільний та браузерний варіант), доцільніше буде описувати стилі
// для деяких компонентів у одному стилі. В такому випадку підхід ReactNative для стилів вважається вірним у застосуванні.
// Також, при застосуванні scss формату стилів, можна інкапсулювати найпростіші стилі у назві компоненту (що фактично рахується
// сумішю ReactNative та стандартного підходу для будови та написання стилів.

// на данний момент варіант з розрахунком не циліндричного формату батарей буде відкладений на майбутнє. Такий вид розрахунку
// поки що не є необхідним функціоналом
