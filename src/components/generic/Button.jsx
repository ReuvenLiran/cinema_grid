import React from 'react';
import PropTypes from 'prop-types';
import MUIButton from '@material-ui/core/Button';
import classNames from 'classnames';

const Button = props => {
const { className, children, onClick } = props;
return (
    <button
        type="button" 
        className={classNames('btn btn-outline-primary', className)}
        onClick={onClick}  
        data-toggle="modal" 
        data-target="#exampleModal"     
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
