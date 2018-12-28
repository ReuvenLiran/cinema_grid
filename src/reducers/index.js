import {
	combineReducers
} from 'redux';
import movies from './movies';
import moviesUI from './moviesUI';
import genres from './genres';
import moviesModal from './moviesModal';
// import selection from './selection';

export default combineReducers({
	movies,
	moviesUI,
	// selection,
	genres,
	moviesModal,
});
