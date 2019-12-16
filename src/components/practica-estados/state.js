import React from "react";
class Estados extends React.Component {
  state = {};
  cargar = e => {
    this.setState({ [e.target.name]: e.target.value }); //guarda state de distintos inputs
    console.log(e.target.name, e.target.value);
  };
  render() {
    return (
      <React.Fragment>
        <h1>NOMBRES</h1>
        <p>Escriba su nombre</p>
        <input
          type="text"
          name="busqueda"
          value={this.state.busqueda}
          onChange={this.cargar}
        />
        <br />
        <input type="text" name="practicaEstados2" onChange={this.cargar} />
      </React.Fragment>
    );
  }
}
export default Estados;
