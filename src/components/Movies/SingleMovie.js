import React, { Component } from "react";

class SingleMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showPreview: false
    };
  }

  render() {
    const { backdrop_path, poster_path } = this.props.movie;
    const imgSrc = `https://image.tmdb.org/t/p/w342${poster_path}`;
    return (
      <div
        className="single-movie"
        onMouseOver={() => {
          this.setState({ showPreview: true });
        }}
        onMouseLeave={() => {
          this.setState({ showPreview: false });
        }}
        style={{ width: this.state.showPreview ? "256px" : "171px", zIndex: 1 }}
      >
        <img src={imgSrc} alt="movie poster" />
      </div>
    );
  }
}

export default SingleMovie;
