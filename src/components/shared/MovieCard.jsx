import React from 'react';
import PropTypes from 'prop-types';
import { Card, Button, CardContent, CardActions } from '../generic';

const getTime = totalMinutes => {
    const hours = Math.floor(totalMinutes / 60);          
    const minutes = totalMinutes % 60;
    const time = `${hours}h ${minutes}m`;
    return time;
}

const getYear = date => date.substring(0, 4);

const getGenre = (genres, genresOptions) => {
    const firstGenre = genres[0];
    const { name } = genresOptions.find(genre => genre.id === firstGenre);
    return name;
};

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
    const time = getTime(runtime);

    const details = <div className="runtime">
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

const MovieCard = props => {
    const {
        title,
        releaseDate,
        runtime,
        genreIds,
        director,
        poster,
        genresOptions,
    } = props;
    const year = getYear(releaseDate);
    const genre = getGenre(genreIds, genresOptions);
    return (<Card className="movie-card">
        <MovieCardContent
            title={title}
            poster={poster}
            year={year}
            genre={genre}
            runtime={runtime}
        />
        <CardActions>
          <Button className="movie-button-edit">Learn More</Button>
        </CardActions>
      </Card>)
};

export default MovieCard;