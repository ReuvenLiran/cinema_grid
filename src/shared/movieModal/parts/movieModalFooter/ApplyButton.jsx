import React from 'react';
import PropTypes from 'prop-types';
import { ApplyButton as ModalApplyButton } from 'generic-components';

const ApplyButton = (props) => {
  const { onClick } = props;
  return (
    <ModalApplyButton
      onClick={onClick}
    >
        Edit
    </ModalApplyButton>
  );
};

ApplyButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default ApplyButton;
