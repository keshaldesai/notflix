import React from "react";

function Arrow({ direction, handleClick }) {
  return (
    <div className={`${direction}-arrow`}>
      <i
        className={`fa fa-chevron-${direction} fa-2x`}
        aria-hidden="true"
        onClick={handleClick}
      />
    </div>
  );
}

export default Arrow;
