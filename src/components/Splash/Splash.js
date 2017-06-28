import React from "react";
import splash from "../../images/splash.jpeg";
import splashTitle from "../../images/splashtitle.webp";

const Splash = () => {
  return (
    <div className="splash" style={{ backgroundImage: `url(${splash})` }}>
      <img src={splashTitle} alt="splash-title" />
    </div>
  );
};

export default Splash;
