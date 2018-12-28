import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import ReactModal from 'react-modal';

ReactModal.setAppElement('#root');

const Modal = props => {
  const { 
    isOpen,
    className,
    children, 
    onClose,
  } = props;
  return (<ReactModal 
    key={'modal'}
    closeTimeoutMS={600}
    isOpen={isOpen}
    className={classNames("dialog", className)}
    shouldCloseOnOverlayClick
    onRequestClose={onClose}
    overlayClassName="dialog-overlay"
    contentLabel="Minimal Modal Example"
 >
   {children}
 </ReactModal>);
};

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  onClose: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  className: PropTypes.string.isRequired,
};

export default Modal;
