import React from "react";
import { Route, Switch, Redirect, component } from "react-router-dom";
import {connect} from 'react-redux'
import style from "./styles/style.css";
import NavbarContainer from "./components/NavBar/NavbarContainer";
import PreContainer from "./components/prefooter/PreContainer";
import FooterContainer from "./components/footer/FooterContainer";
import SliderContainer from "./components/Slider/SliderContainer";
import CardsContainer from "./components/Cards/CardsContainer";
import RegisterContainer from "./components/Register/RegisterContainer";
import LoginContainer from "./components/Login/LoginContainer";
import singleProductContainer from "./components/singleProduct/singleProductContainer";
import {permanenceUser} from './action-creators/usersCreators'
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
          {/*  <Route exact path="/products" component={singleProduct}  /> */}
          <Route
            exact
            path="/"
            render={() => (
              <div>
                <SliderContainer />
                <h1 className={style.h1}>
                  Productos <span>destacados</span>
                </h1>
                <CardsContainer />
                {/* cards */}
                <h1 className={style.h1}>
                  Productos en <span>oferta</span>
                </h1>
                <CardsContainer />
              </div>
            )}
          />
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
