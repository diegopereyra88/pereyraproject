import React from "react";

import { Spring } from "react-spring/renderprops";

import Perfil from "../img/foto-perfil.png";
import PPAvatar from "../img/logo-pereyra-project-avatar1-10.svg";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

import Avatar from "@material-ui/core/Avatar";
import { Container } from "@material-ui/core";
//aclaraciones importantes: se usa el sistema de grid de react ui-material y tambien la libreria de animacion de react spring
const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(2)
    }
  },
  large2: {
    display: "block",
    margin: "auto",
    width: theme.spacing(28),
    height: theme.spacing(28)
  },
  large: {
    display: "block",
    margin: "auto",
    width: theme.spacing(18),
    height: theme.spacing(18),
    border: "5px solid yellow"
  },

  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    background: "#AD95DE"
  }
}));

export default function Pereyraproject() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Spring
        from={{ opacity: 0, marginTop: -500 }}
        to={{ opacity: 1, marginTop: 0 }}
      >
        {props => (
          <div style={props}>
            <div style={c1style}>
              <Container>
                <Grid container spacing={5}>
                  <Grid item xs>
                    <Paper className={classes.paper}>xs</Paper>
                  </Grid>
                  <Grid item xs>
                    <Paper className={classes.paper}>
                      <p>proyecto guardadode prueba para project</p>
                    </Paper>
                  </Grid>
                  <Grid item xs>
                    <Paper className={classes.paper}>
                      <Avatar
                        alt="Diego Pereyra"
                        src={PPAvatar}
                        className={classes.large2}
                      />
                      <p>
                        Pereyra Project es un sitio dedicado al arte
                        digital.Diego Pereyra muestra a traves de esta pagina su
                        recorrido por el arte digital. Musica, Arte , Gaming,
                        Diseño, Animacion,Programacion, son algunos de los
                        puntos importantes en esta pagina dedicada a expresion
                        artistica digital de Diego Pereyra.
                      </p>
                    </Paper>
                  </Grid>
                  <Grid item xs>
                    <Avatar
                      alt="Diego Pereyra"
                      src={Perfil}
                      className={classes.large}
                    />
                  </Grid>
                </Grid>
                <Grid container spacing={3} justify="center" direction="row">
                  <Grid item xs={3}>
                    <Avatar
                      alt="Diego Pereyra"
                      src={Perfil}
                      className={classes.large}
                    />
                  </Grid>
                  <Grid item xs={3}>
                    <Avatar
                      alt="Diego Pereyra"
                      src={Perfil}
                      className={classes.large}
                    />
                  </Grid>
                </Grid>
              </Container>
            </div>
          </div>
        )}
      </Spring>
    </React.Fragment>
  );
}
const c1style = {
  background: "steelblue",
  color: "white",
  padding: "1.5rem"
};
