import React from "react";
import Cards from "../Cards/Cards";
import style from "./CardStyle";

export default class CardsContainer extends React.Component {
  render() {
    return (
      <div style={style.contenedor}>
        <Cards />
        <Cards />
        <Cards />
      </div>
    );
  }
}
