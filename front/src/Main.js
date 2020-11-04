import React from "react";
import { Route, Switch, Redirect, component } from "react-router-dom";
import "./styles/style.css";
import NavbarContainer from "./components/NavBar/NavbarContainer";
import PreContainer from "./components/prefooter/PreContainer";
import FooterContainer from "./components/footer/FooterContainer";
import SliderContainer from "./components/Slider/SliderContainer";
import CardsContainer from "./components/Cards/CardsContainer";
import RegisterContainer from './components/Register/RegisterContainer'
import LoginContainer from './components/Login/LoginContainer'
import singleProductContainer from "./components/singleProduct/singleProductContainer";

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
         <Switch>
        <Route exact path="/products" component={singleProduct} />
        <Route path="/products/:id" component={singleProductContainer} />
        </Switch>
         <FooterContainer /> 
         <Switch>
         <Route exact path="/login" component={LoginContainer}/>
         <Route exact path="/register" component ={RegisterContainer}/>
         </Switch>
        <CardsContainer />
        <PreContainer />
        <FooterContainer />
      </div>
    );
  }
}

export default Main;
