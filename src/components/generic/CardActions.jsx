import React from 'react';
import PropTypes from 'prop-types';
import MUICardActions from '@material-ui/core/CardActions';

const CardActions = props => {
const { className, children } = props;
return (<MUICardActions className={className}>
        {children}
    </MUICardActions>);
};

CardActions.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
};

export default CardActions;
