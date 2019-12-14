import React, { Component } from "react";

import BarNav from "./components/barnav";
import Inicio from "./components/inicio";
import "./App.css";
import Responsive from "./components/responsive.js";
import Welcome from "./components/practica.js";
import Barra from "./components/Layout/index.js";
import Demo from "./components/ejercisios/demoappbar.js";
import Resp from "./components/ejercisios/cssresponsive.js";
import Boton from "./components/ejercisios/botonprueba.js";
import Respp from "./components/ejercisios/responsivematerial2.js";
import Primaveracero from "./components/ejercisios/spring2.js";
import Prubagrids from "./components/ejercisios/prueba-grids.js";
import Cuadricula from "./components/ejercisios/cuadricula.js";
import Grid2 from "./components/ejercisios/grid2.js";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <BarNav />

        <Prubagrids />
        <Cuadricula />
        <Grid2 />
      </React.Fragment>
    );
  }
}

export default App;
