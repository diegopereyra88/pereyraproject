import React, { Component } from "react";
import NavBar from "./components/nav";
import BarNav from "./components/barnav";
import Inicio from "./components/inicio";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <BarNav />
        <Inicio />
      </div>
    );
  }
}

export default App;
