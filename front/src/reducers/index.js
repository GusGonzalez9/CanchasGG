import { combineReducers } from "redux";
import userReducer from "./userReducer";
import productReducer from "./product-reducer";
export default combineReducers({
  user: userReducer,
  product: productReducer,
});
