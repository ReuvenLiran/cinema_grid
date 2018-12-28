import React from 'react';
import PropTypes from 'prop-types';
import ModalForm from './ModalForm';

const renderForm = (label, value) => (<ModalForm
    label={label}
    value={value}
/>);

const ModalFormList = props => {
    const { 
        director, 
        title, 
        year,
        runtime,
     } = props;

    const Director = () => renderForm('Director', director);
    const Title = () => renderForm('Title', title);
    const Year = () => renderForm('Year', year);
    const Runtime = () => renderForm('Runtime', runtime);

    return (<div>
        <Title />
        <Director />
        <Year />
        <Runtime />
    </div>);
};

export default ModalFormList;
