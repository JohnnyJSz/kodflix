import React from 'react';

import Movie from './Movie'
import blackMirrorCover from './images/blackMirrorCover.jpg';
import breakingBadCover from './images/breakingBadCover.jpg';
import deathNoteCover from './images/deathNoteCover.jpg';
import gameOfThronesCover from './images/gameOfThronesCover.jpg';
import theWalkingDeadCover from './images/theWalkingDeadCover.jpg';
import ironMan2Cover from './images/ironMan2Cover.jpg';

export default function MoviesGallery() {
    return (
      <div className='container'>
            <Movie id='blackMirror' name='Black Mirror' cover={blackMirrorCover}/>
            <Movie id='breakingBad' name='Breaking Bad' cover={breakingBadCover}/>
            <Movie id='deathNote' name='Death Note' cover={deathNoteCover}/>
            <Movie id='gameOfThrones' name='Game Of Thrones' cover={gameOfThronesCover}/>
            <Movie id='theWalkingDead' name='The Walking Dead' cover={theWalkingDeadCover}/>
            <Movie id='ironMan2' name='Iron Man 2' cover={ironMan2Cover}/>
        </div> 
    );
}