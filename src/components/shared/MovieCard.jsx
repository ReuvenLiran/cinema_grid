import React from 'react';
import PropTypes from 'prop-types';
import { Card } from '../generic';
import {
    getYear,
    getGenre,
    getTime,
} from './utils';
import MovieCardContent from './MovieCardContent.container';

const MovieCard = props => {
    const {
        title,
        releaseDate,
        runtime,
        genreIds,
        poster,
        genresOptions,
    } = props;
    const year = getYear(releaseDate);
    const genre = getGenre(genreIds, genresOptions);
    const time = getTime(runtime);

    return (
        <Card className="movie-card">
            <MovieCardContent
                title={title}
                poster={poster}
                year={year}
                genre={genre}
                runtime={time}
            />
      </Card>)
};

export default MovieCard;