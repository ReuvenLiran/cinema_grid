import React from 'react';
import PropTypes from 'prop-types';

const InputField = (props) => {
  const {
    placeHolder,
    onChange,
    onChangedValue,
    value,
  } = props;

  return (
    <input
      type="text"
      value={value}
      className="form-control"
      placeholder={placeHolder}
      onChange={(e) => {
        if (onChange) {
          onChange(e);
        }
        const newVal = e.target.value;
        onChangedValue(newVal);
      }}
    />
  );
};

InputField.propTypes = {
  onChange: PropTypes.func,
  onChangedValue: PropTypes.func,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
  placeHolder: PropTypes.string,
};

InputField.defaultProps = {
  placeHolder: '',
  onChange: () => {},
  onChangedValue: () => {},
};

export default InputField;
