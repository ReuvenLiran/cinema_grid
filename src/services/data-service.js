
// 			.get('data/todo-data.json')
// 			.end((err, res) => {
// 				if (err) {
// 					return next({
// 						type: 'GET_TODO_DATA_ERROR',
// 						err
// 					})
// 				}
// 				const data = JSON.parse(res.text)
// 				next({
// 					type: GET_MOVIES_SUCCESS,
// 					data
// 				})
// 			})import { GET_MOVIES } from '../actions';
import { getMovies as getMoviesAPI } from './servies';
import { GET_MOVIES, getMovies as getMoviesAction } from '../actions/movies';

const dataService = store => next => async action => {
	next(action)
	switch (action.type) {

	case GET_MOVIES: {
		try {
			const movies = await getMoviesAPI();
			next(getMoviesAction(movies));
		} catch (e) {
			console.error(e);
		}
		break;
	}
	default:
		break
	}
};

export default dataService;

// request
// 			.get('data/todo-data.json')
// 			.end((err, res) => {
// 				if (err) {
// 					return next({
// 						type: 'GET_TODO_DATA_ERROR',
// 						err
// 					})
// 				}
// 				const data = JSON.parse(res.text)
// 				next({
// 					type: GET_MOVIES_SUCCESS,
// 					data
// 				})
// 			})