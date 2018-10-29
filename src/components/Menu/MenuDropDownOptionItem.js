/**
 * Created by Serhiy on 29.10.18
 */

import React from 'react';
import PropTypes from 'prop-types';

// styles
import './styles.scss';

export default class MenuDropDownOptionItem extends React.Component {
  static propTypes = {
    clickCallback: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired,
  };

  constructor(props) {
    super(props);

    this.state = {
      selected: false,
      hintVisible: false,
      hintTimerRunning: false
    };
  }

  render() {
    return (
      <div className="MenuDropDownOptionItemContainer"
           onClick={(e) => this.props.clickCallback(e, this.props.title)}>
        <span className="item-title">{this.props.title}</span>
        { this.state.hintVisible && (
          <div className="item-hint_c">
            <p>{'ss'}</p>
          </div>
        )}
      </div>
    );
  }
}