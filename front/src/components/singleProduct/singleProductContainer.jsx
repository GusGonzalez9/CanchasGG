import React from "react";

import { connect } from "react-redux";
import SingleProduct from "./singleProduct";
import { fetchSelectedProduct } from "../../store/action-creators/products";

const mapStateToProps = (state, ownProps) => {
  console.log(ownProps);
  const id = ownProps.match.params.id;
  return {
    product: state.product,
    id,
  };
};
const mapDispatchToProps = function (dispatch) {
  return {
    fetchProduct: (id) => dispatch(fetchSelectedProduct(id)),
  };
};

class singleProductCotainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleImgChange() {}

  componentDidMount() {
    this.props.fetchProduct(this.props.id);
  }

  render() {
    return (
      <div>
        <SingleProduct product={this.props.product.product} />
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(singleProductCotainer);
