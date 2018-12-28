import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Button = (props) => {
  const {
    className, children, onClick, ...other
  } = props;
  return (
    <button
      type="button"
      className={classNames('btn', className)}
      onClick={onClick}
      {...other}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};

Button.defaultProps = {
  className: '',
};

export default Button;
