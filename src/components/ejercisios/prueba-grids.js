import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Pieza from "../img/pieza1.svg";
import Parlante from "../img/parlante1-03.svg";
import Jostik from "../img/jostik-09.svg";
import Piezas from "../img/pieza1.svg";
import Design from "../img/design.svg";
import { Link } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
  }
}));

export default function CenteredGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={0}>
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
      </Grid>
    </div>
  );
}
