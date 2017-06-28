import React, { Component } from "react";
import UserDropdown from "./UserDropdown";

class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showMenu: false
    };
  }

  render() {
    const { showMenu } = this.state;
    const style = {
      visibility: showMenu ? "" : "hidden",
      opacity: showMenu ? 1 : 0
    };
    return (
      <span
        className="header-link user"
        onMouseOver={() => {
          this.setState({ showMenu: true });
        }}
        onClick={() => {
          this.setState({ showMenu: !showMenu });
        }}
        onMouseLeave={() => {
          this.setState({ showMenu: false });
        }}
      >
        <img
          src="https://secure.netflix.com/ffe/profiles/avatars_v2/32x32/PICON_027.png"
          alt="icon"
          className="user-icon"
        />
        User <i className="fa fa-caret-down" aria-hidden="true" />
        <div className="user-container" style={style}>
          <i className="fa fa-caret-up" aria-hidden="true" />
          <UserDropdown />
        </div>
      </span>
    );
  }
}

export default User;
