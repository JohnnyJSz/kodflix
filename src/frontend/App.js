import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import MovieGallery from './MovieGallery';
import Details from './Details';
import NotFound from './NotFound';

function App() {
  return (
    <Router>
      <div className='App'>
      <Switch>
          <Route exact path='/' component={MovieGallery} />
          <Route path='/not-found' component={NotFound} />
          <Route exact path='/:movieURL' component={Details} />
        </Switch>
      </div>
    </Router>
  );
}
export default App;

