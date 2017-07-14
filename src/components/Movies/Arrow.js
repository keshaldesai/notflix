import React from "react";

function Arrow({ direction, handleClick, show, padding }) {
  const styleObj = {
    display: show ? "" : "none"
  };
  if (padding) {
    styleObj.paddingLeft = padding;
    styleObj.paddingRight = padding;
  }
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
