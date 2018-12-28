export const SELECT_MOVIES = 'SELECT_MOVIEs';
 
export const selectMovies = (moviesIds) => ({
    type: SELECT_MOVIES,
    moviesIds,
});

