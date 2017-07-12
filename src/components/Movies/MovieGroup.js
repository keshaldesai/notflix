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

  renderArrows(numPages) {
    const { page } = this.state;
    const left = (
      <i
        className="fa fa-chevron-left"
        aria-hidden="true"
        onClick={this.handleLeftClick.bind(this)}
      />
    );
    const right = (
      <i
        className="fa fa-chevron-right"
        aria-hidden="true"
        onClick={this.handleRightClick.bind(this, numPages)}
      />
    );
    if (page === 0) {
      return (
        <div>
          >
          {right}
        </div>
      );
    }
    if (page === Math.ceil(numPages) - 1) {
      return (
        <div>
          >
          {left}
        </div>
      );
    }
    return (
      <div>
        {left}
        {right}
      </div>
    );
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
        {this.renderArrows(numPages)}
        <div className="movie-listname">
          {title}
        </div>
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
