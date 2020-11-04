import React from "react";
import SingleProduct from "./singleProduct";

export default class singleProductCotainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <SingleProduct />
      </div>
    );
  }
}
