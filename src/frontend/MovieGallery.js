import React, { useState, useEffect } from 'react';
import Movie from './Movie';

export default function MoviesGallery() {
  let [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch('/rest/moviesData')
      .then(response => response.json())
      .then(movies => setMovies(movies))
  }, []);

  if (movies) {
    return (
      <div className='container'>
        {
          movies.map(movie => (
            <Movie key={movie.id} id={movie.id} title={movie.title} />
          ))
        }
      </div>
    )
  }
} 