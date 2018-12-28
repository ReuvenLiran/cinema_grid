import { GET_GENRES_SUCCESS } from 'actions';

const genres = [];

export default (state = genres, action) => {
  switch (action.type) {
    case GET_GENRES_SUCCESS:
      return [...action.genres];
    default:
      return state;
  }
};
