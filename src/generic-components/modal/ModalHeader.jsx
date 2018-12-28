import React from 'react';
import PropTypes from 'prop-types';

const ModalHeader = props => {
    const { children } = props;
    return (<div className="modal-header">
            {children}
        </div>);
};

ModalHeader.propTypes = {
    children: PropTypes.node.isRequired,
};

export default ModalHeader;
