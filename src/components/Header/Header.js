import React, { Component } from "react";
import logo from "../../images/logo.svg";

class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="header-left">
          <img src={logo} height="30" />
          Browse
          Kids
          DVD
        </div>
        <div className="header-right">
          Search on right
          Notifs on right
          Userprofile on right
        </div>
      </div>
    );
  }
}

export default Header;
