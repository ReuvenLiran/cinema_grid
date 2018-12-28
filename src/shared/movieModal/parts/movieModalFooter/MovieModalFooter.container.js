import { connect } from 'react-redux';
import { closeModal, applyModal } from 'actions';
import MovieModalFooter from './MovieModalFooter';

const mapDispatchToProps = (dispatch) => ({
    closeModal: () => dispatch(closeModal()),
    applyModal: () => dispatch(applyModal()),
});

export default connect(null, mapDispatchToProps)(MovieModalFooter);
