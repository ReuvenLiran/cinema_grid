import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'genericComponents';

const CloseButton = props => {
    const { 
        onClick
     } = props;
    return (
    <Button
        className="close-button modal-button"
        onClick={onClick}
    >   
      Closes
    </Button>);
};

CloseButton.propTypes = {
    onClick: PropTypes.func.isRequired,
}

export default CloseButton;
