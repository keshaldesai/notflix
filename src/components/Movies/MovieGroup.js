import React from "react";

function MovieGroup({ movies }) {
  return (
    <pre>
      {JSON.stringify(movies, null, 2)}
    </pre>
  );
}

export default MovieGroup;
