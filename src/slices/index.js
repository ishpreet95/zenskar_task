// src/slices/index.js
import { combineReducers } from "@reduxjs/toolkit";
import componentReducer from "./componentSlice"; // Import your created slice

const rootReducer = combineReducers({
  // Add more slices here if you have multiple
  component: componentReducer,
});

export default rootReducer;
