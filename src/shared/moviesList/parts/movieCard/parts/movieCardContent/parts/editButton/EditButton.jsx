import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'generic-components';

const EditButton = (props) => {
  const {
    onClick,
  } = props;
  return (
    <Button
      size="small"
      onClick={onClick}
      className="movie-card-edit-button"
    >
      <i className="material-icons">edit</i>
    </Button>
  );
};

EditButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};
export default EditButton;
