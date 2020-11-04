import React from "react";
import { Route, Switch, Redirect, component } from "react-router-dom";
import "./styles/style.css";
import NavbarContainer from "./components/NavBar/NavbarContainer";
import PreContainer from "./components/prefooter/PreContainer";
import FooterContainer from "./components/footer/FooterContainer";
import singleProduct from "./components/singleProduct/singleProduct";
import SliderContainer from "./components/Slider/SliderContainer";
import CardsContainer from "./components/Cards/CardsContainer";

class Main extends React.Component {
  render() {
    return (
      <div>
        <NavbarContainer />
        <SliderContainer />

        <h1>
          Productos <span>destacados</span>
        </h1>
        <CardsContainer />
        {/* cards */}
        <h1>
          Productos en <span>oferta</span>
        </h1>
        <Route path="/products" component={singleProduct} />
        {/*  <Route path="/category" component={Category} /> */}
        <CardsContainer />
        <PreContainer />
        <FooterContainer />
      </div>
    );
  }
}

export default Main;
