import Login from "./Login";
import React from "react";
import { connect } from "react-redux";
import { loginUser } from "../../store/action-creators/users";
const mapDispatchToProps = (dispatch, ownProps) => {
  const history = ownProps.history;
  return {
    LoginUser: (data) => dispatch(loginUser(data)),
    history,
  };
};

const mapStateToProps = (state, ownProps) => {
  return {};
};

class LoginContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  handleSubmit(e) {
    e.preventDefault();
    this.props.LoginUser(this.state).then(() => this.props.history.push("/"));
  }
  render() {
    return (
      <div>
        <Login
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
