import React from "react";
import { Route, Switch, Redirect, component } from "react-router-dom";

import NavbarContainer from "./components/NavBar/NavbarContainer";
import FooterContainer from "./components/footer/FooterContainer";
import RegisterContainer from './components/Register/RegisterContainer'
import LoginContainer from './components/Login/LoginContainer'
import singleProductContainer from "./components/singleProduct/singleProductContainer";

class Main extends React.Component {
  render() {
    return (
      
      <div>
        <Switch>
        <Route exact path="/" component={NavbarContainer} />
        <Route exact path="/products" component={singleProduct} />
        <Route path="/products/:id" component={singleProductContainer} />
        </Switch>
         <FooterContainer /> 
         <Switch>
         <Route exact path="/login" component={LoginContainer}/>
         <Route exact path="/register" component ={RegisterContainer}/>
         </Switch>
      </div>
    );
  }
}

export default Main;
