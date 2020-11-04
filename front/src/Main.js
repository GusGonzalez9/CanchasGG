import React from "react";
import { Route, Switch, Redirect, component } from "react-router-dom";

import NavbarContainer from "./components/NavBar/NavbarContainer";
import FooterContainer from "./components/footer/FooterContainer";
import singleProduct from "./components/singleProduct/singleProduct";

class Main extends React.Component {
  render() {
    return (
      <div>
        <Route path="/" component={NavbarContainer} />
        <Route path="/products" component={singleProduct} /> <FooterContainer />
      </div>
    );
  }
}

export default Main;
