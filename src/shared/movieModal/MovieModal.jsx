import React from 'react';
import { Modal } from 'genericComponents';

const MovieModal = props => {
    const { isOpen } = props;
    return (<Modal
            isOpen={isOpen}
        />);
};

export default MovieModal;
