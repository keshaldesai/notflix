import React, { Component } from "react";
import logo from "../../images/logo.svg";
import Browse from "./Left/Browse";
import Kids from "./Left/Kids";
import DVD from "./Left/DVD";

class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="header-left">
          <img src={logo} height="30" alt="logo" className="logo" />
          <Browse />
          <Kids />
          <DVD />
        </div>
        <div className="header-right">
          <span className="header-link"> Search</span>
          <span className="header-link"> Notifications</span>
          <span className="header-link"> User</span>
        </div>
      </div>
    );
  }
}

export default Header;
