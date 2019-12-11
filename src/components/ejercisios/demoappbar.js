import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { minWidth } from "@material-ui/system";
import Desp from "./menudesplegable1.js";

const useStyles = makeStyles(soyparametro => ({
  //Parametro de makeStyles
  root: {
    flexGrow: 1
  },
  menudelBotton: propiedadespasando => ({
    marginRight: soyparametro.spacing(2),
    backgroundColor: "grey"
  }),
  title: {
    flexGrow: 1
  }
}));

function ButtonAppBar(propidaddes) {
  {
    /*se pasan parametros a const*/
  }
  const classes = useStyles(propidaddes);
  {
    /*recibe parametros de ButtonAppBar*/
  }
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Desp />
          <Typography variant="h6" className={classes.title}>
            Noticias
          </Typography>
          <Button color="inherit">Ingresa</Button>
          <Button color="inherit">Logueate</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
export default ButtonAppBar;
