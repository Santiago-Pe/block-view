import { configureStore, combineReducers } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import metaMaskSlice from "./metaMaskSlice";

const rootReducer = combineReducers({
  app: appSlice,
  user: metaMaskSlice,
  // Agrega otros slices según sea necesario
});

const appStore = configureStore({
  reducer: rootReducer,
});

export default appStore;
