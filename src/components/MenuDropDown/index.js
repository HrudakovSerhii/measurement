/**
 * Created by Serhiy on 22.10.18
 */

import React from 'react';

import PropTypes from 'prop-types';

// Components
import MenuDropDownItem from './components/MenuDropDownItem';
import MenuDropDownOptionItem from './components/MenuDropDownOptionItem';

// Constants
import { MENU_TYPES } from './../../constants';

// Styles
import './styles.scss';

export default class MenuDropDown extends React.Component {
  static propTypes = {
    items: PropTypes.array.isRequired,
    title: PropTypes.string.isRequired,
  };

  constructor(props) {
    super(props);

    this.state = {
      opened: false,
      items: this.props.items,
    };

    this.dropDownMenuHandler = this.dropDownMenuHandler.bind(this);
    this.closeOtherOptionViews = this.closeOtherOptionViews.bind(this);
  }

  menuDropDownOptionItemClick(e, title) {
    e.stopPropagation();

    console.log(title);
  }

  menuDropDownItemClick(e, title) {
    e.stopPropagation();

    console.log(title);
  }

  dropDownMenuHandler() {
    this.setState({
      opened: !this.state.opened
    })
  }

  closeOtherOptionViews(optionIndex) {
    const updatedItems =  this.state.items.map((item, index) => {
      return Object.assign({}, item, {
        selected: optionIndex === index
      });
    });

    this.setState({
      items: updatedItems
    });
  }

  getMenuItemByType(type, itemData, index) {
    switch (type) {
      case MENU_TYPES.ENABLED:
      case MENU_TYPES.DISABLED:
        return (<MenuDropDownItem key={itemData.title}
                                  clickCallback={this.menuDropDownItemClick}
                                  closeOtherOptionViews={this.closeOtherOptionViews}
                                  index={index}
                                  title={itemData.title}
                                  selected={itemData.selected}
                                  disabled={type === MENU_TYPES.DISABLED} />);
      case MENU_TYPES.HAS_OPTIONS:
        return (<MenuDropDownOptionItem key={itemData.title}
                                        clickCallback={this.menuDropDownOptionItemClick}
                                        closeOtherOptionViews={this.closeOtherOptionViews}
                                        index={index}
                                        title={itemData.title}
                                        options={itemData.options}
                                        selected={itemData.selected}
                                        disabled={type === MENU_TYPES.DISABLED} />);
      default:
        return (<div key={itemData.title} className='MenuDropDownItemDeviderContainer'/>);
    }
  }

  render() {
    const { title } = this.props;

    const menuItems = this.state.items && this.state.items.map((item, index) => this.getMenuItemByType(item.type, item, index));
    const dropDownStyle = 'DropDownContainer ' + (this.state.opened ? 'open' : 'closed');

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