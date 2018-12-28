import React from 'react';
import PropTypes from 'prop-types';
import {
  ModalBody,
} from 'generic-components';
import ModalFormList from './ModalFormList';

const MovieModalBody = (props) => {
  const {
    director,
    title,
    year,
    runtime,
    updateModal,
  } = props;
  return (
    <ModalBody key="movie-modal-body">
      <ModalFormList
        key="movie-modal-form-list"
        director={director}
        title={title}
        year={year}
        runtime={runtime}
        updateModal={updateModal}
      />
    </ModalBody>
  );
};

MovieModalBody.propTypes = {
  director: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  runtime: PropTypes.number.isRequired,
  updateModal: PropTypes.func.isRequired,
};

export default MovieModalBody;
