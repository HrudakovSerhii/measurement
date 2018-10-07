/**
 * Created by Serhiy on 03.10.18
 */

import React from 'react';

import './styles.css';

export default class ToolsView extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      position: this.props.position,
      toolsTypes: this.props.toolsTypes,
      tools: this.props.tools
    }
  }

  render() {
    let styles = 'tools-view-c ' + this.props.position;

    return (
      <div className={styles}>

      </div>
    );
  }
}