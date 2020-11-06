import React from "react";
import { Route, Switch, Redirect, component } from "react-router-dom";
import {connect} from 'react-redux'

import NavbarContainer from "./components/NavBar/NavbarContainer";
import PreContainer from "./components/prefooter/PreContainer";
import FooterContainer from "./components/footer/FooterContainer";
import RegisterContainer from "./components/Register/RegisterContainer";
import LoginContainer from "./components/Login/LoginContainer";
import singleProductContainer from "./components/singleProduct/singleProductContainer";
import HomeContainer from './components/Home/HomeContainer'
import MyCartContainer from './components/MyCart/MyCartContainer'

import {hiUser} from './store/action-creators/users'
import {fetchMyCart} from './store/action-creators/carts'

const mapDispatchToProps = dispatch => ({
    hiUser: ()=> dispatch(hiUser()),
    fetchMyCart: ()=> dispatch(fetchMyCart()),
})

class Main extends React.Component {
  
  componentDidMount(){
    this.props.hiUser().then(() => console.log('ACA VA EL DE LA LINEA DE ABAJO, PERRITO'))
    this.props.fetchMyCart()
    //ACA HAY QUE ARREGLAR
  }  

  render() {
    return (
      <>
        <NavbarContainer/>
        <Switch>  
          <Route exact path="/" component={HomeContainer}/>
          <Route exact path="/products/:id" component={singleProductContainer}/>
          <Route path="/carts/mycart" component={MyCartContainer}/>
        </Switch>
        <PreContainer />
        <FooterContainer />
        <Switch>
          <Route exact path="/login" component={LoginContainer} />
          <Route exact path="/register" component={RegisterContainer} />
        </Switch>
      </>
    );
  }
}

export default connect(null,mapDispatchToProps)(Main);
