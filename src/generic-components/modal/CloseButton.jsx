import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'generic-components';

const CloseButton = props => {
    const { 
        onClick,
        children,
     } = props;
    return (
    <Button
        className="close-button modal-button"
        onClick={onClick}
    >   
      {children}
    </Button>);
};

CloseButton.propTypes = {
    onClick: PropTypes.func.isRequired,
    children: PropTypes.oneOfType([
        PropTypes.node,
        PropTypes.string,
    ]).isRequired,
}


export default CloseButton;
