import React, { useState } from 'react';
import MovieForm from './MovieForm';
import Movie from './Movie';
import { MdLocalMovies } from 'react-icons/md';

function WatchList() {
  const [movies, setMovies] = useState([]);

  const addMovie = movie => {
    if (!movie.text || /^\s*$/.test(movie.text)) {
      return
    }

    const newMovies = [movie, ...movies]

    setMovies(newMovies);
  };

  const completeMovie = id => {
    let updatedMovies = movies.map(movie => {
      if (movie.id === id) {
        movie.isComplete = !movie.isComplete
      }
      return movie;
    });
    setMovies(updatedMovies);
  };

  const updateMovie = (movieId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return
    }

    setMovies(prev => prev.map(item => (item.id === movieId ? newValue : item)))
  }

  const removeMovie = id => {
    const removeArr = [...movies].filter(movie => movie.id !== id);

    setMovies(removeArr);
  };

  return (
    <div>
      <h1 className="movie-app-title"><MdLocalMovies /> Movie Watchlist</h1>

      <MovieForm onSubmit={addMovie} />

      <div className="movie-container">
        <Movie
          movies={movies}
          completeMovie={completeMovie}
          removeMovie={removeMovie}
          updateMovie={updateMovie}
        />
      </div>
    </div>
  );
}

export default WatchList
