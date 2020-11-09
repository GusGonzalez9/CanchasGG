import { SET_LIST, SELECT_PRODUCT } from "../constants";
import axios from "axios";

// SET_LIST
const setList = (list, products) => ({
  type: SET_LIST,
  list, // 'productsList' || 'offList'
  products,
});
export const fetchProducts = (list) => (dispatch) => {
  return list === "productsList"
    ? axios
        .get("/api/products")
        .then((res) => dispatch(setList("productsList", res.data)))
    : axios
        .get("/api/products/off")
        .then((res) => dispatch(setList('offList', res.data)));
};

// SELECT_PRODUCT
const setSelectedProduct = (selectedProduct) => ({
  type: SELECT_PRODUCT,
  selectedProduct,
});
export const fetchSelectedProduct = (id) => (dispatch) => {
  console.log("selected prod");
  axios
    .get(`/api/products/${id}`)
    .then((res) => dispatch(setSelectedProduct(res.data)));
};

