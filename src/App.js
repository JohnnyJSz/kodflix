import React from 'react';
// import jslogo from './jslogo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* <img src={jslogo} alt='JavaScript logo'/>
      <br /><br /><br /> */}
      <div className='container'>
        <div className='row1'>
          <div className='titles'><h2>Black Mirror</h2></div>
          <div className='titles'><h2>Breaking Bad</h2></div>
          <div className='titles'><h2>Death Note</h2></div>
        </div>
        <div className='row2'>
          <div className='titles'><h2>Game of Thrones</h2></div>
          <div className='titles'><h2>The Walking Dead</h2></div>
          <div className='titles'><h2>The Wire</h2></div>
        </div>
      </div>
    </div>
  );
}

export default App;
