import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '../generic';

const EditButton = props => <Button 
    size="small"
    onClick={props.onClick}
    className="movie-card-edit-button"
    >
        <i class="material-icons">edit</i>
    </Button>;

export default EditButton;
