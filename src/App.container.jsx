import React from 'react';
import { connect } from 'react-redux';
// import { getMovies as getMoviesAction } from './actions';
// import { getMovies as getMoviesAPI } from './services';
import { GET_MOVIES } from './actions/movies';

import App from './App';

// const getMovies = async () => dispatch => {
//     // const movies = getMoviesAPI();
//     // console.log({ movies });
//     // // dispatch(getMoviesAction(movies));
//     // return movies;
// };
 
const mapDispatchToProps = (dispatch) => ({
    getMovies: () => dispatch({ type: GET_MOVIES}),
});

export default connect(null, mapDispatchToProps)(App);

