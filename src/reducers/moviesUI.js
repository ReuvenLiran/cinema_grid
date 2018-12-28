import { 
    INITALIZE_MOVIES,
    SELECT_MOVIE,
    EDIT_MOVIE,
 } from 'actions';

const movies = {
    selectedId: null,
    editedMovies: new Map(),
};

export default (state = movies, action) => {
	switch (action.type) {
	case SELECT_MOVIE:
        return { ...state, selectedId: action.id };
    case INITALIZE_MOVIES: {
        return { ...state, editedMovies: action.movies };
    }
    case EDIT_MOVIE: {
        const { editedMovies } = state;
        const { id, data } = action;
        const prevData = editedMovies.get(id);
        const entries = editedMovies.entries();
        const newEditedMovies = [...entries, [
            id, 
            { ...prevData, ...data },
        ]];
		return { ...state, editedMovies: new Map(newEditedMovies) };
    }
	default:
		return state
	}
};
