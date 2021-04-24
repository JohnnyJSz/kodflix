import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import "./App.css";
import MovieGallery from "./MovieGallery";
import Details from "./Details";
import NotFound from "./NotFound";

function App() {
  let date = new Date();
  return (
    <Router>
      <div className='App'>
        <div>
          <Link to='/' className='kodflix-title-link'><h1 className='kodflix-title'>Kodflix</h1></Link>
        </div>
        <Switch>
          <Route exact path='/' component={MovieGallery} />
          <Route path='/not-found' component={NotFound} />
          <Route exact path='/:movieURL' component={Details} />
        </Switch>
        <div className='footer'>
          <p>{date.getFullYear()} Kodiri &copy; - Kodflix | Jonathan J S.</p>
        </div>
      </div>
    </Router>
  );
}
export default App;
