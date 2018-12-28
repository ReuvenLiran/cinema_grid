import React from 'react';
import PropTypes from 'prop-types';

const InputField = props => {
    const { 
        placeHolder,
        onChange,
        value,
    } = props;
    return (<input
        type="text"
        value={value}
        className="form-control" 
        placeholder={placeHolder} 
        onChange={onChange}
    />);
};

InputField.propTypes = {
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
    placeHolder: PropTypes.string.isRequired,
};

export default InputField;