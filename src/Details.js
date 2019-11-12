import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import getMoviesData from './GetMoviesData';

export default class Details extends Component {
  constructor(props) {
    super(props);
    this.state = {
      getMovie: {}
    };
  }
  
  componentDidMount() {
    let movieId = this.props.match.params.movieUrlId;
    let getMovie = getMoviesData().find(movie => movie.id === movieId);
    this.setState({
      getMovie: getMovie
    });

  } 
  render() {
    return(
      <div>
        <h1>{this.state.getMovie.title}</h1>
        <Link to='/'>Back to home page</Link>
      </div>
    );
  }
}

