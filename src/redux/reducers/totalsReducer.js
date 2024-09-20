import { ActionTypes } from "../types/action-types";

const initialState = {
  rates: 0,
  totalProjects: 0,
  totalExperience: 0,
  totalReviews: 0,
  localPercent: 0,
  worldwidePercent: 0,
};

export const totalsReducers = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_RATES:
      return { ...state, rates: payload };
    case ActionTypes.SET_TOTAL_PROJECTS:
      return { ...state, totalProjects: payload };
    case ActionTypes.SET_TOTAL_EXPERIENCE:
      return { ...state, totalExperience: payload };
    case ActionTypes.SET_TOTAL_REVIEWS:
      return { ...state, totalReviews: payload };
    case ActionTypes.SET_CLIENT_LOCAL_PERCENT:
      return { ...state, localPercent: payload };
    case ActionTypes.SET_CLIENT_WORLDWIDE_PERCENT:
      return { ...state, worldwidePercent: payload };
    default:
      return state;
  }
};
