import React from 'react';
import PropTypes from 'prop-types';

const Card = (props) => {
  const { className, children } = props;
  return (
    <div className={className}>
      {children}
    </div>
  );
// return (<div className={className}>
//         {children}
//     </div>);
};

Card.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export default Card;
