import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
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
import Gato from "../img/gato1.svg";
import Fondoanim from "../img/fondoanim.svg";

import Anim from "../gif/mirafinalp2.gif";
import { Link } from "react-router-dom";
const AnimBot = () => {
  const [isAnimBot, setAnimBot] = useState(true); //al hacer click desaparace la imagen o de traslada
  const anim = useSpring({
    //opacity: isAnimBot ? 1 : 0,
    //fontSize: isAnimBot ? "10px" : "5px",
    color: isAnimBot ? "#AD95DE" : "#0C49D3",
    transform: isAnimBot
      ? "translate3d(0px, 0px, 0px)"
      : "translate3d(50px, 50px, 50px)",
    position: "absolute",
    paddingTop: "100px"
  });
  const [isAnimBot2, setAnimBot2] = useState(true);
  const anim2 = useSpring({
    //opacity: isAnimBot ? 1 : 0,
    //fontSize: isAnimBot ? "10px" : "5px",
    color: isAnimBot2 ? "#AD95DE" : "#0C49D3",
    transform: isAnimBot2
      ? "translate3d(0px, 0px, 0px)"
      : "translate3d(50px, 50px, 50px)",
    position: "absolute",
    paddingTop: "250px"
  });
  return (
    <div>
      <animated.div style={anim}>
        {/*CLICK PARA DESAPARECER LA IMAGEN*/}

        <img
          onMouseOver={() => setAnimBot(!isAnimBot)}
          src={Risas}
          width="50px"
          height="50px"
        />
      </animated.div>
      <animated.div style={anim2}>
        <img
          onMouseOver={() => setAnimBot2(!isAnimBot2)}
          src={Gato}
          width="50px"
          height="50px"
        />
      </animated.div>
    </div>
  );
};
export default AnimBot;
