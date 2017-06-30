import React, { Component } from "react";
import Popular from "./Categories/Popular";
import Theatre from "./Categories/Theatre";

class Movies extends Component {
  render() {
    return (
      <div className="movies">
        <Popular />
        <Theatre />
      </div>
    );
  }
}

export default Movies;
