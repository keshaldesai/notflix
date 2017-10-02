import React, { Component } from "react";
import Popular from "./Categories/Popular";
import Theatre from "./Categories/Theatre";
import Kids from "./Categories/Kids";

class Movies extends Component {
  render() {
    return (
      <div className="movies">
        <Popular />
        <Theatre />
        <Kids />
      </div>
    );
  }
}

export default Movies;
