import React from 'react';
import { Link, Redirect } from 'react-router-dom';

export default class Details extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: []
    };
  }

  componentDidMount() {
    let movieId = this.props.match.params.movieURL;
    fetch('/rest/moviesData')
      .then(res => res.json())
      .then(movie => this.setState({ movie: movie.find(movie => movie.id === movieId) }));
  }
  render() {
    if (this.state.movie === undefined) {
      return <Redirect to='/not-found' />;
    } else if (Array.isArray(this.state.movie) && this.state.movie.length === 0) {
      return <div>loading...</div>;
    } else {
      return (
        <div className='mainDetails'>
          <div className='containerDetails'>
            <h1 className='titleDetails'>{this.state.movie.title}</h1>
            <div className='paragraphDetails'>
              <p id='synopsisDetails'>{this.state.movie.synopsis}</p>
            </div>
            <div className='coverDetails'>
              <img id='imgDetails' src={require(`../images/${this.state.movie.id}Cover.jpg`)} alt='cover movie' />
            </div>
          </div>
          <Link className='linkBackHomeDetails' to='/'>Back to home page</Link>
        </div>
      );
    } 
  }
}