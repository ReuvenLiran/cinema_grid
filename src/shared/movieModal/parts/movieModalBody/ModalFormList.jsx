import React from 'react';
import PropTypes from 'prop-types';
import ModalForm from './ModalForm';

const renderForm = (label, value, onChange) => (
  <ModalForm
    label={label}
    value={value}
    key={`form-${label}`}
    onChange={onChange}
  />
);

const ModalFormList = (props) => {
  const {
    director,
    title,
    year,
    runtime,
    updateModal,
  } = props;

  const direcotorElem = renderForm('Director', director, v => updateModal({ director: v }));
  const titleElem = renderForm('Title', title, v => updateModal({ title: v }));
  const yearElem = renderForm('Year', year, v => updateModal({ year: v }));
  const runtimeElem = renderForm('Runtime', runtime, v => updateModal({ runtime: v }));

  return (
    <div key="modal-form-list">
      {titleElem}
      {direcotorElem}
      {yearElem}
      {runtimeElem}
    </div>
  );
};

ModalFormList.propTypes = {
  title: PropTypes.string.isRequired,
  director: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  runtime: PropTypes.number.isRequired,
  updateModal: PropTypes.func.isRequired,
};

export default ModalFormList;
