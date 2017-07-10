import React, { Component } from "react";

class SingleMovie extends Component {

  render() {
    const { poster_path } = this.props.movie;
    const imgSrc = `https://image.tmdb.org/t/p/w342${poster_path}`;
    return (
      <div className="movie-single" >
        <img src={imgSrc} alt="movie poster" />
        <div className="movie-overlay">
          <span>
            Overlay
          </span>
        </div>
      </div>
    );
  }
}

export default SingleMovie;
