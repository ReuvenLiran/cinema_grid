import { connect } from 'react-redux';
import { openModal, selectMovie } from 'actions';
import MovieCardContent from './MovieCardContent';

const mapDispatchToProps = (dispatch) => ({
    openModal: () => dispatch(openModal()),
    selectMovie: (id) => dispatch(selectMovie(id)),
});

const mapStateToProps = state => ({
    movies: state.moviesUI.editedMovies,
    genresOptions: state.genres,
})

export default connect(mapStateToProps, mapDispatchToProps)(MovieCardContent);

