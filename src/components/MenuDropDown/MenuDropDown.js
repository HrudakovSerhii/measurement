/**
 * Created by Serhiy on 22.10.18
 */

import React from 'react';

// Components
import MenuDropDownItem from '../MenuDropDownItem/MenuDropDownItem';

// Styles
import './styles.css';

export default class MenuDropDown extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      opened: false,
      title: props.title,
    };

    this.dropDownMenuHandler = this.dropDownMenuHandler.bind(this);
  }

  menuItemClick(title) {
    console.log(title);
  }

  dropDownMenuHandler() {
    console.log('hey')
    this.setState({
      opened: !this.state.opened
    })
  }

  render() {
    const test = [
      'setting',
      'adjustments',
      'news'
    ];

    //this.props.items
    const menuItems = test.map((title) => <MenuDropDownItem key={title} clickCallback={this.menuItemClick} title={title}/>);
    const dropDownStyle = 'dropDown_c ' + (this.state.opened ? 'open' : 'closed');

    return (
      <div className='MenuDropDownContainer' onClick={this.dropDownMenuHandler}>
        <span>{this.state.title}</span>
        <div className={dropDownStyle}>
          <ul>{menuItems}</ul>
        </div>
      </div>
    );
  }
}