import MovieModalHeader from './MovieModalHeader';
import { connect } from 'react-redux';
import { 
    closeModal,
} from 'actions';

const mapDispatchToProps = (dispatch) => ({
    closeModal: () => dispatch(closeModal()),
});


const mapStateToProps = state => ({
    isOpen: state.moviesModal.isOpen,
    title: state.moviesModal.data.title,
});

export default connect(mapStateToProps, mapDispatchToProps)(MovieModalHeader);