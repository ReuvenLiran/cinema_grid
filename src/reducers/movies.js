import { GET_MOVIES_SUCCESS } from '../actions/movies';

const movies = [];

export default (state = movies, action) => {
	switch (action.type) {
	case GET_MOVIES_SUCCESS:
		return [...action.movies];
	default:
		return state
	}
};
