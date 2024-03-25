import {
  setWallet,
  setIsConnecting,
  setErrorMessage,
  clearError,
  setConnected,
  setHasProvider,
} from "./metaMaskSlice";
import { useDispatch } from "react-redux";

export const useMetaMask = () => {
  const dispatch = useDispatch();

  const checkMetaMaskProvider = () => {
    const hasProvider =
      typeof window.ethereum !== "undefined" && window.ethereum.isMetaMask;
    dispatch(setHasProvider(hasProvider));

    return hasProvider;
  };

  const connectMetaMask = async () => {
    dispatch(setIsConnecting(true));

    try {
      const isMetaMaskAvailable = checkMetaMaskProvider();

      if (!isMetaMaskAvailable) {
        throw new Error("MetaMask provider not available");
      }

      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });

      // Get balance and chainId
      const balance = await window.ethereum.request({
        method: "eth_getBalance",
        params: [accounts[0], "latest"],
      });
      const chainId = await window.ethereum.request({
        method: "eth_chainId",
      });

      dispatch(clearError());
      dispatch(setWallet({ accounts, balance, chainId }));
      dispatch(setConnected(true)); // Assuming MetaMask is available if we get accounts
    } catch (err) {
      dispatch(setErrorMessage(err.message));
    } finally {
      dispatch(setIsConnecting(false));
    }
  };

  const disconnectMetaMask = async () => {
    dispatch(setIsConnecting(true));

    try {
      dispatch(
        setWallet({
          accounts: [],
          balance: "",
          chainId: "",
        })
      );

      dispatch(setConnected(false));
      dispatch(clearError());
    } catch (err) {
      console.error("Error during disconnect:", err);
    } finally {
      dispatch(setIsConnecting(false));
    }
  };

  return { checkMetaMaskProvider, connectMetaMask, disconnectMetaMask };
};
