import { connect } from 'react-redux';
import { GET_MOVIES } from './actions/movies';
import { GET_GENRES } from './actions/genres';
import App from './App';

const mapDispatchToProps = (dispatch) => ({
    getMovies: () => dispatch({ type: GET_MOVIES}),
    getGenres: () => dispatch({ type: GET_GENRES}),
});

const mapStateToProps = state => ({
    movies: state.movies,
    genresOptions: state.genres,
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

