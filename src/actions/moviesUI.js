export const EDIT_MOVIE = 'EDIT_MOVIE';
export const SELECT_MOVIE = 'SELECT_MOVIE';
export const INITALIZE_MOVIES = 'INITALIZE_MOVIES';

export const editMovie = (id, data) => ({
  type: EDIT_MOVIE,
  data,
  id,
});

export const selectMovie = id => ({
  type: SELECT_MOVIE,
  id,
});

export const initalizeMovies = movies => ({
  type: INITALIZE_MOVIES,
  movies,
});
