import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./appReducer";

const store = configureStore({
  reducer: { appReducer },
});

export default store;
