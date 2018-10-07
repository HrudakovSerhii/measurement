/**
 * Created by Serhiy on 03.10.18
 */

import React from 'react';

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

    return (
      <div className={className}>

      </div>
    );
  }
}