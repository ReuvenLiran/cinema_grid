import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'generic-components';
import { MovieCardContent } from './parts';

const MovieCard = (props) => {
  const {
    id,
    poster,
  } = props;
    // const genre = getGenre(genreIds, genresOptions);
    // const time = getTime(runtime);

  return (
    <Card className="movie-card">
      <MovieCardContent
        id={id}
        poster={poster}
      />
    </Card>);
};

MovieCard.propTypes = {
  id: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
};

export default MovieCard;
