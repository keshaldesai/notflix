import React, { Component } from "react";
import SingleMovie from "./SingleMovie";

class MovieGroup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 0
    };
  }

  handleRightClick(numPages) {
    console.log(numPages);
    const { page } = this.state;
    if (page === Math.ceil(numPages) - 1) {
      return;
    }
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
    const numMovies = movies.length;
    if (numMovies === 0) {
      return <div />;
    }
    const width = window.innerWidth;
    const moviesPerWidth = width / 228;
    const pageWidth = Math.floor(moviesPerWidth) * 228;
    const rowLength = numMovies * 228;
    const numPages = rowLength / pageWidth;
    return (
      <div className="movie-group">
        <div className="movie-listname">
          {title}
        </div>
        <i
          className="fa fa-chevron-left"
          aria-hidden="true"
          onClick={this.handleLeftClick.bind(this)}
        />
        <i
          className="fa fa-chevron-right"
          aria-hidden="true"
          onClick={this.handleRightClick.bind(this, numPages)}
        />
        <div
          className="movie-posters"
          style={{ transform: `translateX(${pageWidth * page * -1}px)` }}
        >
          {movies.map(movie => {
            return <SingleMovie movie={movie} key={movie.id} />;
          })}
        </div>
      </div>
    );
  }
}

export default MovieGroup;
