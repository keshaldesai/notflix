import React, { Component } from "react";
import logo from "../../images/logo.svg";
import Browse from "./Left/Browse";
import Kids from "./Left/Kids";
import DVD from "./Left/DVD";
import Search from "./Right/Search";
import Notifications from "./Right/Notifications";
import User from "./Right/User";

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
          <Search />
          <Notifications />
          <User />
        </div>
      </div>
    );
  }
}

export default Header;
