import React from 'react';
import PropTypes from 'prop-types';
import { CardContent } from 'generic-components';
import { EditButton } from './parts';
import {
  getGenre,
  getTime,
} from './utils';

const MovieCardContent = (props) => {
  const {
    openModal,
    selectMovie,
    id,
    poster,
    movies,
    genresOptions,
  } = props;
  const movie = movies.get(id);
  const {
    title,
    year,
    runtime,
    genreIds,
  } = movie;
  const genre = getGenre(genreIds, genresOptions);
  const time = getTime(runtime);

  const style = {
    backgroundImage: `url(${poster})`,
  };

  const details = (
    <div className="movie-card-content-details">
      {time}
        &nbsp;
        &#8226;
        &nbsp;
      {year}
        &nbsp;
        &#8226;
        &nbsp;
      {genre}
    </div>
  );
  const onEdit = () => {
    selectMovie(id);
    openModal();
  };
  return (
    <CardContent
      className="movie-card-content"
      style={style}
    >
      <div className="movie-card-content-info">
        <div>
          <h5 className="movie-card-content-title">{title}</h5>
          {details}
        </div>
        <EditButton onClick={onEdit} />
      </div>
    </CardContent>
  );
};

MovieCardContent.propTypes = {
  openModal: PropTypes.func.isRequired,
  selectMovie: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      poster: PropTypes.string.isRequired,
    }),
  ).isRequired,
  genresOptions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
    }),
  ).isRequired,
};

export default MovieCardContent;
