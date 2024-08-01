import { ActionTypes } from "../types/action-types";

const initialState = {
  theme: "light",
};

export const themeReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_THEME:
      return { ...state, theme: payload };
    default:
      return state;
  }
};
