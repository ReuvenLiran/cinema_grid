import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';

const ModalCloseButton = props => {
    const { onClick } = props;
    return (<Button
        className="close" 
        onClick={onClick}
    >
        <span aria-hidden="true">&times;</span>
    </Button>);
};

ModalCloseButton.propTypes = {
    onClick: PropTypes.func.isRequired,
};

export default ModalCloseButton;
