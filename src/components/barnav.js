import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { textAlign } from "@material-ui/system";
import tituloprincipal from "./prueba-titulo2.svg";
import IconButton from "@material-ui/core/IconButton";
import barnav from "./barnav.scss";
import Button from "@material-ui/core/Button";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import MenuIcon from "@material-ui/icons/Menu";
import Desp from "./ejercisios/menudesplegable1.js";

const useStyles = makeStyles({
  root: {
    flexGrow: 1
  },
  res: {
    color: "grey"
  },
  menuburger: {}
});

export default function SimpleAppBar() {
  const classes = useStyles();
  const isActive = useMediaQuery("(max-width:600px)");
  const titulos = useMediaQuery("(min-width:600px)");

  return (
    <div className={classes.root}>
      <AppBar position="static" style={{ backgroundColor: "#FFF11E" }}>
        <Toolbar
          changeColorOnScroll={{
            height: 400,
            color: "white"
          }}
        >
          {isActive && <Desp />}

          <Typography
            variant="h6"
            color="inherit"
            style={{ margin: "auto", display: "block" }}
          >
            <img
              src={tituloprincipal}
              alt=""
              style={{
                width: "50%",
                display: "block",
                margin: "auto",
                padding: "5px"
              }}
            />
            {titulos && <Button color="dark">ART</Button>}
            {titulos && <Button color="dark">GAMING</Button>}

            {titulos && <Button color="dark">ANIMATION</Button>}
            {titulos && <Button color="dark">DESIGN</Button>}
            {titulos && <Button color="dark">MUSIC</Button>}
            {titulos && <Button color="dark">GAME DESIGN</Button>}
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
