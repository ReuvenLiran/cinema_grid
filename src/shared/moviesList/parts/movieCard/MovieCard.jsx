import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'genericComponents';
import {
    getYear,
    getGenre,
    getTime,
} from './utils';
import { MovieCardContent } from './parts';

const MovieCard = props => {
    const {
        title,
        year,
        runtime,
        genreIds,
        id,
        poster,
        genresOptions,
    } = props;
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
                id={id}
            />
      </Card>)
};

export default MovieCard;