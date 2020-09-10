import React, { useState } from 'react';
import MovieForm from './MovieForm';
import { CgCloseR } from 'react-icons/cg';
import { FiEdit } from 'react-icons/fi';

function Movie({ movies, completeMovie, updateMovie, removeMovie }) {
  const [edit, setEdit] = useState({
    id: null,
    value: ''
  })

  const submitUpdate = value => {
    updateMovie(edit.id, value)
    setEdit({
      id: null,
      value: ''
    })
  }

  if (edit.id) {
    return <MovieForm edit={edit} onSubmit={submitUpdate} />;
  }

  return movies.map((movie, index) => (
    <div
      className={movie.isComplete ? 'movie-row complete' : 'movie-row'}
      key={index}>

      <div key={movie.id} onClick={() => completeMovie(movie.id)}>
        {movie.text}
      </div>

      <div className="icons-wrapper">
        <CgCloseR
          onClick={() => removeMovie(movie.id)}
          className="delete-icon"
        />

        <FiEdit
          onClick={() => setEdit({ id: movie.id, value: movie.text })}
          className="edit-icon"
        />
      </div>
    </div>
  ))
}

export default Movie;