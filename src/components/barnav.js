import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { textAlign } from "@material-ui/system";
import tituloprincipal from "./prueba-titulo2.svg";
const useStyles = makeStyles({
  root: {
    flexGrow: 1
  }
});

export default function SimpleAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" style={{ backgroundColor: "#FFF11E" }}>
        <Toolbar>
          <Typography
            variant="h6"
            color="inherit"
            style={{ margin: "auto", display: "block" }}
          >
            <img
              src={tituloprincipal}
              alt=""
              style={{
                width: "60%",
                display: "block",
                margin: "auto",
                padding: "10px"
              }}
            />
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
