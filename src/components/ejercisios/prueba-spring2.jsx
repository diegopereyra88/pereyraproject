import React from "react";
import { useSpring, animated } from "react-spring";
import iniciales from "../img/logo-iniciales.svg";
const Anima = () => {
  const fade = useSpring({
    from: { opacity: 0 },
    opacity: 1
  });
  console.log(fade);
  return (
    <div
      style={{
        width: 400,
        height: 400,
        backgroundColor: "#95DED1"
      }}
    >
      <animated.div style={fade}>
        <img src={iniciales} style={fade} width="200px" height="200px" />
      </animated.div>
    </div>
  );
};
export default Anima;
