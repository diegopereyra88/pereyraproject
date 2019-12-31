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
import Gridres from "./grid-responsive";

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
            <Link to="/nose">
              <img src={Piezas} alt="" />
            </Link>
          </Grid>
          <Grid item xs={4}>
            <img src={Parlante} alt="" />
          </Grid>
          <Grid item xs={4}>
            <img src={Jostik} alt="" />
          </Grid>
          <Grid item xs={4}>
            <img src={Design} alt="" />
          </Grid>
          <Grid item xs={4}>
            <img src={Art} alt="" />
          </Grid>
          <Grid item xs={4} className={classes.animation}></Grid>
        </Grid>
      )}
      {titulos && <Gridres />}
    </div>
  );
}
