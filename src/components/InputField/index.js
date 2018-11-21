/**
 * Created by Serhiy on 11/12/18
 */

import React from 'react';

import PropTypes from 'prop-types';

// styles
import './styles.scss';

class InputField extends React.Component {
  render() {
    const { label, value, placeholder, onInput } = this.props;

    return (
      <div className='InputFieldContainer'>
        <span className="label">{label}</span>
        <input className="textInput"
               placeholder={placeholder}
               onInput={onInput}
               value={value}
        />
      </div>
    );
  }
}

InputField.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  onInput: PropTypes.func,
};

export default InputField;