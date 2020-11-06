import React from "react";
import { connect } from "react-redux";
import Home from "./Home";
import { fetchProducts } from "../../store/action-creators/products";

const mapStateToProps = (state) => {
  return {
    productsList: state.products.productsList,
    offList: state.products.offList,
  };
};

const mapDispatchToProps = function (dispatch) {
  return {
    fetchProducts: (list) => dispatch(fetchProducts(list)),
    /* fetchProducts: () => dispatch(fetchProducts(off)), */
  };
};

class HomeContainer extends React.Component {
  
  componentDidMount() {
    console.log(this.props);
    this.props.fetchProducts("productsList").then(() => {
      this.props.fetchProducts("offList");
    });
  }

  render() {
    return (
      <div>
        <Home
          productsList={this.props.productsList}
          offList={this.props.offList}
        />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
