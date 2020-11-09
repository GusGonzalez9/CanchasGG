import React from "react";
import Navbar from "./Navbar";
import { connect } from "react-redux";
import { logoutUser } from "../../store/action-creators/users";
const mapStateToProps = (state) => {
  return {
    userId: state.users.me.id,
  };
};
const mapDistpachToProps = (dispatch) => {
  return {
    LogoutUser: () => dispatch(logoutUser()),
  };
};
const handleSubmit = (evt) => {
  evt.preventDefault();
  const value = evt.target.value;
  console.log(value);
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
};

class NavbarContainer extends React.Component {
  render() {
    return (
      <div>
        <Navbar
          userId={this.props.userId}
          LogoutUser={this.props.LogoutUser}
          onChange={handleSubmit}
        />
      </div>
    );
  }
}
export default connect(mapStateToProps, mapDistpachToProps)(NavbarContainer);
