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
      Play My List
    </div>
  );
};

export default Splash;
