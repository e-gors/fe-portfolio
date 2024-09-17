import { ActionTypes } from "../types/action-types";

export const setFeedbacks = (payload) => {
  return {
    type: ActionTypes.SET_FEEDBACKS,
    payload: payload,
  };
};

export const setFeedback = (payload) => {
  return {
    type: ActionTypes.SET_FEEDBACK,
    payload: payload,
  };
};

export const updateFeedback = (payload) => {
  return {
    type: ActionTypes.UPDATE_FEEDBACK,
    payload: payload,
  };
};

// export const removeFeedback = (payload) => {

// }
