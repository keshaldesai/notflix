import React from "react";

const BrowseOptions = ({ showMenu, leaveHandler }) => {
  const links = [
    "Home",
    "My List",
    "Originals",
    "New Arrivals",
    "Audio & Subtitles",
    "Ways to Watch"
  ];
  const genresOne = [
    "TV Shows",
    "Action",
    "Anime",
    "Children & Family",
    "Classics",
    "Comedies"
  ];
  const genresTwo = [
    "Cult Movies",
    "Documentaries",
    "Dramas",
    "Faith & Spirituality",
    "Gay & Lesbian",
    "Horror"
  ];
  const genresThree = [
    "Independent",
    "International",
    "Music",
    "Musicals",
    "Romance",
    "Sci-Fi & Fantasy"
  ];
  const genresFour = ["Sports Movies", "Stand-up & Talk Shows", "Thrillers"];
  const style = {
    visibility: showMenu ? "" : "hidden",
    opacity: showMenu ? 1 : 0
  };
  return (
    <div className="options-container" style={style}>
      <span><i className="fa fa-caret-up" aria-hidden="true" /></span>
      <div className="browse-options">
        <ul className="options-links">
          {links.map(link => {
            return <li className="options-item" key={link}>{link}</li>;
          })}
        </ul>
        <ul className="options-genres">
          {genresOne.map(genre => {
            return <li className="options-item" key={genre}>{genre}</li>;
          })}
        </ul>
        <ul className="options-genres">
          {genresTwo.map(genre => {
            return <li className="options-item" key={genre}>{genre}</li>;
          })}
        </ul>
        <ul className="options-genres">
          {genresThree.map(genre => {
            return <li className="options-item" key={genre}>{genre}</li>;
          })}
        </ul>
        <ul className="options-genres">
          {genresFour.map(genre => {
            return <li className="options-item" key={genre}>{genre}</li>;
          })}
        </ul>
      </div>
    </div>
  );
};

export default BrowseOptions;
