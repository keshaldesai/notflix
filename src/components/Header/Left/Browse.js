import React, { Component } from "react";
import BrowseOptions from "./BrowseOptions";

class Browse extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showMenu: false
    };
  }

  render() {
    const { showMenu } = this.state;
    return (
      <span
        className="header-link browse"
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
        Browse <i className="fa fa-caret-down" aria-hidden="true" />
        <BrowseOptions showMenu={showMenu} />
      </span>
    );
  }
}

export default Browse;
