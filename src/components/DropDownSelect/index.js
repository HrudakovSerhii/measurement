/**
 * Created by Serhiy on 11/18/18
 */

import React from 'react';

import PropTypes from 'prop-types';

import './styles.scss';

class DropDownSelect extends React.Component {
  getDataList(dataList) {
    if (dataList.length && dataList[0].id) {
      dataList.unshift({ id: 0, label: 'Select value'});
    } else if (!dataList.length) {
      dataList.push({ id: 0, label: 'Select value'});
    }

    return dataList;
  }

  render() {
    const { label, dataList, onChange } = this.props;

    const itemsDataList = this.getDataList(dataList);
    const disabled = itemsDataList.length < 2;

    const items = itemsDataList && itemsDataList.map((item) => {
      return <option key={item.id} value={item.id} className="select-item">{item.label}</option>
    });

    return (
      <div className="DropDownSelectContainer">
        <span className="label">{label}</span>
        <select disabled={disabled} onChange={(e) => onChange(e.target.value)}>{items}</select>
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