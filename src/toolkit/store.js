import { configureStore } from "@reduxjs/toolkit";
import myReducer from "./addCounter";

export const store = configureStore({
  reducer: {
    myReducer,
  },
});
