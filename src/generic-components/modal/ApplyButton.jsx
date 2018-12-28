import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'generic-components';

const ApplyButton = props => {
    const { 
        onClick,
        children,
     } = props;
    return (
    <Button
        className="apply-button modal-button"
        onClick={onClick}
    >   
      {children}
    </Button>);
};

ApplyButton.propTypes = {
    onClick: PropTypes.func.isRequired,
    children: PropTypes.oneOfType([
        PropTypes.node,
        PropTypes.string,
    ]).isRequired,
}

export default ApplyButton;
