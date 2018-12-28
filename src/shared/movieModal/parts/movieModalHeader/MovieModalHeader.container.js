import { connect } from 'react-redux';
import {
  closeModal,
} from 'actions';
import MovieModalHeader from './MovieModalHeader';

const mapDispatchToProps = dispatch => ({
  closeModal: () => dispatch(closeModal()),
});


const mapStateToProps = state => ({
  isOpen: state.moviesModal.isOpen,
  title: state.moviesModal.data.title,
});

export default connect(mapStateToProps, mapDispatchToProps)(MovieModalHeader);
