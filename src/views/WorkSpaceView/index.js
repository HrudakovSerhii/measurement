/**
 * Created by Serhiy on 03.10.18
 */

import React from 'react';

import { LevelControl, CalculatedPackView } from '../../components';

import './styles.css';

export default class WorkspaceView extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      type: this.props.type,
      mode: this.props.mode,
      view: this.props.view,
      quality: this.props.quality
    }
  }

  render() {
    const className = 'workspace-view-c ' + this.props.position;
    const horizontalLCStyle = {
      width: '300px',
    };
    const verticalLCStyle = {
      height: '300px',
      position: 'absolute',
      left: '350px',
    };

    return (
      <div className={className}>
        <LevelControl style={verticalLCStyle} enabled minValue={1} maxValue={5} currentValue={3} type="vertical" />
        <CalculatedPackView />
        <LevelControl style={horizontalLCStyle} enabled minValue={1} maxValue={5} currentValue={3} type="horizontal" />
      </div>
    );
  }
}