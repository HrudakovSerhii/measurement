/**
 * Created by Serhiy on 22.10.18
 */

import React from 'react';
import PropTypes from 'prop-types';

// styles
import '../styles.scss';

export default class MenuDropDownItem extends React.Component {
  static propTypes = {
    clickCallback: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired,
    closeOtherOptionViews: PropTypes.func,
    selected: PropTypes.bool,
    index: PropTypes.number
  };

  constructor(props) {
    super(props);

    this.state = {
      hintVisible: false,
      hintTimerRunning: false
    };

    this.startHintTimer = this.startHintTimer.bind(this);
    this.finishHintTimer = this.finishHintTimer.bind(this);
    this.showHint = this.showHint.bind(this);
    this.selectItem = this.selectItem.bind(this);
  }

  getHintFromTitle(title) {
    // logic to load hint for a item when user point on it more then 3 sec
    return 'this is the ' + title + ' button';
  }

  showHint() {
    if (!this.state.hintVisible && this.state.hintTimerRunning) {
      this.setState({
        hintVisible: true,
        hintTimerRunning: false
      });
    }
  }

  hideHint() {
    if (this.state.hintVisible) {
      this.setState({
        hintVisible: false
      });
    }
  }

  startHintTimer() {
    if (!this.state.hintVisible && !this.state.hintTimerRunning) {
      this.setState({
        hintTimerRunning: true
      });

      setTimeout(this.showHint.bind(this), 3000);
    }
  }

  finishHintTimer() {
    if (this.state.hintTimerRunning) {
      this.setState({
        hintTimerRunning: false
      })
    }

    if (this.state.hintVisible) {
      this.hideHint();
    }
  }

  selectItem(e) {
    e.stopPropagation();

    this.props.closeOtherOptionViews(this.props.index);
  }

  render() {
    const itemHint = this.getHintFromTitle(this.props.title);

    return (
      <div className="MenuDropDownItemContainer"
           onClick={this.selectItem}
           onMouseOver={() => this.startHintTimer()}
           onMouseLeave={() => this.finishHintTimer()}>
        <span className="item-title">{this.props.title}</span>
        { this.state.hintVisible && (
          <div className="item-hint_c">
            <p>{itemHint}</p>
          </div>
        )}
      </div>
    );
  }
}
