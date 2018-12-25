import React from 'react';
import PropTypes from 'prop-types';
import MUICardContent from '@material-ui/core/CardContent';

const CardContent = props => {
    const { className, style, children } = props;
    return (<div 
        style={style}
        className={className}
        >
            {children}
        </div>);
};

CardContent.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    style: PropTypes.object,
};

export default CardContent;