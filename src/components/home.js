import React, { Component } from "react";

import BarNav from "./barnav";

import Responsive from "./responsive.js";
import Welcome from "./practica.js";
import Barra from "./Layout/index.js";
import Demo from "./ejercisios/demoappbar.js";
import Resp from "./ejercisios/cssresponsive.js";
import Boton from "./ejercisios/botonprueba.js";
import Respp from "./ejercisios/responsivematerial2.js";
import Primaveracero from "./ejercisios/spring2.js";
import Prubagrids from "./ejercisios/prueba-grids.js";
import Cuadricula from "./ejercisios/cuadricula.js";
import Grid2 from "./ejercisios/grid2.js";
import Estados from "./practica-estados/state.js";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Footer from "./piepagina";
import Inicio from "./ejercisios/prueba-grids";
import Anima from "./ejercisios/prueba-spring2";
import Anima2 from "./ejercisios/boton-evento";

class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <Inicio />
        <Anima />
        <Anima2 />
      </React.Fragment>
    );
  }
}

export default Home;
