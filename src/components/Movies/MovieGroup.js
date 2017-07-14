import React, { Component } from "react";
import SingleMovie from "./SingleMovie";
import Arrow from "./Arrow";

class MovieGroup extends Component {
  constructor(props) {
    super(props);
    this.handleRightClick = this.handleRightClick.bind(this);
    this.handleLeftClick = this.handleLeftClick.bind(this);
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

  render() {
    const { movies, title } = this.props;
    const { page } = this.state;
    const numMovies = movies.length;
    if (numMovies === 0) {
      return <div />;
    }
    const windowWidth = window.innerWidth;
    const moviesPerWidth = windowWidth / 228;
    const pageWidth = Math.floor(moviesPerWidth) * 228;
    const rowLength = numMovies * 228;
    const numPages = rowLength / pageWidth;
    return (
      <div className="movie-group">
        <div className="movie-listname">
          {title}
        </div>
        <div className="movie-container">
          <Arrow direction="left" handleClick={this.handleLeftClick} show={page > 0} />
          <Arrow direction="right" handleClick={this.handleRightClick} show={page < Math.ceil(numPages) - 1} />
          <span
            className="movie-posters"
            style={{ transform: `translateX(${pageWidth * page * -1}px)` }}
          >
            {movies.map(movie => {
              return <SingleMovie movie={movie} key={movie.id} />;
            })}
          </span>
        </div>
      </div>
    );
  }
}

export default MovieGroup;
