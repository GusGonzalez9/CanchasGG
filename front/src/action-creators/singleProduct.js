import axios from "axios";
import {FIND_PRODUCT} from '../constants'

const receiveProduct = (product) => ({
  type: FIND_PRODUCT,
  product,
});


export const fetchProduct = (id) => dispatch => {

  axios.get(`http://localhost:1905/api/products/${id}`)
    .then((data) => dispatch(receiveProduct(data.data)));
}


