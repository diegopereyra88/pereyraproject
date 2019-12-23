import React from "react";
import Footer from "./piepagina";
import BarNav from "./barnav";
export function Layouts(props) {
  const children = props.children;
  return (
    <React.Fragment>
      <BarNav />
      {children}
      <Footer />
    </React.Fragment>
  );
}
