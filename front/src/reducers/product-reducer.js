import { FIND_PRODUCT } from "../constants";

const initialState = {
  product: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FIND_PRODUCT:
      return {...state,  product: action.product };
      default:
        return state
  }
};
