import React from 'react';
import PropTypes from 'prop-types';
import { 
    ModalFooter, 
} from 'genericComponents';
import ApplyButton from './ApplyButton';
import CloseButton from './CloseButton';

const MovieModalFooter = props => {
    return (<ModalFooter key="movie-modal-footer">
        <CloseButton />
        <ApplyButton />  
    </ModalFooter>);
};

export default MovieModalFooter;
