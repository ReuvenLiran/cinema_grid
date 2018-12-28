import { SELECT_MOVIES } from 'actions';

const moviesIds = new Set();

export default (state = moviesIds, action) => {
	switch (action.type) {
	case SELECT_MOVIES:
        return new Set([
            ...state.values(), 
            ...action.moviesIds,
        ]);
	default:
		return state
	}
};
