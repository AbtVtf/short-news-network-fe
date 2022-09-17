import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import thunk from "redux-thunk";
import userSlice from "../slices/userSlice";
import sessionSlice from "../slices/sessionSlice";
// import { localforage } from "localforage";
// import storage from "redux-persist/lib/storage";
import storageSession from "redux-persist/es/storage/session";
const reducers = combineReducers({
  user: userSlice,
  session: sessionSlice,
});

const persistConfig = {
  key: "root",
  storage: storageSession,
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk],
});

export default store;
