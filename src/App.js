import React from 'react';
import blackMirrorCover from './images/blackMirrorCover.jpg';
import breakingBadCover from './images/breakingBadCover.jpg';
import deathNoteCover from './images/deathNoteCover.jpg';
import gameOfThronesCover from './images/gameOfThronesCover.jpg';
import theWalkingDeadCover from './images/theWalkingDeadCover.jpg';
import ironManCover from './images/ironManCover.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className='container'>
        <div className='row1'>
          <div className='titles'>
            <img src={blackMirrorCover} alt='Black Mirror' />
            <div className='overlayTitle'>
              <h1>Black Mirror</h1>
            </div>
          </div>
          <div className='titles'>
            <img src={breakingBadCover} alt='Breaking Bad' />
            <div className='overlayTitle'>
              <h1>Breaking Bad</h1>
            </div>
          </div>
          <div className='titles'>
            <img src={deathNoteCover} alt='Death Note' />
            <div className='overlayTitle'>
              <h1>Death Note</h1>
            </div>
          </div>
        </div>
        <div className='row2'>
          <div className='titles'>
            <img src={gameOfThronesCover} alt='Game Of Thrones' />
            <div className='overlayTitle'>
              <h1>Game Of Thrones</h1>
            </div>
          </div>
          <div className='titles'>
            <img src={theWalkingDeadCover} alt='The Walking Dead' />
            <div className='overlayTitle'>
              <h1>The Walking Dead</h1>
            </div>
          </div>
          <div className='titles'>
            <img src={ironManCover} alt='Iron Man 2' />
            <div className='overlayTitle'>
              <h1>Iron Man 2</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
