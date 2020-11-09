import React from "react";
import Navbar from "./Navbar";
import { connect } from "react-redux";
import { logoutUser } from "../../store/action-creators/users";
const mapStateToProps = (state) => {
  return {
    userAccess: state.users.me.access,
    userId: state.users.me.id,
    ListOfProducts: state.products.productsList,
  };
};
const mapDistpachToProps = (dispatch) => {
  return {
    LogoutUser: () => dispatch(logoutUser()),
  };
};

class NavbarContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
    };
    this.handleInput = this.handleInput.bind(this);
  }
  handleInput(e) {
    e.preventDefault();
    const valor = e.target.value;
    this.setState({ input: valor });
  }
  render() {
    const inputValue = this.state.input ? this.state.input : null;
    const filterProducts = this.props.ListOfProducts.filter((product) =>
      product.name.match(inputValue)
    );
    return (
      <div>
        <Navbar
          filterProducts={filterProducts}
          userAccess={this.props.userAccess}
          userId={this.props.userId}
          LogoutUser={this.props.LogoutUser}
          handleInput={this.handleInput}
        />
      </div>
    );
  }
}
export default connect(mapStateToProps, mapDistpachToProps)(NavbarContainer);

/*   axios
    .get("api/products")
    .then((res) => res.data)
    .then((producto) => {
      if (producto) {
         dispachar al estado el prod 
      }
    }); */

/*   axios
    .get(`http://www.omdbapi.com/?apikey=c21e7b4c&s=${value}`)
    .then((res) => res.data.Search)
    .then((movies) => {
      if (movies) {
        store.dispatch(setMovies(movies));
        props.history.push("/");
        evt.target[0].value = "";
      }
    }); */
