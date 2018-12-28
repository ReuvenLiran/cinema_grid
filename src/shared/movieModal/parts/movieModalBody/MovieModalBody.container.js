import { connect } from 'react-redux';
import { 
    updateModal,
} from 'actions';
import MovieModalBody from './MovieModalBody';

const mapDispatchToProps = (dispatch) => ({
    updateModal: (data) => dispatch(updateModal(data)),
});


const mapStateToProps = state => ({
    ...state.moviesModal.data,
});

export default connect(mapStateToProps, mapDispatchToProps)(MovieModalBody);

