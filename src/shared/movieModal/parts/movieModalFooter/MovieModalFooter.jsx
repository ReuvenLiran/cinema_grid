import React from 'react';
import PropTypes from 'prop-types';
import {
  ModalFooter,
} from 'generic-components';
import ApplyButton from './ApplyButton';
import CloseButton from './CloseButton';

const MovieModalFooter = (props) => {
  const {
    closeModal,
    applyModal,
  } = props;
  const onApply = () => {
    applyModal();
    closeModal();
  };
  return (
    <ModalFooter key="movie-modal-footer">
      <CloseButton
        onClick={closeModal}
      >
            Close
      </CloseButton>
      <ApplyButton onClick={onApply} />
    </ModalFooter>
  );
};

MovieModalFooter.propTypes = {
  closeModal: PropTypes.func.isRequired,
  applyModal: PropTypes.func.isRequired,
};

export default MovieModalFooter;
