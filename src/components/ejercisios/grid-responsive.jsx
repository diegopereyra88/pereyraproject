import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Pieza from "../img/pieza1.svg";
import Parlante from "../img/parlante1-03.svg";
import Jostik from "../img/jostik-09.svg";
import Piezas from "../img/pieza.svg";
import Design from "../img/design.svg";
import Art from "../img/art3-11.svg";
import Risas from "../img/risas.svg";
import Fondoanim from "../img/fondoanim.svg";
import Animat from "./animation";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Anim from "../gif/mirafinalp2.gif";
import { Link } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  root: {
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
          <Link to="/nose">
            <img src={Piezas} alt="" />
          </Link>
        </Grid>
        <Grid item xs={12}>
          <img src={Parlante} alt="" />
        </Grid>
        <Grid item xs={12}>
          <img src={Jostik} alt="" />
        </Grid>
        <Grid item xs={12}>
          <img src={Design} alt="" />
        </Grid>
        <Grid item xs={12}>
          <img src={Art} alt="" />
        </Grid>
        <Grid item xs={12} className={classes.animation}>
          <p>
            hola esta es la pagina resposiva mia esperro Lorem ipsum dolor sit
            amet, consectetur adipisicing elit. Ea ratione nihil laboriosam ad
            dolorem nulla perferendis officiis qui magnam reprehenderit tenetur
            assumenda culpa doloribus, nostrum reiciendis eaque quae quibusdam
            fugiat!
          </p>
        </Grid>
      </Grid>
    </div>
  );
}
