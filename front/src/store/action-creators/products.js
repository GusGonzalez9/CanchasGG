import { SET_LIST, SELECT_PRODUCT } from "../constants";
import axios from "axios";

// SET_LIST
const setList = (list, products) => ({
  type: SET_LIST,
  list, // 'productsList' || 'offList'
  products,
});

// SELECT_PRODUCT
const setSelectedProduct = (selectedProduct) => ({
  type: SELECT_PRODUCT,
  selectedProduct,
});

export const fetchProducts = (list) => (dispatch) => {
  return list === "productsList"
    ? axios
        .get("/api/products")
        .then((res) => dispatch(setList(list, res.data)))
    : axios
        .get("/api/products/off")
        .then((res) => dispatch(setList(list, res.data)));
};

//SELECT PRODUCT
export const fetchSelectedProduct = (id) => (dispatch) => {
  console.log("selected prod");
  axios
    .get(`/api/products/${id}`)
    .then((res) => dispatch(setSelectedProduct(res.data)));
};
