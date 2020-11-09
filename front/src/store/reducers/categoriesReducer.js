import { 
    SET_CATEGORIES,
    SELECT_CATEGORY,
    ADD_CATEGORY,
    UPDATE_CATEGORY,
    DELETE_CATEGORY
} from "../constants";

const initialState = {
  list: [],
  selectedCategory: {},
};

export default (state = initialState, action) => {
  const newState = { ...state };
  switch (action.type) {
    case SET_CATEGORIES:
      newState.list = action.categories;
    break;
    case SELECT_CATEGORY:
      newState.selectedCategory = action.selectedCategory;
    break;
    case ADD_CATEGORY:
      newState.list = [... newState.list, action.category];
    break;
    case UPDATE_CATEGORY:
      newState.list[action.index].name = action.name
    break;
    case DELETE_CATEGORY:
      newState.list = newState.list.filter(c => c.id != action.id)
    break;
    default:
      return state;
  }
  return newState;
};
