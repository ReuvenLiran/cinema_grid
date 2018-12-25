import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

const MoviesList = props => {
    const { movies, genresOptions } = props;
    
    return (<ul className="movies-list">
    {movies.map(movie => (
        <MovieCard
            key={movie.id}
            poster={movie.poster}
            title={movie.title}
            runtime={movie.runtime}
            releaseDate={movie.releaseDate}
            genreIds={movie.genreIds}
            genresOptions={genresOptions}
        />
    ))}
    </ul>);
};

export default MoviesList;