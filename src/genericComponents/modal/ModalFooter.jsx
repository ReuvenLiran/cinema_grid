import React from 'react';
import PropTypes from 'prop-types';

const ModalFooter = props => {
    const { children } = props;
    return (<div className="modal-footer">
            {children}
        </div>);
};

ModalFooter.propTypes = {
    children: PropTypes.node.isRequired,
};

export default ModalFooter;
