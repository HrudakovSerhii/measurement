/**
 * Created by Serhiy on 11/12/18
 */

import React from 'react';

// import PropTypes from 'prop-types';



import { InputField, DropDownSelect } from './../../components';

// constants
import { BATTERY_TYPES_LIST } from './../../constants';

import './styles.scss';

class SimpleCalculationScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userPowerValue: undefined,
      userCurrentValue: undefined,
    };

    this.selectItem = this.selectItem.bind(this);
  }

  selectItem(item) {

  }

  render() {
    const { userPowerValue, userCurrentValue } = this.state;

    return (
      <div className="SimpleCalculationScreenContainer">
        <InputField value={userPowerValue} label={'Power (Watt/H)'} placeholder={'Input power value for target device'} />
        <InputField value={userCurrentValue} label={'Current (Volts)'} placeholder={'Input current value for target device'} />
        <DropDownSelect label={'Choose your battery type'} dataList={BATTERY_TYPES_LIST} onChange={this.selectItem}/>
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

SimpleCalculationScreen.propTypes = {

};

export default SimpleCalculationScreen;

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