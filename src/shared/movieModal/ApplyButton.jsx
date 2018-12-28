import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'genericComponents';

const ApplyButton = props => {
    const { 
        onClick
     } = props;
    return (
    <Button
        className="apply-button modal-button"
        onClick={onClick}
    >   
      Edit
    </Button>);
};

ApplyButton.propTypes = {
    onClick: PropTypes.func.isRequired,
}

export default ApplyButton;
