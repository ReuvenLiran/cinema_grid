import React from 'react';
import PropTypes from 'prop-types';
import MUIButton from '@material-ui/core/Button';

const Button = props => {
const { className, children } = props;
return (<MUIButton
        size="small"
        className={className}
    >
        {children}
    </MUIButton>);
};

Button.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
};

export default Button;
