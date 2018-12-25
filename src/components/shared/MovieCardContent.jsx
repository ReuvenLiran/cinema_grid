import React from 'react';
import PropTypes from 'prop-types';
import { CardContent } from '../generic';

const MovieCardContent = props => {
    const {
        title,
        poster,
        runtime,
        year,
        genre,
    } = props;
    const style = {
        backgroundImage: `url(${poster})`,
    };

    const details = <div className="runtime">
        {runtime}
        &nbsp;
        &#8226;
        &nbsp;
        {year}
        &nbsp;
        &#8226;
        &nbsp;
        {genre}
    </div>;
    return (<CardContent 
        className="movie-card-content"
        style={style}
    >
        <div className="movie-card-content-info">
            <h5 className="title">{title}</h5>
            {details}
        </div>
    </CardContent>);
}

export default MovieCardContent;