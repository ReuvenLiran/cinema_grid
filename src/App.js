import React, { Component } from 'react';
import './_app.scss';
import { MoviesList, MovieModal } from 'shared';

class App extends Component {
  componentDidMount() {
    this.props.getMovies();
    this.props.getGenres();
  }
  render() {
    const { show, movies } = this.props;
    if (!show) return null;
    return (
      <div className="App">
        <MoviesList 
          movies={movies}
        />
        <MovieModal key="MAIN_MOVIE_MODAL" />
      </div>
    );
  }
}

export default App;
