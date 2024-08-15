import { ActionTypes } from "../types/action-types";

const initialState = {
  selectedPage: "Home",
};

export const pageReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_SELECTED_PAGE:
      return { ...state, selectedPage: payload };
    default:
      return state;
  }
};
