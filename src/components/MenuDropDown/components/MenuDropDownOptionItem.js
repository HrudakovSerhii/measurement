/**
 * Created by Serhiy on 29.10.18
 */

import React from 'react';
import PropTypes from 'prop-types';

import MenuDropDownItem from './MenuDropDownItem';

// styles
import '../styles.scss';

export default class MenuDropDownOptionItem extends React.Component {
  static propTypes = {
    clickCallback: PropTypes.func.isRequired,
    closeOtherOptionViews: PropTypes.func,
    title: PropTypes.string.isRequired,
    options: PropTypes.array.isRequired,
    selected: PropTypes.bool,
    index: PropTypes.number
  };

  state = {
    optionVisible: this.props.selected,
  };

  menuItemOptionItemCallback(e, title) {
    e.stopPropagation();

    console.log(title);
  }

  openOptionItem(e) {
    e.stopPropagation();

    this.props.closeOtherOptionViews(this.props.index);

    this.setState({ optionVisible: !this.state.optionVisible});
  }

  componentDidUpdate(prevProps) {
    if (this.props.selected !== prevProps.selected) {
      this.setState({ optionVisible: this.props.selected})
    }
  }

  render() {
    const { title, options } = this.props;
    const optionsItems = options && options.map((item) => (<MenuDropDownItem key={item.title} clickCallback={this.menuItemOptionItemCallback} title={item.title} />));

    return (
      <div className="MenuDropDownOptionItemContainer"
           onClick={(e) => this.openOptionItem(e)}>
        <span className="item-title">{title}</span>
        { this.state.optionVisible && (
          <div className="item-option-list">
            <ul>
            { optionsItems }
            </ul>
          </div>)
        }
      </div>
    );
  }
}