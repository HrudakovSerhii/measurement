/**
 * Created by Serhiy on 22.10.18
 */

import React from 'react';

// Components
import MenuDropDownItem from './MenuDropDownItem';
import MenuDropDownOptionItem from './MenuDropDownOptionItem';
import MenuDropDownItemDevider from './MenuDropDownItemDevider';

// Constants
import { MENU_TYPES } from './../../constants';

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

  getMenuItemByType(type, title) {
    switch (type) {
      case MENU_TYPES.ENABLED:
      case MENU_TYPES.DISABLED:
        return (<MenuDropDownItem key={title} clickCallback={this.menuItemClick} title={title} disabled={type === MENU_TYPES.DISABLED} />); break;
      case MENU_TYPES.HAS_OPTIONS:
        return (<MenuDropDownOptionItem key={title} clickCallback={this.menuItemClick} title={title} disabled={type === MENU_TYPES.DISABLED} />); break;
      default:
        return (<MenuDropDownItemDevider/>); break;
    }
  }

  render() {
    const { items, title } = this.props;

    const menuItems = items && items.map((item) => this.getMenuItemByType(item.type, item.title));
    const dropDownStyle = 'dropDown_c ' + (this.state.opened ? 'open' : 'closed');

    return (
      <div className='MenuDropDownContainer' onClick={this.dropDownMenuHandler}>
        <span>{title}</span>
        <div className={dropDownStyle}>
          {this.state.opened && menuItems}
        </div>
      </div>
    );
  }
}