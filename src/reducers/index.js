import {
  combineReducers,
} from 'redux';
import movies from './movies';
import moviesUI from './moviesUI';
import genres from './genres';
import moviesModal from './moviesModal';

export default combineReducers({
  movies,
  moviesUI,
  genres,
  moviesModal,
});
