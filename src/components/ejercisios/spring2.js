import React from "react";

import { Spring } from "react-spring/renderprops";

import Perfil from "../img/foto-perfil.png";
import PPAvatar1 from "../img/PPAvatar1.svg";
import ArtAvatar1 from "../img/art-avatar1.svg";
import Avatar1 from "../img/PPAvatar1.svg";
import GamingAvatar1 from "../img/gaming-avatar1.svg";
import DesignAvatar1 from "../img/design-avatar1.svg";
import MusicAvatar1 from "../img/music-avatar1.svg";
import AnimationAvatar1 from "../img/animation-avatar1.svg";
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
                    <Paper className={classes.paper}>
                      <Avatar
                        alt="Diego Pereyra"
                        src={PPAvatar1}
                        className={classes.large2}
                      />
                      <p>
                        Pereyra Project es un sitio dedicado al arte digital.En
                        esta pagina su recorrido por el arte digital. Musica,
                        Arte , Gaming, Diseño, Animacion,Programacion, son
                        algunos de los puntos importantes en esta pagina
                        dedicada a expresion artistica digital.
                      </p>
                    </Paper>
                  </Grid>
                </Grid>
              </Container>
              <Container>
                <Grid container spacing={5}>
                  <Grid item xs>
                    <Paper className={classes.paper}>
                      <Grid
                        container
                        direction="row"
                        justify="space-evenly"
                        alignItems="center"
                      >
                        <Avatar
                          alt="Diego Pereyra"
                          src={ArtAvatar1}
                          className={classes.large2}
                        />
                        <Avatar
                          alt="Diego Pereyra"
                          src={GamingAvatar1}
                          className={classes.large2}
                        />
                        <Avatar
                          alt="Diego Pereyra"
                          src={AnimationAvatar1}
                          className={classes.large2}
                        />
                        <Avatar
                          alt="Diego Pereyra"
                          src={MusicAvatar1}
                          className={classes.large2}
                        />
                        <Avatar
                          alt="Diego Pereyra"
                          src={DesignAvatar1}
                          className={classes.large2}
                        />
                      </Grid>
                      <p>
                        Recorre de manera agil y simple los distintos links de
                        la pagina.Cada uno de ellos expresa de manera sencilla
                        el trabajo realizado con explicaciones para que puedas
                        entender mejor el concepto del arte digital.
                      </p>
                    </Paper>
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
