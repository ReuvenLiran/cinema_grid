import { connect } from 'react-redux';
import { openModal, selectMovie } from 'actions';
import MovieCardContent from './MovieCardContent';

const mapDispatchToProps = (dispatch) => ({
    openModal: () => dispatch(openModal()),
    selectMovie: (id) => dispatch(selectMovie(id)),
});

export default connect(null, mapDispatchToProps)(MovieCardContent);

