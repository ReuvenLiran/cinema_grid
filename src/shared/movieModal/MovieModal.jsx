import React from 'react';
import PropTypes from 'prop-types';
import {
  Modal,
} from 'generic-components';
import {
  MovieModalFooter,
  MovieModalHeader,
  MovieModalBody,
} from './parts';

const MovieModal = (props) => {
  const {
    isOpen,
    closeModal,
  } = props;
  return (
    <Modal
      key="movie-modal"
      onClose={closeModal}
      isOpen={isOpen}
      className="movie-modal"
    >
      <MovieModalHeader key="movie-modal-header" />
      <MovieModalBody key="movie-modal-body" />
      <MovieModalFooter key="movie-modal-footer" />
    </Modal>
  );
};

MovieModal.propTypes = {
  closeModal: PropTypes.func.isRequired,
  header: PropTypes.string.isRequired,
  isOpen: PropTypes.bool.isRequired,
};

export default MovieModal;
