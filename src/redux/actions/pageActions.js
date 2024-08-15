import { ActionTypes } from "../types/action-types";

export const setPage = (payload) => {
  return {
    type: ActionTypes.SET_SELECTED_PAGE,
    payload: payload,
  };
};
