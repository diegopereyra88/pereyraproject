import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import Grid from "@material-ui/core/Grid";

import Parlante from "../img/parlante1-03.svg";
import Jostik from "../img/jostik-09.svg";
import Piezas from "../img/pieza.svg";
import Design from "../img/design.svg";
import Art from "../img/art3-11.svg";
import Animation from "../img/animation1.svg";
import Music from "../img/music.svg";
import Gaming from "../img/gaming.svg";
import WebPrograming from "../img/programing-web-programing.svg";
import Program from "../img/program.svg";

import Fondoanim from "../img/fondoanim.svg";

import useMediaQuery from "@material-ui/core/useMediaQuery";
import Box from "@material-ui/core/Box";
import { borders } from "@material-ui/system";

import { Link } from "react-router-dom";
import Gridres from "./grid-responsive"; //pagina para celu

const useStyles = makeStyles(theme => ({
  root: {
    padding: "3%",
    flexGrow: 1,
    backgroundColor: "#AD95DE",
    //backgroundImage: `url(${Fondoanim})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover"
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
  },
  imagenes: {
    width: "90%",
    padding: "2%",
    borderRadius: "10%"
  },
  risas: {
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
    width: "10%"
  },
  animation: {
    backgroundImage: `url(${Fondoanim})`,
    backgroundRepeat: "no-repeat"
  }
}));

export default function CenteredGrid() {
  const classes = useStyles();
  const isActive = useMediaQuery("(min-width:768px)"); //se usa para mediaquery libreria de react
  const titulos = useMediaQuery("(max-width:768px)"); //se usa para mediaquery libreria de react
  return (
    <div className={classes.root}>
      {isActive && (
        <Grid container>
          <Grid item xs={4}>
            <Link to="/pereyraproject">
              <img src={Piezas} alt="" className={classes.imagenes} />
            </Link>
          </Grid>
          <Grid item xs={4}>
            <img src={Music} alt="" className={classes.imagenes} />
          </Grid>
          <Grid item xs={4}>
            <img src={Gaming} alt="" className={classes.imagenes} />
          </Grid>
          <Grid item xs={4}>
            <img src={Design} alt="" className={classes.imagenes} />
          </Grid>
          <Grid item xs={4}>
            <Box borderRadius="50%">
              <img src={Art} alt="" className={classes.imagenes} />
            </Box>
          </Grid>
          <Grid item xs={4}>
            <img src={Animation} alt="" className={classes.imagenes} />
          </Grid>
          <Grid item xs={4}>
            <img src={WebPrograming} alt="" className={classes.imagenes} />
          </Grid>
          <Grid item xs={4}>
            <img src={Program} alt="" className={classes.imagenes} />
          </Grid>
        </Grid>
      )}
      {titulos && <Gridres />}
    </div>
  );
}
