import { combineReducers } from "@reduxjs/toolkit";
import counterSlice from "./counterSlice";
const rootReducer = combineReducers({
  one: counterSlice,
});
export default rootReducer;
