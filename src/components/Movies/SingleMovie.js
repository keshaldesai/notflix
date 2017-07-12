import React, { Component } from "react";

class SingleMovie extends Component {
  render() {
    const {
      poster_path,
      title,
      overview,
      vote_average,
      release_date
    } = this.props.movie;
    const snippet = overview.split(" ").slice(0, 20).join(" ") + "...";
    const year = release_date.split("-")[0];
    const imgSrc = `https://image.tmdb.org/t/p/w342${poster_path}`;
    return (
      <div className="movie-single">
        <img src={imgSrc} alt="movie poster" />
        <div className="movie-overlay">
          <div className="overlay-play">
            <i className="fa fa-play-circle-o fa-4x" aria-hidden="true" />
          </div>
          <div className="overlay-grid">
            <div className="overlay-info">
              <div>
                {title}
              </div>
              <div>{`${vote_average} ${year}`}</div>
              <div>
                {snippet}
              </div>
            </div>
            <div className="overlay-prefs">
              <i className="fa fa-thumbs-o-up fa-lg" aria-hidden="true" />
              <i className="fa fa-thumbs-o-down fa-lg" aria-hidden="true" />
              <i className="fa fa-plus fa-lg" aria-hidden="true" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SingleMovie;
