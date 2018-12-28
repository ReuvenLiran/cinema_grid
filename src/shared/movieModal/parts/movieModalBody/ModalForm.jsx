import React from 'react';
import PropTypes from 'prop-types';
import {
    FormGroup,
    InputField,
} from 'genericComponents';

const ModalForm = props => {
    const {
        label, 
        value, 
        onChange,
    } = props;
    return (<FormGroup key={`form-group-${label}`}>
        <label key={`form-label-${label}`}>{label}</label>
        <InputField 
            key={`form-input-${label}`}
            onChangedValue={onChange}
            value={value}
        />
    </FormGroup>);
};

ModalForm.propTypes = {
    label: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
    ]).isRequired,
    onChange: PropTypes.func.isRequired,
};

export default ModalForm;
