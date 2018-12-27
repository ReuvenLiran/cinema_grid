import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Button = props => {
const { className, children, onClick, ...other } = props;
return (
    <button
        type="button" 
        className={classNames('btn', className)}
        onClick={onClick}  
        {...other}    
    >
        {children}
    </button>
)
// return (<MUIButton
//         size="small"
//         onClick={onClick}
//         className={className}
//     >
//         {children}
//     </MUIButton>);
};

Button.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    onClick: PropTypes.func,
};

export default Button;
