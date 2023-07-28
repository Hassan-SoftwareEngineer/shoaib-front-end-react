import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";

import authReducer from './auth/login/authSlice'
import signupSlice from './auth/signup/signupSlice'
import listingSlice from './redux/listingPoperty/listingSlice'

const reducers = combineReducers({
  auth: authReducer,
    singup: signupSlice,
    listing:listingSlice
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["auth","listing"],
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: [thunk],
});

export default store;