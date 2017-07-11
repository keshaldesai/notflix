import React, { Component } from "react";

class SingleMovie extends Component {

  render() {
    const { poster_path, title, overview, vote_average, release_date } = this.props.movie;
    const year = release_date.split('-')[0];
    const imgSrc = `https://image.tmdb.org/t/p/w342${poster_path}`;
    return (
      <div className="movie-single" >
        <img src={imgSrc} alt="movie poster" />
        <div className="movie-overlay">
          <div className="overlay-play">
            <i className="fa fa-play-circle-o fa-4x" aria-hidden="true"></i>
          </div>
          <div className="overlay-grid">
            <div className="overlay-info">
              <div>
                <div>{title}</div>
                <div>{`${vote_average} ${year}`}</div>
                <div>{overview}</div>
              </div>
            </div>
            <div className="overlay-prefs">
              <div>
                <div>UP</div>
                <div>DO</div>
                <div>ADD</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SingleMovie;
