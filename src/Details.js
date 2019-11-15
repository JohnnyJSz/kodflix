import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import getMoviesData from './GetMoviesData';

export default class Details extends React.Component {
  constructor(props) {
    super(props);
    debugger;
    this.state = {
      movie: {}
    };
  }
  
  componentDidMount() {
    let movieId = this.props.match.params.movieUrlId;
    let getMovieInfo = getMoviesData().find(movie => movie.id === movieId);
    this.setState({
      movie: getMovieInfo
    });
  }

  render() {

    if (this.state.movie === undefined) {
      return <Redirect to='/not-found' />
    } else {
      return (
        <div>
          <h1>{this.state.movie.title}</h1>
          <Link to='/'>Back to home page</Link>
        </div>
      );
    }
  }
}

