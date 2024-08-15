import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { userReducer } from "./userReducer";
import { themeReducer } from "./themeReducer";
import { pageReducer } from "./pageReducer";

// Define persist config for the `users` reducer
const usersPersistConfig = {
  key: "users",
  storage,
  whitelist: ["user"], // Persist only the `user` object inside `users`
};

// Define persist config for the `theme` reducer
const themePersistConfig = {
  key: "theme",
  storage,
  whitelist: [], // Persist the entire theme state
};

// Combine reducers with individual persist configs
const rootReducer = combineReducers({
  users: persistReducer(usersPersistConfig, userReducer), // Persisted `user` part of `users`
  theme: persistReducer(themePersistConfig, themeReducer), // Persisted `theme`
  page: pageReducer, // Non-persisted `page`
});

// Create a persisted reducer
const persistedReducer = persistReducer(
  { key: "root", storage }, 
  rootReducer
);

export default persistedReducer;
