import { ActionTypes } from "../types/action-types";

export const setRates = (rates) => {
  return {
    type: ActionTypes.SET_RATES,
    payload: rates,
  };
};

export const setTotalProjects = (projects) => {
  return {
    type: ActionTypes.SET_TOTAL_PROJECTS,
    payload: projects,
  };
};

export const setTotalExperiences = (experiences) => {
  return {
    type: ActionTypes.SET_TOTAL_EXPERIENCE,
    payload: experiences,
  };
};

export const setTotalReviuews = (reviews) => {
  return {
    type: ActionTypes.SET_TOTAL_REVIEWS,
    payload: reviews,
  };
};

export const setLocalPercent = (percent) => {
  return {
    type: ActionTypes.SET_CLIENT_LOCAL_PERCENT,
    payload: percent,
  };
};

export const setWorldwidePercent = (percent) => {
  return {
    type: ActionTypes.SET_CLIENT_WORLDWIDE_PERCENT,
    payload: percent,
  };
};
