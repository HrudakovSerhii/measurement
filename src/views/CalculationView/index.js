/**
 * Created by Serhiy on 03.10.18
 */

import React from 'react';

export default class CalculationView extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      calculationType: props.calculationType,
      calculationDevice: props.calculationDevice,
      calculationData: []
    }
  }

  render() {
    return (
      <div class='calculation-view-c'>

      </div>
    );
  }
}