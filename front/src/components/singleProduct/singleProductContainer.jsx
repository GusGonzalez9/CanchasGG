import React from "react";
import axios from "axios";
import { connect } from "react-redux";
import SingleProduct from "./singleProduct";
import { fetchSelectedProduct } from "../../store/action-creators/products";

const mapStateToProps = (state, ownProps) => {
  console.log(ownProps);
  const id = ownProps.match.params.id;
  return {
    product: state.products.selectedProduct,
    id,
  };
};
const mapDispatchToProps = function (dispatch) {
  return {
    fetchSelectedProduct: (id) => dispatch(fetchSelectedProduct(id)),
  };
};

class singleProductCotainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comentario: "",
      imagenPrincipal: "",
      contador: 0,
      carrito: "",
    };
    this.commentChange = this.commentChange.bind(this);
    this.handleSubmitComment = this.handleSubmitComment.bind(this);
    this.handleImgChange = this.handleImgChange.bind(this);
  }

  handleImgChange(e) {
    this.setState({
      imagenPrincipal: e.currentTarget.src,
      contador: this.state.contador + 1,
    });
  }

  commentChange(e) {
    this.setState({ comentario: e.target.value });
  }
  handleSubmitComment(e) {
    e.preventDefault();
    axios
      .post("/api/products/" + this.props.id + "/comments", {
        content: this.state.comentario,
      })
      .then((data) => console.log("COMENTARIO PUBLICADO", data));
  }

  componentDidMount() {
    this.props.fetchSelectedProduct(this.props.id);
  }

  render() {
    return (
      <div>
        <SingleProduct
          product={this.props.product}
          commentChange={this.commentChange}
          handleSubmitComment={this.handleSubmitComment}
          handleImgChange={this.handleImgChange}
          imagenPrincipal={this.state.imagenPrincipal}
          contador={this.state.contador}
        />
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(singleProductCotainer);
