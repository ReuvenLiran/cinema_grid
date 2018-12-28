import { connect } from 'react-redux';
import { closeModal } from 'actions';
import MovieModal from './MovieModal';

const mapDispatchToProps = (dispatch) => ({
    closeModal: () => dispatch(closeModal()),
});

const getMovieData = state => {
    const { 
        moviesUI: {
            selectedId,
            editedMovies,
        }
    } = state;
    let movie = {
        director: null,
        year: null,
        title: null,
        genreIds: [],
        runtime: null,
    };
    if (!selectedId) {
        return movie;
    }
    movie = editedMovies.get(selectedId);
    return movie;
};

const mapStateToProps = state => ({
    isOpen: state.moviesModal.isOpen,
    ...getMovieData(state),
});

export default connect(mapStateToProps, mapDispatchToProps)(MovieModal);

