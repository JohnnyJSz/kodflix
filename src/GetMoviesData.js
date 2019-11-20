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
      {title: 'Black Mirror', cover: blackMirrorCover, id: 'blackMirror', synopsis: 'An anthology series exploring a twisted, high-tech world where humanity\'s greatest innovations and darkest instincts collide.'},
      {title: 'Breaking Bad', cover: breakingBadCover, id: 'breakingBad', synopsis: 'A high school chemistry teacher diagnosed with inoperable lung cancer turns to manufacturing and selling methamphetamine in order to secure his family\'s future.'},
      {title: 'Death Note', cover: deathNoteCover, id: 'deathNote', synopsis: 'A high school student named Light Turner discovers a mysterious notebook that has the power to kill anyone whose name is written within its pages, and launches a secret crusade to rid the world of criminals.'},
      {title: 'Game of Thrones', cover: gameOfThronesCover, id: 'gameOfThrones', synopsis: 'Nine noble families fight for control over the mythical lands of Westeros, while an ancient enemy returns after being dormant for thousands of years.'},
      {title: 'The Walking Dead', cover: theWalkingDeadCover, id: 'theWalkingDead', synopsis: 'Sheriff Deputy Rick Grimes wakes up from a coma to learn the world is in ruins and infested by zombies. He must lead a group of survivors to stay alive.'},
      {title: 'Iron Man 2', cover: ironMan2Cover, id: 'ironMan2', synopsis: 'With the world now aware of his identity as Iron Man, Tony Stark must contend with both his declining health and a vengeful mad man with ties to his father\'s legacy.'},
      {title: 'Spider Man Homecoming', cover: spiderManHomecomingCover, id: 'spiderManHomeoming', synopsis: 'Peter Parker balances his life as an ordinary high school student in Queens with his superhero alter-ego Spider-Man, and finds himself on the trail of a new menace prowling the skies of New York City.'},
      {title: 'Black Panther', cover: blackPantherCover, id: 'blackPanther', synopsis: 'T\'Challa, heir to the hidden but advanced kingdom of Wakanda, must step forward to lead his people into a new future and must confront a challenger from his country\'s past.'}
    ];
  }