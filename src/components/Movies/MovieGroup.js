import React from "react";
import SingleMovie from "./SingleMovie";

function MovieGroup({ movies, title }) {
  if (movies.length === 0) {
    return <div />;
  }
  return (
    <div className="movie-group">
      <div className="movie-listname">
        {title}
      </div>
      <div className="movie-posters">
        {movies.map(movie => {
          return <SingleMovie movie={movie} key={movie.id} />;
        })}
      </div>
    </div>
  );
}

export default MovieGroup;
