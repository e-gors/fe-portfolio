import { ActionTypes } from "../types/action-types";

export const setCategories = (categories) => {
  return {
    type: ActionTypes.SET_CATEGORIES,
    payload: categories,
  };
};

export const setSelectedCategories = (categories) => {
  return {
    type: ActionTypes.SET_SELECTED_CATEGORIES,
    payload: categories,
  };
};
