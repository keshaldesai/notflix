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
    return (
      <span className="header-link browse">
        <div
          onMouseOver={() => {
            this.setState({ showMenu: true });
          }}
          onMouseLeave={() => {
            this.setState({ showMenu: false });
          }}
        >
          Browse <i className="fa fa-caret-down" aria-hidden="true" />
          <BrowseOptions showMenu={this.state.showMenu} />
        </div>
      </span>
    );
  }
}

export default Browse;
