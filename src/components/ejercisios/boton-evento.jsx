import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import risas from "../img/risas.svg";

const AnimBot = () => {
  const [isAnimBot, setAnimBot] = useState(true); //al hacer click desaparace la imagen
  const anim = useSpring({
    //opacity: isAnimBot ? 1 : 0,
    //fontSize: isAnimBot ? "10px" : "5px",
    color: isAnimBot ? "#AD95DE" : "#0C49D3",
    transform: isAnimBot
      ? "translate3d(0px, 0px, 0px)"
      : "translate3d(50px, 0px, 50px)"
  });
  return (
    <div
      style={{
        width: 400,
        height: 400,
        backgroundColor: "#95DED1"
      }}
    >
      <animated.div style={anim}>
        {/*CLICK PARA DESAPARECER LA IMAGEN*/}
        <h1>RISAS</h1>
        <img
          onClick={() => setAnimBot(!isAnimBot)}
          src={risas}
          width="200px"
          height="200px"
        />
      </animated.div>
    </div>
  );
};
export default AnimBot;
