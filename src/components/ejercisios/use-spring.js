import React, { useState } from "react";
import ReactDOM from "react-dom";
import { useSpring, animated } from "react-spring";

import iniciales from "../img/logo-iniciales.svg";
import gato from "../img/gato1.svg";
import gatobat from "../img/gato-bat.svg";
import risas from "../img/risas.svg";

export default function App() {
  const [state, toggle] = useState(true);
  const { x } = useSpring({
    from: { x: 0 },
    x: state ? 1 : 0,
    config: { duration: 1000 }
  });
  return (
    <div className="body" onClick={() => toggle(!state)}>
      <animated.div
        style={{
          textAlign: "center",
          width: "100%",
          height: "100%",
          margin: 0,
          padding: 0,
          fontWeight: 600,
          fontSize: "8em",

          opacity: x.interpolate({ range: [0, 1], output: [0.3, 1] }),
          transform: x
            .interpolate({
              range: [0, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 1],
              output: [1, 0.97, 0.9, 1.1, 0.9, 1.1, 1.03, 1]
            })
            .interpolate(x => `scale(${x})`)
        }}
      >
        <div style={{ backgroundColor: "#B2DE95" }}>
          <img src={iniciales} alt="" width="300" height="300" />
          <img src={gato} alt="" width="300" height="300" />
          <img src={risas} alt="" width="50" height="50" />
          <img src={gatobat} alt="" width="300" height="300" />
          <img src={risas} alt="" width="50" height="50" />
        </div>
      </animated.div>
    </div>
  );
}
