import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import { withStyles } from '@material-ui/core/styles';

function getModalStyle() {
  const TOP = '50%';
  const LEFT = TOP

  return {
    top: TOP,
    left: LEFT,
    transform: `translate(-${TOP}, -${LEFT})`,
  };
}

const styles = theme => ({
  paper: {
    position: 'absolute',
    width: theme.spacing.unit * 50,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
  },
});

class SimpleModal extends React.Component {
  state = {
    open: false,
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { classes } = this.props;

    return (
      <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
        ...
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>

        // <Modal
        //   aria-labelledby="simple-modal-title"
        //   aria-describedby="simple-modal-description"
        //   open={this.props.open}
        //   onClose={this.handleClose}
        // >
        //   <div style={getModalStyle()}>
        //     <Typography variant="h6" id="modal-title">
        //       Text in a modal
        //     </Typography>
        //     <Typography variant="subtitle1" id="simple-modal-description">
        //       Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
        //     </Typography>
        //     {/* <SimpleModalWrapped /> */}
        //   </div>
        // </Modal>
    );
  }
}

SimpleModal.propTypes = {
  classes: PropTypes.object.isRequired,
};

// We need an intermediary variable for handling the recursive nesting.
// const SimpleModalWrapped = withStyles(styles)(SimpleModal);

// const SimpleModalWrapped = withStyles(styles)(SimpleModal);

export default SimpleModal;