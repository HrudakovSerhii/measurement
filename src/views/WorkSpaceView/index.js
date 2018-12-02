/**
 * Created by Serhiy on 03.10.18
 */

import React from 'react';

import { LevelControl } from '../../components';

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
    const levelControlStyle = {
      width: '200px',
      height: '40px'
    };

    return (
      <div className={className}>
        <LevelControl style={levelControlStyle} enabled minValue={1} maxValue={5} currentValue={3} />
      </div>
    );
  }
}