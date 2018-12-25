import React from 'react';
import PropTypes from 'prop-types';
import MUICardContent from '@material-ui/core/CardContent';

const CardContent = props => {
    const { className, children } = props;
    return (<MUICardContent>
            {children}
        </MUICardContent>);
};

CardContent.propTypes = {
    children: PropTypes.node,
};

export default CardContent;