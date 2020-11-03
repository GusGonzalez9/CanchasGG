import React from "react";
 import { connect } from "react-redux";
import {Route, Switch,Redirect,component} from 'react-router-dom'
import Navbar from './components/NavBar/Navbar'


class Main extends React.Component {
  render() {
    return (
      <div>
      <Route path="/" component = {Navbar}/>
      </div>
    );
  }
}

export default Main;