import React from "react";
import Navbar from "./Navbar";
import { connect } from "react-redux";
import { logoutUser } from "../../action-creators/usersCreators";
const mapStateToProps = (state) => {
  return {
    userId: state.user.user.id,
  };
};
const mapDistpachToProps = (dispatch) => {
  return {
    LogoutUser: () => dispatch(logoutUser()),
  };
};

class NavbarContainer extends React.Component {
  render() {
    return (
      <div>
        <Navbar userId={this.props.userId} LogoutUser={this.props.LogoutUser} />
      </div>
    );
  }
}
export default connect(mapStateToProps, mapDistpachToProps)(NavbarContainer);
