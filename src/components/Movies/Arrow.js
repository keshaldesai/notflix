import React from "react";

function Arrow({ direction, handleClick, show }) {
  const styleObj = {
    display: show ? "" : "none"
  };
  return (
    <div
      className={`${direction}-arrow`}
      onClick={handleClick}
      style={styleObj}
    >
      <i className={`fa fa-chevron-${direction} fa-2x`} aria-hidden="true" />
    </div>
  );
}

export default Arrow;
