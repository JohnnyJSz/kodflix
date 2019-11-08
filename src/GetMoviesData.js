
import blackMirrorCover from './images/blackMirrorCover.jpg';
import breakingBadCover from './images/breakingBadCover.jpg';
import deathNoteCover from './images/deathNoteCover.jpg';
import gameOfThronesCover from './images/gameOfThronesCover.jpg';
import theWalkingDeadCover from './images/theWalkingDeadCover.jpg';
import ironMan2Cover from './images/ironMan2Cover.jpg';
import spiderManHomecomingCover from './images/spiderManCover.jpg';
import blackPantherCover from './images/blackPantherCover.jpg';

export default function getMoviesData(){
    return [
      {title: 'Black Mirror', cover: blackMirrorCover, id: 'blackMirror'},
      {title: 'Breaking Bad', cover: breakingBadCover, id: 'breakingBad'},
      {title: 'Death Note', cover: deathNoteCover, id: 'deathNote'},
      {title: 'Game of Thrones', cover: gameOfThronesCover, id: 'gameOfThrones'},
      {title: 'The Walking Dead', cover: theWalkingDeadCover, id: 'theWalkingDead'},
      {title: 'Iron Man 2', cover: ironMan2Cover, id: 'ironMan2'},
      {title: 'Spider Man Homecoming', cover: spiderManHomecomingCover, id: 'spiderManHomeoming'},
      {title: 'Black Panther', cover: blackPantherCover, id: 'blackPanther'}
    ];
  }