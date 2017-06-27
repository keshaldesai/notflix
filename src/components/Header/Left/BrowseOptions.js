import React from "react";

const BrowseOptions = ({ showMenu }) => {
  return (
    <div className="browse-options" style={{ opacity: showMenu ? 1 : 0 }}>
      options
    </div>
  );
};

export default BrowseOptions;
