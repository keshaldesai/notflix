import React, { Component } from 'react';
import SingleMovie from "./SingleMovie";

class MovieGroup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 0
    }
  }

  handleRightClick() {
    const { page } = this.state;
    this.setState({ page: page + 1 });
  }

  handleLeftClick() {
    const { page } = this.state;
    if (page === 0) {
      return;
    }
    this.setState({ page: page - 1 });
  }

  render() {
    const { movies, title } = this.props;
    const { page } = this.state;
    const width = window.innerWidth;
    if (movies.length === 0) {
      return <div />;
    }
    return (
      <div className="movie-group">
        <div className="movie-listname">
          {title}
        </div>
        <i className="fa fa-chevron-left" aria-hidden="true" onClick={this.handleLeftClick.bind(this)}></i>
        <i className="fa fa-chevron-right" aria-hidden="true" onClick={this.handleRightClick.bind(this)}></i>
        <div className="movie-posters" style={{ transform: `translateX(${page * width * .8}px)` }}>
          {movies.map(movie => {
            return <SingleMovie movie={movie} key={movie.id} />;
          })}
        </div>
      </div>
    );
  }
}

export default MovieGroup;