import { createSlice } from "@reduxjs/toolkit";

export const appRducer = createSlice({
  name: "endpoint",
  initialState: {
    isActive: false, // Estado inicial: endpoint inactivo
  },
  reducers: {
    setEndpointActive: (state) => {
      state.isActive = true;
    },
    setEndpointInactive: (state) => {
      state.isActive = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setEndpointActive, setEndpointInactive } = appRducer.actions;

export default appRducer.reducer;
