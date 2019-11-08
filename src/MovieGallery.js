import React from 'react';
import getMoviesData from './GetMoviesData';
import Movie from './Movie';

export default function MoviesGallery() {
    return (
      <div className='container'>
      {
        getMoviesData().map( movie => (
          <Movie key={movie.id} id={movie.id} title={movie.title} cover={movie.cover} />
        ))
      }   
      </div> 
    );
}