import React from "react";
import splash from "../../images/splash.jpeg";
import splashTitle from "../../images/splashtitle.webp";

const Splash = () => {
  return (
    <div className="splash" style={{ backgroundImage: `url(${splash})` }}>
      <img src={splashTitle} alt="splash-title" className="splash-title" />
      <div />
      He's a half-horse, half-man, has-been TV star who drinks a bit too much.
      He's really got a lot going on right now.

      <div />
      <div className="splash-buttons">
        <span className="button play-button">
          <i className="fa fa-play" aria-hidden="true" /> PLAY
        </span>
        <span className="button list-button">
          <i className="fa fa-plus" aria-hidden="true" /> MY LIST
        </span>
      </div>
    </div>
  );
};

export default Splash;
