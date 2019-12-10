import React, { Component } from "react";

import BarNav from "./components/barnav";
import Inicio from "./components/inicio";
import "./App.css";
import Responsive from "./components/responsive.js";
import Welcome from "./components/practica.js";
import Barra from "./components/Layout/index.js";
import Demostar from "./components/ejercisios/demoappbar.js";
import Boton from "./components/ejercisios/botonprueba.js";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <BarNav />
      </React.Fragment>
    );
  }
}

export default App;
