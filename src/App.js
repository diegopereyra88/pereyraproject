import React, { Component } from "react";

import "./App.css";

import Pereyraproject from "./components/ejercisios/spring2.js";
import MusicaPage from "./components/ejercisios/musicpage.js";

import Cuadricula from "./components/ejercisios/cuadricula.js";
import Grid2 from "./components/ejercisios/grid2.js";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import Layout from "./components/layouts.js";
import Home from "./components/home.js";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Layout>
          {/*rutas para los links ver layout*/}
          <Switch>
            <Route path="/musicpage" component={MusicaPage} />
            {/*"pagina de music " */}
            <Route path="/grilla" component={Grid2} />
            {/*"/grilla" menu de opciones animation music etc,etc*/}
            <Route path="/celu" component={Cuadricula} />
            {/* "/celu" menu de cudricula pref para celu */}
            <Route path="/pereyraproject" component={Pereyraproject} />
            {/*"/pereyraproject " pagina presentando Pereyra Project*/}
            <Route path="/" component={Home} />
            {/*"pagina principal " */}
          </Switch>
        </Layout>
      </BrowserRouter>
    );
  }
}

export default App;
