/**
 * Created by Serhiy on 22.10.18
 */

import React from 'react';

// Components
import MenuDropDownItem from '../MenuDropDownItem/MenuDropDownItem';

// Styles
import './styles.scss';

export default class MenuDropDown extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      opened: false,
    };

    this.dropDownMenuHandler = this.dropDownMenuHandler.bind(this);
  }

  menuItemClick(e, title) {
    e.stopPropagation();

    console.log(title);
  }

  dropDownMenuHandler() {
    this.setState({
      opened: !this.state.opened
    })
  }

  render() {
    const { items, title } = this.props;
    const menuItems = items && items.map((title) => <MenuDropDownItem key={title} clickCallback={this.menuItemClick} title={title}/>);
    const dropDownStyle = 'dropDown_c ' + (this.state.opened ? 'open' : 'closed');

    return (
      <div className='MenuDropDownContainer' onClick={this.dropDownMenuHandler}>
        <span>{title}</span>
        <div className={dropDownStyle}>
          <ul>{menuItems}</ul>
        </div>
      </div>
    );
  }
}