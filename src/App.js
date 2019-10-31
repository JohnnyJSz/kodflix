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
        <div className='row1'>
          <Movie name='Black Mirror' cover={blackMirrorCover}/>
          <Movie name='Breaking Bad' cover={breakingBadCover}/>
          <Movie name='Death Note' cover={deathNoteCover}/>
        </div>
        <div className='row2'>
          <Movie name='Game Of Thrones' cover={gameOfThronesCover}/>
          <Movie name='The Walking Dead' cover={theWalkingDeadCover}/>
          <Movie name='Iron Man 2' cover={ironMan2Cover}/>
        </div>
      </div>      
    </div>
  );
}
// function Movie(props) {
//   return (
//       <div className='titles'>
//           <img src={props.cover} alt={`${props.name} cover`} />
//           <div className='overlayTitle'>
//               <h1>{props.name}</h1>
//           </div>
//       </div>
//   );
// }

export default App;
