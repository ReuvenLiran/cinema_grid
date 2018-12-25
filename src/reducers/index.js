import {
	combineReducers
} from 'redux';
import movies from './movies';
import genres from './genres';
import moviesModal from './moviesModal';

export default combineReducers({
	movies,
	genres,
	moviesModal,
});
