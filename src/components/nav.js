import React from "react";
import Button from "@material-ui/core/Button"; //se agregan estilos via react material
import {
  AppBar,
  Toolbar,
  Typography,
  Grid,
  Paper,
  Box,
  CssBaseline,
  Container
} from "@material-ui/core";
import logorock from "./logo-de-musica-rock-by-vexels.png";
import logocalavera from "./calavera-rock.png";
import voltaje from "./voltaje2.svg";
import titulopereyra from "./titulo1.svg";
const style = {
  //se crea una constante que contiene style personalizados
  Paper: {
    padding: 20,
    marginTop: 10,
    marginBottom: 10
  },
  Primero: {
    backgroundColor: "#cfe8fc",
    padding: 20,
    marginTop: 10,
    marginBottom: 10
  }
};
const es = (
  <Box
    bgcolor="secondary.main"
    borderColor="text.primary"
    m={5}
    border={10}
    style={{ width: "5rem", height: "5rem" }}
    img={logorock}
  />
);
class NavBar extends React.Component {
  render() {
    return (
      <React.Fragment>
        {/*se agregan styless al grid para centrar la imagen en el div */}
        <Grid container>
          <Grid item xs={6}>
            {" "}
            import titulopereyra from "./titulo1.svg";
          </Grid>
          <Grid item xs={6}>
            {" "}
            <img
              src={logocalavera}
              alt=""
              style={{
                width: "90px",
                height: "90px",
                display: "block",
                margin: "auto",
                padding: "10px"
              }}
            />
          </Grid>
        </Grid>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="title" color="white">
              <img
                src={titulopereyra}
                alt=""
                style={{
                  width: "50%",

                  display: "block",
                  margin: "auto"
                }}
              />
            </Typography>
          </Toolbar>
        </AppBar>
        <h1>SOY EL NAV</h1>;
        <Button variant="contained" color="magenta">
          Hello World
        </Button>
        <Grid container justify="center">
          <Box borderRadius="50%" clone>
            {es}
          </Box>
          <Box borderRadius="borderRadius" clone>
            {es}
          </Box>
          <Box borderRadius={16} clone>
            {es}
          </Box>
        </Grid>
        <Typography component="div" variant="body1">
          <Box bgcolor="primary.main" color="primary.contrastText" p={2} m={1}>
            primary.main
          </Box>
          <Box
            bgcolor="secondary.main"
            color="secondary.contrastText"
            p={2}
            m={1}
          >
            secondary.main
          </Box>
          <Box
            bgcolor="error.main"
            color="error.contrastText"
            p={1}
            m={1}
            borderRadius="50%"
          >
            error.main
          </Box>
          <Box bgcolor="text.primary" color="background.paper" p={2} m={1}>
            text.primary
          </Box>
          <Box bgcolor="text.secondary" color="background.paper" p={2} m={1}>
            text.secondary
          </Box>
          <Box bgcolor="text.disabled" color="background.paper" p={2} m={1}>
            text.disabled
          </Box>
          <Box bgcolor="text.hint" color="background.paper" p={2} m={1}>
            text.hint
          </Box>
        </Typography>
        <Box component="span" m={1} bgcolor="primary.main" color="error.main">
          ¿Por qué lo usamos? Es un hecho establecido hace mucho tiempo que un
          lector se distraerá con el contenido legible de una página al mirar su
          diseño. El punto de usar Lorem Ipsum es que tiene una distribución más
          o menos normal de letras, en lugar de usar 'Contenido aquí, contenido
          aquí', por lo que parece un inglés legible. Muchos paquetes de
          publicación de escritorio y editores de páginas web ahora usan Lorem
          Ipsum como su modelo de texto predeterminado, y una búsqueda de 'lorem
          ipsum' descubrirá muchos sitios web aún en su infancia. Varias
          versiones han evolucionado a lo largo de los años, a veces por
          accidente, a veces a propósito (humor inyectado y similares).
        </Box>
        <CssBaseline />
        <Container fixed>
          <Typography component="div" style={style.Primero}>
            ¿Por qué lo usamos? Es un hecho establecido hace mucho tiempo que un
            lector se distraerá con el contenido legible de una página al mirar
            su diseño. El punto de usar Lorem Ipsum es que tiene una
            distribución más o menos normal de letras, en lugar de usar
            'Contenido aquí, contenido aquí', por lo que parece un inglés
            legible. Muchos paquetes de publicación de escritorio y editores de
            páginas web ahora usan Lorem Ipsum como su modelo de texto
            predeterminado, y una búsqueda de 'lorem ipsum' descubrirá muchos
            sitios web aún en su infancia. Varias versiones han evolucionado a
            lo largo de los años, a veces por accidente, a veces a propósito
            (humor inyectado y similares).
          </Typography>
        </Container>
        <Grid container>
          <Grid item xs={12}>
            <Paper style={style.Paper} s>
              {/*Se pasa la const con los style*/} <h3>Mi prueba</h3>
              What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the
              printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an
              unknown printer took a galley of type and scrambled it to make a
              type specimen book. It has survived not only five centuries, but
              also the leap into electronic typesetting, remaining essentially
              unchanged. It was popularised in the 1960s with the release of
              Letraset sheets containing Lorem Ipsum passages, and more recently
              with desktop publishing software like Aldus PageMaker including
              versions of Lorem Ipsum.
            </Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper style={style.Paper}>
              {" "}
              <h3>Mi prueba </h3>
              What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the
              printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an
              unknown printer took a galley of type and scrambled it to make a
              type specimen book. It has survived not only five centuries, but
              also the leap into electronic typesetting, remaining essentially
              unchanged. It was popularised in the 1960s with the release of
              Letraset sheets containing Lorem Ipsum passages, and more recently
              with desktop publishing software like Aldus PageMaker including
              versions of Lorem Ipsum.
            </Paper>
          </Grid>
        </Grid>
      </React.Fragment>
    );
  }
}
export default NavBar;
