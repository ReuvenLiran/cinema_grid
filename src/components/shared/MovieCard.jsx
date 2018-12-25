import React from 'react';
import PropTypes from 'prop-types';
import { Card, Button, CardContent, CardActions } from '../generic';

const MovieCard = props => {
    const {
        title,
        year,
        runtime,
        genre,
        director,
    } = props;
    return (<Card>
        <CardContent>
            <h3>Header</h3>
            <p>
                bla bla bla
                bla bla bla
                bla bla bla
                bla bla bla
                bla bla bla
                bla bla bla

            </p>
        </CardContent>
        <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>)
};

export default MovieCard;