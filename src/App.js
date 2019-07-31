import React, { Component } from "react";

import BarNav from "./components/barnav";
import Inicio from "./components/inicio";
import "./App.css";
import Responsive from "./components/responsive.js";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <BarNav />
        <Inicio />
        <Responsive />
      </React.Fragment>
    );
  }
}

export default App;
