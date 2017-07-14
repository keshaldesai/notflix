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

  renderArrows(numPages) {
    const { page } = this.state;
    const upperBound = Math.ceil(numPages) - 1;
    switch (page) {
      case 0:
        return <Arrow direction="right" handleClick={this.handleRightClick} />;
      case upperBound:
        return <Arrow direction="left" handleClick={this.handleLeftClick} />;
      default:
        return (
          <div>
            <Arrow direction="left" handleClick={this.handleLeftClick} />
            <Arrow direction="right" handleClick={this.handleRightClick} />
          </div>
        );
    }
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
        {this.renderArrows(numPages)}
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
