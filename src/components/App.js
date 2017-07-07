import React, { Component } from "react";
import Header from "./Header/Header";
import Splash from "./Splash/Splash";
import Movies from "./Movies/Movies";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="content">
          <Splash />
          <Movies />
        </div>
      </div>
    );
  }
}

export default App;
