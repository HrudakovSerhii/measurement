/**
 * Created by Serhiy on 22.10.18
 */

import React from 'react';
import PropTypes from 'prop-types';

// styles
import './styles.scss';

export default class MenuDropDownItem extends React.Component {
  static propTypes = {
    clickCallback: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired
  };

  constructor(props) {
    super(props);

    this.state = {
      selected: false,
      hintVisible: false,
      hintTimerRunning: false
    };

    this.startHintTimer = this.startHintTimer.bind(this);
    this.finishHintTimer = this.finishHintTimer.bind(this);
    this.showHint = this.showHint.bind(this);
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

  render() {
    const itemHint = this.getHintFromTitle(this.props.title);

    return (
      <div className='MenuDropDownItemContainer'
           onClick={(e) => this.props.clickCallback(e, this.props.title)}
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