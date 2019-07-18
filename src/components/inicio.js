import React from "react";
import Button from "@material-ui/core/Button"; //se agregan estilos via react material
import {
  AppBar,
  Toolbar,
  Typography,
  Grid,
  Paper,
  Box,
  CssBaseline,
  Container
} from "@material-ui/core";
import logorock from "./logo-de-musica-rock-by-vexels.png";
import logocalavera from "./calavera-rock.png";
import voltaje from "./voltaje2.svg";
import titulopereyra from "./titulo1.svg";
import monkeywelcome from "./monkey-welcome.svg";
import artpicture from "./fondo-inicio3.svg";
const style = {
  //se crea una constante que contiene style personalizados
  Paper: {
    padding: 20,
    marginTop: 10,
    marginBottom: 10
  },
  Primero: {
    backgroundColor: "#cfe8fc"
  },
  Segundo: {
    backgroundColor: "#90E8AF"
  }
};
class Inicio extends React.Component {
  render() {
    return (
      <React.Fragment>
        <CssBaseline />
        {/*se agregan styless al grid para centrar la imagen en el div */}
        <Grid container>
          <Grid item xs={12} style={style.Primero}>
            {/*Se ven componentes a analizar img, etc*/}

            <img
              src={monkeywelcome}
              alt=""
              style={{
                width: "30%",

                display: "block",
                margin: "auto",
                padding: "10px"
              }}
            />
          </Grid>
          <Grid item xs={12} style={style.Segundo}>
            {/*Se ven componentes a analizar img, etc*/}

            <img
              src={artpicture}
              alt=""
              style={{
                width: "30%",

                display: "block",
                margin: "auto",
                padding: "10px"
              }}
            />
          </Grid>
        </Grid>
      </React.Fragment>
    );
  }
}
export default Inicio;
