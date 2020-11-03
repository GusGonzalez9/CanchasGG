import React from "react";
 import { connect } from "react-redux";
import {Route, Switch,Redirect,component} from 'react-router-dom'
import Navbar from './components/NavBar/Navbar'
import singleProduct from './components/singleProduct/singleProduct'

class Main extends React.Component {
  render() {
    return (
      <div>
      <Route path="/" component = {Navbar}/>
      <Route path="/products" component={singleProduct}/> {/* ACA SE RENDERIZARIA EL /products/:id */}
      </div>
    );
  }
}

export default Main;