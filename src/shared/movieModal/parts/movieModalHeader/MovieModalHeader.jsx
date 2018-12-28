import React from 'react';
import PropTypes from 'prop-types';
import {
  ModalHeader,
  ModalCloseButton,
} from 'generic-components';

const MovieModalHeader = (props) => {
  const {
    title,
    closeModal,
  } = props;
  const header = `Edit - ${title}`;
  return (
    <ModalHeader
      key="movie-modal-header"
    >
      <h5>{header}</h5>
      <ModalCloseButton
        onClick={closeModal}
      />
    </ModalHeader>
  );
};

MovieModalHeader.propTypes = {
  title: PropTypes.string.isRequired,
  closeModal: PropTypes.func.isRequired,
};

export default MovieModalHeader;
