/**
 * Created by Serhiy on 11/12/18
 */

import React from 'react';

import PropTypes from 'prop-types';

import './styles.scss';

class SimpleCalculationScreen extends React.Component {
  render() {
    return (
      <div className="SimpleCalculationScreenContainer">

      </div>
    );
  }
}

SimpleCalculationScreen.propTypes = {

};

export default SimpleCalculationScreen;

//тормозити виконання важконавантаженного потоку по сигналу контроллера. Таким чином буде можливо керування швидкодією
// программи, і продовжувати вчасно реагувати на дії юзера. Фактично в будь який момент інтеракції, программа може
// призупинити виконання потоку що відбувається в бекграунді. І одразу ж підключитись для обробки операції на відповідь
// у дії користувача. Звісно, цей імпрувмент як один з варіантів пришвидшення роботи программи на етапі завантаження(старту).

// Я вирішив не використовувати підхід за ReactNative у випадку з React. Структура файлів та мопонентів буде застосовуватись,
// але стилі будуть *.scss формату, так як рівень підказок у випадку з JS проектом для стилів, вищій.
// АЛЕ! У випадку якщо проект розробляється у двох версіях (мобільний та браузерний варіант), доцільніше буде описувати стилі
// для деяких компонентів у одному стилі. В такому випадку підхід ReactNative для стилів вважається вірним у застосуванні.
// Також, при застосуванні scss формату стилів, можна інкапсулювати найпростіші стилі у назві компоненту (що фактично рахується
// сумішю ReactNative та стандартного підходу для будови та написання стилів.