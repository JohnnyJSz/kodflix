import React from 'react';
import blackMirrorCover from './images/blackMirrorCover.jpg';
import breakingBadCover from './images/breakingBadCover.jpg';
import deathNoteCover from './images/deathNoteCover.jpg';
import gameOfThronesCover from './images/gameOfThronesCover.jpg';
import theWalkingDeadCover from './images/theWalkingDeadCover.jpg';
import ironMan2Cover from './images/ironMan2Cover.jpg';
import Movie from './Movies';

import './App.css';

function App() {
  return (
    <div className="App">
      <div className='container'>
        <div className='row'>
          <Movie name='Black Mirror' cover={blackMirrorCover}/>
          <Movie name='Breaking Bad' cover={breakingBadCover}/>
          <Movie name='Death Note' cover={deathNoteCover}/>
        </div>
        <div className='row'>
          <Movie name='Game Of Thrones' cover={gameOfThronesCover}/>
          <Movie name='The Walking Dead' cover={theWalkingDeadCover}/>
          <Movie name='Iron Man 2' cover={ironMan2Cover}/>
        </div>
      </div>      
    </div>
  );
}

export default App;
