
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
import {
	getDirectors as getDirectorsAPI,
	getMovies as getMoviesAPI,
	getGenres as getGenresAPI,
	getMoviesRuntime as getMoviesRuntimeAPI,
		 } from './servies';
import { GET_MOVIES, getMovies as getMoviesAction } from '../actions/movies';
import { getGenres as getGenresAction, GET_GENRES } from '../actions/genres';

const dataService = store => next => async action => {
	next(action)
	switch (action.type) {

	case GET_GENRES: {
		const generes = await getGenresAPI();
		next(getGenresAction(generes));
		break;
	}
	case GET_MOVIES: {
		try {
			const movies = await getMoviesAPI();
			const moviesIds = movies.map(m => m.id);
			const directors = await getDirectorsAPI(moviesIds);
			const runtimes = await getMoviesRuntimeAPI(moviesIds);
			
			const moviesWithDirectors = movies.map(movie => ({
				...movie,
				runtime: runtimes[movie.id],
				director: directors[movie.id],
			}));
			next(getMoviesAction(moviesWithDirectors));
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