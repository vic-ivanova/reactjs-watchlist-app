import React, { useState, useEffect, useRef } from 'react'

function MovieForm(props) {
  const [input, setInput] = useState(props.edit ? props.edit.value : '');

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus()
  })

  const submitHandler = e => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 20000),
      text: input
    });

    setInput('');
  };

  const changeHandler = e => {
    setInput(e.target.value);
  }

  return (
    <form className="watchlist-form" onSubmit={submitHandler}>
      {props.edit ? (
        <>
          <input
            type="text"
            name="text"
            placeholder="Update movie title"
            value={input}
            className="movie-input edit"
            onChange={changeHandler}
            ref={inputRef}
          />
          <button className="movie-btn edit">Update</button>
        </>
      ) :
        (
          <>
            <input
              type="text"
              name="text"
              placeholder="Add movie title"
              value={input}
              className="movie-input"
              onChange={changeHandler}
              ref={inputRef}
            />
            <button className="movie-btn">Add Movie</button>
          </>
        )
      }
    </form>
  );
}

export default MovieForm
