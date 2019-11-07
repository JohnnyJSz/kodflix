import React from 'react';

import MovieData from './MovieData';
import MovieDataFn from './MovieData';

export default function MoviesGallery() {
    return (
      <div className='container'>
        <MovieDataFn id={MovieData.id} name={MovieData.title} cover={MovieData.cover}/>
      </div> 
    );
}