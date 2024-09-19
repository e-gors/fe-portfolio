import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { userReducer } from "./userReducer";
import { themeReducer } from "./themeReducer";
import { pageReducer } from "./pageReducer";
import { feedbackReducer } from "./feedbackReducer";
import { totalsReducers } from "./totalsReducer";

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
  users: persistReducer(usersPersistConfig, userReducer), // Persisted
  theme: persistReducer(themePersistConfig, themeReducer), // Persisted
  page: pageReducer, // Non-persisted
  feedbacks: feedbackReducer, // Non-persisted
  totals: totalsReducers
});

// Create a persisted reducer
const persistedReducer = persistReducer({ key: "root", storage }, rootReducer);

export default persistedReducer;
