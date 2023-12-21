/* eslint-disable no-unused-vars */
import { configureStore, nanoid } from "@reduxjs/toolkit";
import todoReducer from "../features/todo/todoSlice";
export const store = configureStore({
  reducer: todoReducer,
});
