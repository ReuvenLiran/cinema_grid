import React from 'react';
import PropTypes from 'prop-types';
import { CardContent } from 'genericComponents';
import { EditButton } from './parts';
import {
    getGenre,
    getTime,
} from './utils';

const MovieCardContent = props => {
    const {
        openModal,
        selectMovie,
        id,
        poster,
        movies,
        genresOptions,
    } = props;
    console.log({
        props,
    });
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

    const details = <div className="movie-card-content-details">
        {time}
        &nbsp;
        &#8226;
        &nbsp;
        {year}
        &nbsp;
        &#8226;
        &nbsp;
        {genre}
    </div>;
    const onEdit = () => {
        selectMovie(id);
        openModal();
    };
    return (<CardContent 
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
    </CardContent>);
}

export default MovieCardContent;