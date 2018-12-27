import { connect } from 'react-redux';
import { closeModal } from 'actions';
import MovieModal from './MovieModal';

const mapDispatchToProps = (dispatch) => ({
    closeModal: () => dispatch(closeModal()),
});


const mapStateToProps = state => ({
    isOpen: state.moviesModal.isOpen,
});

export default connect(mapStateToProps, mapDispatchToProps)(MovieModal);

