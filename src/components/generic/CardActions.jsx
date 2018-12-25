import React from 'react';
import PropTypes from 'prop-types';
import MUICardActions from '@material-ui/core/CardActions';

const CardActions = props => {
const { className, children } = props;
return (<MUICardActions>
        {children}
    </MUICardActions>);
};

CardActions.propTypes = {
    children: PropTypes.node,
};

export default CardActions;
