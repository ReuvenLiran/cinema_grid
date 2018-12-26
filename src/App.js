import React, { Component } from 'react';
import './_app.scss';
import { MoviesList, MovieModal } from 'shared';

class App extends Component {
  componentDidMount() {
    this.props.getMovies();
    this.props.getGenres();
  }
  render() {
    const { movies, genresOptions, isModalOpen } = this.props;
    console.log({ isModalOpen })
    return (
      <div className="App">
        <MoviesList 
          movies={movies}
          genresOptions={genresOptions}
        />
        <MovieModal isOpen={isModalOpen} />
      </div>
    );
  }
}

export default App;
