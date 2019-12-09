import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import getMoviesData from './GetMoviesData';

export default class Details extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: {}
    };
  }

  componentDidMount() {
    let movieId = this.props.match.params.movieURL;
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
        <div className='containerDetails'>
          <h1 className='titleDetails'>{this.state.movie.title}</h1>
          <div className='coverDetails'>
            <img id='imgDetails' src={this.state.movie.cover} alt='cover' />
          </div>
          <div className='paragraphDetails'>
            <p id='synopsisDetails'>{this.state.movie.synopsis}</p>
          </div>
          <Link className='linkBackHomeDetails' to='/'>Back to home page</Link>
        </div>
      );
    }
  }
}