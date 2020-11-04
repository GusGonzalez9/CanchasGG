import React from "react";

import { connect } from "react-redux";
import SingleProduct from "./singleProduct";
import {fetchProduct} from '../../action-creators/singleProduct'


const mapStateToProps = (state) => { 
   console.log(state.product.product)
  return {
     product: state.product.product
  };
};
const mapDispatchToProps = function (dispatch) {
  return {
    fetchProduct: (id)=>dispatch(fetchProduct(id))
  };
};

class singleProductCotainer extends React.Component {   
  constructor(props){
    super(props)
    this.state={}
    
  }

  handleImgChange(){
    
  }

  componentDidMount(){
      this.props.fetchProduct(this.props.match.params.id)
  }


  render() {
    return (      
      <div>
          <SingleProduct
          product={this.props.product}
          />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(singleProductCotainer);


