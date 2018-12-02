/**
 * Created by Serhiy on 11/28/18
 */

import React from 'react';

// libraries
import PropTypes from 'prop-types';

import './styles.scss';

class LevelControl extends React.Component {
  constructor(props) {
    super(props);

    const { minValue, maxValue, currentValue } = this.props;

    this.state = {
      currentValue,
      optionList: this.createOptionList(minValue, maxValue, currentValue),
    };
  }

  createOptionList(minValue, maxValue, currentValue) {
    const optionList = [];
    let value = minValue;

    for(value; value <= maxValue; value += 1) {
      let className = '';
      let onClickCallback;

      if (value === minValue) {
        className = 'start';
        onClickCallback = this.onStartClick.bind(this);
      } else if (value === maxValue ) {
        className = 'end';
        onClickCallback = this.onEndClick.bind(this);
      }

      if (value === currentValue) {
        className += ' current';
        onClickCallback = this.onCurrentClick.bind(this);
      }

      optionList.push({
        className,
        value,
        onClickCallback
      });
    }

    return optionList;
  }

  getElementContainer(className, value, onClickCallback) {
    return (
      <div key={`reg-${value}`} onClick={onClickCallback} className={`${className} element-c`}>
        { value }
      </div>
    )
  }

  onStartClick(e) {
    e.stopPropagation();

    const { minValue, maxValue } = this.props;

    if (minValue < this.state.currentValue) {
      const currentValue = this.state.currentValue - 1;

      this.setState({
        currentValue,
        optionList: this.createOptionList(minValue, maxValue, currentValue),
      })
    }
  }

  onEndClick(e) {
    e.stopPropagation();

    const { minValue, maxValue } = this.props;

    if (maxValue > this.state.currentValue) {
      const currentValue = this.state.currentValue + 1;

      this.setState({
        currentValue,
        optionList: this.createOptionList(minValue, maxValue, currentValue),
      })
    }
  }

  onCurrentClick(e) {
    console.log(e)
  }

  getOptionListView(optionList) {
    return optionList.map((item) => {
      return this.getElementContainer(item.className, item.value, item.onClickCallback);
    });
  }

  render() {
    const { enabled, style, type = 'horizontal' } = this.props;
    const optionListView = this.getOptionListView(this.state.optionList);

    return (
      <div style={style} className="LevelControlContainer">
        <ul className={`${type} variants-list`}>
          {enabled && optionListView }
        </ul>
      </div>
    );
  }
}

LevelControl.propTypes = {
  minValue: PropTypes.number,
  maxValue: PropTypes.number,
  currentValue: PropTypes.number,
  enabled: PropTypes.bool,
  style: PropTypes.object
};

export default LevelControl;