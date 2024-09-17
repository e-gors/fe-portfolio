import { ActionTypes } from "../types/action-types";

const initialState = {
  feedback: {},
  feedbacks: [],
};

export const feedbackReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_FEEDBACK:
      return { ...state, user: payload };
    case ActionTypes.SET_FEEDBACKS:
      return { ...state, users: payload };
    case ActionTypes.UPDATE_FEEDBACK:
      return { ...state, user: payload };
    default:
      return state;
  }
};
