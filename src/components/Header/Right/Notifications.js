import React, { Component } from "react";
import NotificationDropdown from "./NotifDropdown";

class Notifications extends Component {
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
        className="header-link notifications"
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
        <i className="fa fa-bell fa-lg" aria-hidden="true" />
        <div className="notif-container" style={style}>
          <i className="fa fa-caret-up" aria-hidden="true" />
          <NotificationDropdown />
        </div>
      </span>
    );
  }
}

export default Notifications;
