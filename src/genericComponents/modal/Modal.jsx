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

// class SimpleModal extends React.Component {
//   render() {
//     const { classes } = this.props;

//     return ();

//         // <Modal
//         //   aria-labelledby="simple-modal-title"
//         //   aria-describedby="simple-modal-description"
//         //   open={this.props.open}
//         //   onClose={this.handleClose}
//         // >
//         //   <div style={getModalStyle()}>
//         //     <Typography variant="h6" id="modal-title">
//         //       Text in a modal
//         //     </Typography>
//         //     <Typography variant="subtitle1" id="simple-modal-description">
//         //       Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
//         //     </Typography>
//         //     {/* <SimpleModalWrapped /> */}
//         //   </div>
//         // </Modal>
//     );
//   }
// }

// SimpleModal.propTypes = {
//   classes: PropTypes.object.isRequired,
// };

// // We need an intermediary variable for handling the recursive nesting.
// // const SimpleModalWrapped = withStyles(styles)(SimpleModal);

// // const SimpleModalWrapped = withStyles(styles)(SimpleModal);

// export default SimpleModal;


// {/* <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
// <div className="modal-dialog" role="document">
//   <div className="modal-content">
//     <div className="modal-header">
//       <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
//       <button type="button" className="close" data-dismiss="modal" aria-label="Close">
//         <span aria-hidden="true">&times;</span>
//       </button>
//     </div>
//     <div className="modal-body">
//       ...
//     </div>
//     <div className="modal-footer">
//       <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
//       <button type="button" className="btn btn-primary">Save changes</button>
//     </div>
//   </div>
// </div>
// </div> */}