import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import risas from "../img/risas.svg";

const AnimBot = () => {
  const [isAnimBot, setAnimBot] = useState(true); //al hacer click desaparace la imagen
  const anim = useSpring({
    opacity: isAnimBot ? 1 : 0
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
