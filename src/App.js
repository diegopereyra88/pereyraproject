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
import Estados from "./components/practica-estados/state.js";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Layout from "./components/layouts.js";
import Home from "./components/home.js";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Spring from "./components/ejercisios/use-spring";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Layout>
          {/*rutas para los links ver layout*/}
          <Switch>
            <Route path="/grilla" component={Grid2} />
            <Route path="/celu" component={Cuadricula} />
            <Route path="/NOSE" component={Primaveracero} />
            <Route path="/" component={Home} />
          </Switch>
        </Layout>
      </BrowserRouter>
    );
  }
}

export default App;
