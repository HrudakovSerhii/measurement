/**
 * Created by Serhiy on 12/17/18
 */

import React from 'react';

import PropTypes from 'prop-types';

import BatteryHorizontalPackView from './components/BatteryHorizontalPackView';

import { POSITION } from './../../constants';

import './styles.scss';

class BatteryPackView extends React.Component {
  renderHorizontalView() {
    const { cellInLine as S, parralelCells as P } = this.props;

    for(let s = 0; s < S; s += 1) {
      for(let p = 0; p < P; p += 1) {

      }
    }
  }

  renderVerticalView() {

  }

  render() {
    const { viewType } = this.props;
    const { position } = viewType;

    const batteryView = viewType.position === POSITION.HORIZONTAL ? this.renderHorizontalView() : this.renderVerticalView();

    return (
      <div className="BatteryPackViewContainer">
        { batteryView }
      </div>
    );
  }
}

BatteryPackView.propTypes = {
  viewType: PropTypes.string,
};

export default BatteryPackView;