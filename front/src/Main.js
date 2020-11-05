import React from "react";
import { Route, Switch, Redirect, component } from "react-router-dom";
import {connect} from 'react-redux'

import NavbarContainer from "./components/NavBar/NavbarContainer";
import PreContainer from "./components/prefooter/PreContainer";
import FooterContainer from "./components/footer/FooterContainer";
import RegisterContainer from "./components/Register/RegisterContainer";
import LoginContainer from "./components/Login/LoginContainer";
import singleProductContainer from "./components/singleProduct/singleProductContainer";
import {permanenceUser} from './action-creators/usersCreators'
import HomeContainer from './components/Home/HomeContainer'
const mapDispatchToProps = (dispatch)=>{
  return {
    permanence : ()=> dispatch(permanenceUser())
  }
}


class Main extends React.Component {
   componentDidMount(){
    this.props.permanence()
  }  
  render() {
    return (
      <div>
        <NavbarContainer />
        <Switch>        
         
          <Route path="/" component={HomeContainer} />
          <Route path="/products/:id" component={singleProductContainer} />
        </Switch>

        <PreContainer />
        <FooterContainer />
        <Switch>
          <Route exact path="/login" component={LoginContainer} />
          <Route exact path="/register" component={RegisterContainer} />
        </Switch>
      </div>
    );
  }
}

export default connect(null,mapDispatchToProps)(Main);
