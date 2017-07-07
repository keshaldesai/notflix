import React, { Component } from "react";

class SingleMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showPreview: false
    };
  }

  render() {
    const { poster_path } = this.props.movie;
    const { showPreview } = this.state;
    const imgSrc = `https://image.tmdb.org/t/p/w342${poster_path}`;
    const previewClass = showPreview ? " movie-preview" : "";
    return (
      <div
        className={"movie-single" + previewClass}
        onMouseOver={() => {
          this.setState({ showPreview: true });
        }}
        onMouseLeave={() => {
          this.setState({ showPreview: false });
        }}
      >
        <img src={imgSrc} alt="movie poster" />
      </div>
    );
  }
}

export default SingleMovie;
