import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  wallet: {
    accounts: [],
    balance: "",
    chainId: "",
  },
  hasProvider: null,
  isConnecting: false,
  errorMessage: null,
  isConnected: false,
};

const metaMaskSlice = createSlice({
  name: "metaMask",
  initialState,
  reducers: {
    setWallet(state, action) {
      state.wallet = action.payload;
    },
    setHasProvider(state, action) {
      state.hasProvider = action.payload;
    },
    setIsConnecting(state, action) {
      state.isConnecting = action.payload;
    },
    setErrorMessage(state, action) {
      state.errorMessage = action.payload;
    },
    clearError(state) {
      state.errorMessage = null;
    },
    setConnected(state, action) {
      state.isConnected = action.payload;
    },
  },
});

export const {
  setWallet,
  setHasProvider,
  setIsConnecting,
  setErrorMessage,
  clearError,
  setConnected,
} = metaMaskSlice.actions;

export default metaMaskSlice.reducer;
