/**
 * Created by Serhiy on 03.10.18
 */

import React from 'react';
import MenuDropDownItem from '../../components/MenuDropDownItem/MenuDropDownItem';
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

  clickOnIt(title) {
    console.log(title);
  }

  render() {
    console.log(this.props.position)
    let styles = 'tools-view-c ' + this.props.position.toString();

    return (
      <div className={styles}>
        <MenuDropDown title="Menu"/>
      </div>
    );
  }
}