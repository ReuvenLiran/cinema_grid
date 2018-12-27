import React from 'react';
import PropTypes from 'prop-types';
import { Modal, ModalBody, ModalHeader, ModalCloseButton } from 'genericComponents';

const MovieModal = props => {
    const { isOpen, closeModal } = props;
    return (<Modal
            onClose={closeModal}
            isOpen={isOpen}
        >   
            <ModalHeader>
                <h5>My Header</h5>
                <ModalCloseButton 
                    onClick={closeModal}
                />
            </ModalHeader>
            <ModalBody>
                <p>
                fjslkjaflks
                fsjaflsjlf
                fjsklajflk
                jflsjafjs
                </p>
                <p>
                fjslkjaflks
                fsjaflsjlf
                fjsklajflk
                jflsjafjs
                </p>
            </ModalBody>
        </Modal>);
};

MovieModal.propTypes = {
    closeModal: PropTypes.func.isRequired,
}

export default MovieModal;
