import { ActionTypes } from "../types/action-types";

export const setUsers = (users) => {
  return {
    type: ActionTypes.SET_USERS,
    payload: users,
  };
};

export const setUser = (user) => {
  return {
    type: ActionTypes.SET_USER,
    payload: user,
  };
};

export const removeUser = (id) => {
  return {
    type: ActionTypes.REMOVE_USER,
    payload: id,
  };
};

export const updateUser = (newUser) => {
  return {
    type: ActionTypes.UPDATE_USER,
    payload: newUser,
  };
};

export const logoutUser = () => {
  return {
    type: ActionTypes.LOGOUT_USER,
    payload: {},
  };
};
