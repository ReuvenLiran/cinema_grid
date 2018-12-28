import React from 'react';
import PropTypes from 'prop-types';

const FormGroup = props => {
    const { children } = props;
    return (<div class="form-group">
        {children}
    </div>);
};

FormGroup.propTypes = {
    children: PropTypes.node.isRequired,
};

export default FormGroup;