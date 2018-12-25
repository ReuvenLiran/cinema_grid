import React from 'react';
import { Modal } from '../generic';

const MovieModal = props => {
    const { isOpen } = props;
    return (<Modal
            isOpen={isOpen}
        />);
};

export default MovieModal;
