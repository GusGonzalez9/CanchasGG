import React from "react";
import Products from "./Products";
/* agarro el param.category, seteo el estado local o global con esa categoria, renderizar cards con los productos correspondientes a 
la categoria seleccionada. categoria all muestra todos los productos */
class ProductsContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      catTitle: "",
    };
  }

  componentDidMount() {
    const category = this.props.match.params.category;
  }

  render() {
    console.log(this.state.catTitle);
    return <Products title={this.state.catTitle} />;
  }
}

export default ProductsContainer;
