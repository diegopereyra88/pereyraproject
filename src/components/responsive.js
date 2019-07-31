import React, { Component } from "react";

import "./responsive.scss";

class Responsive extends Component {
  render() {
    return (
      <div className="example">
        <div className="mobile-only"> Soy un div de lujo móvil </div>
        <div className="desktop-only"> I 'm a heavy div de escritorio </div>
      </div>
    );
  }
}
export default Responsive;
