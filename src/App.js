import React, { Component } from 'react';
import './App.css';
import MovieCard from './components/shared/MovieCard';

class App extends Component {
  render() {
    this.props.getMovies();
    return (
      <div className="App">
        <MovieCard />
      </div>
    );
  }
}

export default App;
