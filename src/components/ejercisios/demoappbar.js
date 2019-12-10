import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles(soyparametro => ({
  //Parametro de makeStyles
  root: {
    flexGrow: 1
  },
  menudelBotton: propiedadespasando => ({
    marginRight: soyparametro.spacing(2),
    backgroundColor: "#4CAF50"
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
          <IconButton
            edge="start" //props del componente IconButton
            className={classes.menudelBotton}
            color="black"
            aria-label="Menu"
          >
            <MenuIcon />
          </IconButton>
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
