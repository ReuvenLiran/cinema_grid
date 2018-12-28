import React from 'react';
import PropTypes from 'prop-types';
import { MovieCard } from './parts';

const MoviesList = (props) => {
  const {
    movies,
  } = props;

  return (
    <div className="movies-list-container">
      <div className="movies-list">
        {movies.map(movie => (
          <MovieCard
            key={movie.id}
            id={movie.id}
            poster={movie.poster}
          />
        ))}
      </div>
    </div>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      poster: PropTypes.string,
    }),
  ).isRequired,
};
export default MoviesList;
