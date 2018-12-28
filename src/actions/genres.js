export const GET_GENRES = 'GET_GENERES';
export const GET_GENRES_SUCCESS = 'GET_GENERES_SUCCESS';

export const getGenres = genres => ({
  type: GET_GENRES_SUCCESS,
  genres,
});
