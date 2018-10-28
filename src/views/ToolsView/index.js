/**
 * Created by Serhiy on 03.10.18
 */

import React from 'react';
import MenuDropDown from '../../components/MenuDropDown/MenuDropDown';

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
    console.log(this.props.position);

    let styles = 'tools-view-c ' + this.props.position.toString();
    const items = [
      'setting',
      'adjustments',
      'news'
    ];

    return (
      <div className={styles}>
        <MenuDropDown title="Menu" items={items}/>
      </div>
    );
  }
}