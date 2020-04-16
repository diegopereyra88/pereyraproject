import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import Grid from "@material-ui/core/Grid";

import Piezas from "../img/pieza.svg";
import Design from "../img/design.svg";
import Art from "../img/art3-11.svg";
import Animation from "../img/animation1.svg";
import Music from "../img/music.svg";
import Gaming from "../img/gaming.svg";
import Fondoanim from "../img/fondoanim.svg";
import WebPrograming from "../img/programing-web-programing1.svg";
import Program from "../img/program.svg";
import TresD from "../img/3d5.svg";

import { Link } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: "#6D559E",
    //backgroundImage: `url(${Fondoanim})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover"
  },
  paper: {
    padding: theme.spacing(0),
    textAlign: "center",
    color: theme.palette.text.secondary
  },
  imagenes: {
    width: "100%",

    borderRadius: "5%"
  },
  risas: {
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
    width: "10%"
  },
  animation: {
    backgroundImage: `url(${Fondoanim})`
  }
}));

export default function CenteredGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={12}>
          <Link to="/pereyraproject">
            <img src={Piezas} alt="" className={classes.imagenes} />
          </Link>
        </Grid>
        <Grid item xs={12}>
          <Link to="/musicpage">
            <img src={Music} alt="" className={classes.imagenes} />
          </Link>
        </Grid>
        <Grid item xs={12}>
          <img src={Gaming} alt="" className={classes.imagenes} />
        </Grid>
        <Grid item xs={12}>
          <img src={Design} alt="" className={classes.imagenes} />
        </Grid>
        <Grid item xs={12}>
          <img src={Art} alt="" className={classes.imagenes} />
        </Grid>
        <Grid item xs={12}>
          <img src={Animation} alt="" className={classes.imagenes} />
        </Grid>
        <Grid item xs={12}>
          <img src={WebPrograming} alt="" className={classes.imagenes} />
        </Grid>
        <Grid item xs={12}>
          <img src={TresD} alt="" className={classes.imagenes} />
        </Grid>
        <Grid item xs={12}>
          <img src={Program} alt="" className={classes.imagenes} />
        </Grid>
      </Grid>
    </div>
  );
}
