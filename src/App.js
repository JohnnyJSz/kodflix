import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';
import MovieGallery from './MovieGallery'
import Details from './Details'

function App() {
  return (
    <Router>
      <div className='App'>
        <Route exact path='/' component={MovieGallery} />
        <Route exact path='/:movieUrlId' component={Details} />
      </div>
    </Router>
  );
}
export default App;

