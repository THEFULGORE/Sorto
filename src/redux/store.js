import { combineReducers, compose, createStore } from "@reduxjs/toolkit";
import { reducer } from "./reducer";

let reducers = combineReducers({
  reducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  reducers,
  composeEnhancers()
);
