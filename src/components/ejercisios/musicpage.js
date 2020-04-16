import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import ReactPlayer from "react-player";
import Grid from "@material-ui/core/Grid";
import Music from "../img/music-avatar1.svg";
import Audios from "../audio-page/audio";

export default function FixedContainer() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container fixed>
        <Typography
          component="div"
          style={{ backgroundColor: "#cfe8fc", height: "100vh" }}
        >
          <Grid xs="12">
            {" "}
            <img src={Music} alt="" />
          </Grid>
        </Typography>
        <Audios />
      </Container>
    </React.Fragment>
  );
}
