import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { userReducer } from "./userReducer";
import { themeReducer } from "./themeReducer";

// Define persist config
const persistConfig = {
  key: "root",
  storage,
};

// Combine reducers
const rootReducer = combineReducers({
  users: userReducer,
  theme: themeReducer
});

// Create a persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

export default persistedReducer;

