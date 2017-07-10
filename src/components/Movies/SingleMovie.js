import React, { Component } from "react";

class SingleMovie extends Component {

  render() {
    const { poster_path } = this.props.movie;
    const imgSrc = `https://image.tmdb.org/t/p/w342${poster_path}`;
    return (
      <div className="movie-single" >
        <img src={imgSrc} alt="movie poster" />
        <div className="movie-overlay">
          <div className="overlay-grid">
            <div className="overlay-info">
              <div>
                <div>Moana</div>
                <div>98% Match 2016 PG 1h 47m</div>
                <div>A Polynesian girl destined to be her island's chief makes a perilous trip with a boastful demigod to undo his mistake and save her people.</div>
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
