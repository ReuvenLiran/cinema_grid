import React from 'react';
import PropTypes from 'prop-types';
import { MovieCard } from './parts';

const MoviesList = props => {
    const { movies, genresOptions } = props;
    
    return (<ul className="movies-list">
    {movies.map(movie => (
        <MovieCard
            key={movie.id}
            poster={movie.poster}
            id={movie.id}
            title={movie.title}
            runtime={movie.runtime}
            year={movie.year}
            genreIds={movie.genreIds}
            genresOptions={genresOptions}
        />
    ))}
    </ul>);
};

export default MoviesList;