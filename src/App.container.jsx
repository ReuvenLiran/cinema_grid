import { connect } from 'react-redux';
import { GET_MOVIES } from './actions/movies';
import { GET_GENRES } from './actions/genres';
import App from './App';

const mapDispatchToProps = (dispatch) => ({
    getMovies: () => dispatch({ type: GET_MOVIES}),
    getGenres: () => dispatch({ type: GET_GENRES}),
});

const getShow = state => {
    const {
        moviesUI: {
            editedMovies,
        },
        genres,
    } = state;
    const show = editedMovies.size > 0 && genres.length > 0;
    return show;
}
const mapStateToProps = state => ({
    movies: state.movies.map(m => ({
        id: m.id,
        poster: m.poster,    
    })),
    show: getShow(state),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
