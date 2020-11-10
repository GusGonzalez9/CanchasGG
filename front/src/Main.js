import React from "react";
import { Route, Switch, Redirect, component } from "react-router-dom";
import { connect } from "react-redux";

import NavbarContainer from "./components/NavBar/NavbarContainer";
import PreContainer from "./components/prefooter/PreContainer";
import FooterContainer from "./components/footer/FooterContainer";
import RegisterContainer from "./components/Register/RegisterContainer";
import LoginContainer from "./components/Login/LoginContainer";
import singleProductContainer from "./components/singleProduct/singleProductContainer";
import HomeContainer from "./components/Home/HomeContainer";
import ProductsContainer from "./components/Products/ProductsContainer";
import Contactus from "./components/Contactus/Contactus";
import MyCartContainer from "./components/MyCart/MyCartContainer";
//RUTAS DE ADMIN, QUE HAY QUE UNIR EN UNA SOLA
import AdminCategoriesContainer from "./components/AdminCategory/AdminCategoriesContainer";
import AdminUsersContainer from "./components/AdminUser/AdminUsersContainer";

import {hiUser} from './store/action-creators/users'
import {fetchMyCart, fetchCarts} from './store/action-creators/carts'

const mapDispatchToProps = dispatch => ({
    hiUser: ()=> dispatch(hiUser()),
    fetchMyCart: ()=> dispatch(fetchMyCart()),
    fetchCarts: ()=> dispatch(fetchCarts()),
})

class Main extends React.Component {
  
  componentDidMount(){
    this.props.hiUser().then(() => console.log('ACA VA EL DE LA LINEA DE ABAJO, PERRITO'))
    this.props.fetchMyCart()
    this.props.fetchCarts()
    //ACA HAY QUE ARREGLAR
  }

  render() {
    return (
      <>
        <NavbarContainer/>
        <Switch>  
          <Route exact path="/" component={HomeContainer}/>
          <Route exact path="/products/:id" component={singleProductContainer}/>
          <Route path="/mycart" component={MyCartContainer}/>
          <Route exact path="/products/:id" component={singleProductContainer}/>
          <Route exact path="/product/:category" component={ProductsContainer}/>
          {/* <Route exact path="/help" component={Help} /> */}
          <Route exact path="/contactus" component={Contactus} />
          <Route exact path="/admin/categories" component={AdminCategoriesContainer} />
          <Route exact path="/admin/users" component={AdminUsersContainer} />
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

export default connect(null, mapDispatchToProps)(Main);
