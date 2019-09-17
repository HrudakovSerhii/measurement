/**
 * Created by Serhiy on 2/2/19.
 */

import React from 'react';

import PropTypes from 'prop-types';

// styles
import './styles.scss';

class CheckboxField extends React.Component {
  render() {
    const { label, value, onChange } = this.props;

    return (
      <div className='CheckboxFieldContainer'>
        <span className="label">{label}</span>
        <input className="textInput"
               type="checkbox"
               onChange={(e) => onChange(e.target.value)}
               value={value}
        />
      </div>
    );
  }
}

CheckboxField.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export default CheckboxField;