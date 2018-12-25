import React, { Component } from 'react';
import './App.css';
import MoviesList from './components/shared/MoviesList';

class App extends Component {
  componentDidMount() {
    this.props.getMovies();
    this.props.getGenres();
  }
  render() {
    const { movies, genresOptions } = this.props;
    return (
      <div className="App">
        <MoviesList 
          movies={movies}
          genresOptions={genresOptions}
        />
      </div>
    );
  }
}

export default App;
