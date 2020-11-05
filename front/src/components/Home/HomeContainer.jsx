import React from "react";
import { connect } from "react-redux";


import Home from './Home'


const mapStateToProps = (state) => {

  return {
    
  };
};
const mapDispatchToProps = function (dispatch) {
  return {
   
  };
};

class HomeContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }


  render() {
    return (
      <div>
        <Home />
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeContainer);
