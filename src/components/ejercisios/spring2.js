import React from "react";
import { useSpring, animated } from "react-spring";
import { Spring } from "react-spring/renderprops";
import Pieza from "../img/pieza1.svg";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

export default function Primaveracero() {
  return (
    <Spring
      from={{ opacity: 0, marginTop: -500 }}
      to={{ opacity: 1, marginTop: 0 }}
    >
      {props => (
        <div style={props}>
          <div style={c1style}>
            <img src={Pieza} alt="" />{" "}
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
