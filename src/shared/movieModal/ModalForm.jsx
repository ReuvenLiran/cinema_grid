import React from 'react';
import PropTypes from 'prop-types';
import {
    FormGroup,
    InputField,
} from 'genericComponents';
import { Modal } from '../../genericComponents';

const ModalForm = props => {
    const {
        label, 
        value, 
        onChange,
    } = props;
    return (<FormGroup>
        <label>{label}</label>
        <InputField 
            onChange={onChange}
            value={value}
         />
    </FormGroup>);
};

ModalForm.propTypes = {
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
};

export default ModalForm;
