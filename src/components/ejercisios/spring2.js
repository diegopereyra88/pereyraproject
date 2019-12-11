import React from "react";
import { useSpring, animated } from "react-spring";
import { Spring } from "react-spring/renderprops";
import Pieza from "../img/20191210_234538.jpg";

export default function Primaveracero() {
  return (
    <Spring
      from={{ opacity: 0, marginTop: -500 }}
      to={{ opacity: 1, marginTop: 0 }}
    >
      {props => (
        <div style={props}>
          <div style={c1style}>
            <img
              src={Pieza}
              alt=""
              style={{
                width: "50%",
                display: "block",
                margin: "auto",
                padding: "5px"
              }}
            />{" "}
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor ad
              maiores numquam minus velit expedita id pariatur quo enim, animi
              qui autem et recusandae excepturi iure ea perferendis neque. At.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor ad
              maiores numquam minus velit expedita id pariatur quo enim, animi
              qui autem et recusandae excepturi iure ea perferendis neque. At.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor ad
              maiores numquam minus velit expedita id pariatur quo enim, animi
              qui autem et recusandae excepturi iure ea perferendis neque. At.
            </p>
          </div>
        </div>
      )}
    </Spring>
  );
}
const c1style = {
  background: "steelblue",
  color: "white",
  padding: "1.5rem"
};
