import React from 'react';
import PropTypes from 'prop-types';
import { 
    Modal,
    ModalBody,
    ModalFooter, 
    ModalHeader, 
    ModalCloseButton
     } from 'genericComponents';
import ModalFormList from './ModalFormList';
import ApplyButton from './ApplyButton';
import CloseButton from './CloseButton';

const MovieModal = props => {
    const { 
        director,
        isOpen, 
        closeModal, 
        title,
        year,
        runtime,
     } = props;
     const header = `Edit - ${title}`;
    return (
    <Modal
        onClose={closeModal}
        isOpen={isOpen}
        className="movie-modal"
    >   
        <ModalHeader>
            <h5>{header}</h5>
            <ModalCloseButton 
                onClick={closeModal}
            />
        </ModalHeader>
        <ModalBody>
            <ModalFormList 
                director={director}
                title={title}
                year={year}
                runtime={runtime}
            />
        </ModalBody>
        <ModalFooter>
            <CloseButton 
                onClose={closeModal}
            />
             <ApplyButton 
                onClick={() => console.log("wwww")}
            />  
        </ModalFooter>
    </Modal>);
};

MovieModal.propTypes = {
    closeModal: PropTypes.func.isRequired,
    header: PropTypes.string.isRequired,
    isOpen: PropTypes.bool.isRequired,
}

export default MovieModal;
