import React from 'react';
import PropTypes from 'prop-types';

const CardContent = (props) => {
  const { className, style, children } = props;
  return (
    <div
      style={style}
      className={className}
    >
      {children}
    </div>
  );
};

CardContent.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  style: PropTypes.object,
};

CardContent.defaultProps = {
  style: {},
  className: '',
};

export default CardContent;
