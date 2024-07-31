import { ActionTypes } from "../types/action-types";

const initialState = {
  categories: [],
  selectedCategories: []
};

export const categoryReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_CATEGORIES:
      return { ...state, categories: payload };
      case ActionTypes.SET_SELECTED_CATEGORIES:
        return { ...state, selectedCategories: payload };
    default:
      return state;
  }
};
