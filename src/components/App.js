import React, { Component } from "react";
import Header from "./Header/Header";
import Splash from "./Splash/Splash";
import Movies from "./Movies/Movies";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Splash />
        <Movies />
      </div>
    );
  }
}

export default App;
