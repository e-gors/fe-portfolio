import { ActionTypes } from "../types/action-types";

export const setTheme = (theme) => {
  return {
    type: ActionTypes.SET_THEME,
    payload: theme,
  };
};
