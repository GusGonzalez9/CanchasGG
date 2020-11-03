import React from "react";
import {Route, Switch,Redirect,component} from 'react-router-dom'
import NavbarContainer from './components/NavBar/NavbarContainer'
import FooterContainer from '../src/components/footer/FooterContainer'

class Main extends React.Component {
  render() {
    return (
      <div>
      <div>
      <Route path="/" component = {NavbarContainer}/>
      </div>
      <FooterContainer/>
      </div>
    );
  }
}

export default Main;