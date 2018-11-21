/**
 * Created by Serhiy on 11/18/18
 */

import React from 'react';

import PropTypes from 'prop-types';

import './styles.scss';

class DropDownSelect extends React.Component {
  render() {
    const { label, dataList, onChange } = this.props;

    const items = dataList.map((item) => {
      return <option key={item.id} value={item.id} className="select-item">{item.label}</option>
    });

    return (
      <div className="DropDownSelectContainer">
        <span className="label">{label}</span>
        <select onChange={(e) => onChange(e.target.value)}>{items}</select>
      </div>
    );
  }
}

DropDownSelect.propTypes = {
  label: PropTypes.string,
  dataList: PropTypes.array,
  onChange: PropTypes.func,
};

export default DropDownSelect;