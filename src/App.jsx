import { Routes, Route } from "react-router-dom";
import "./App.css";
import { Details, Home } from "./pages";
import Layout from "./layout/layout";
import { useQuery } from "@tanstack/react-query";
import { checkEndpointStatus } from "./services/services";
import { setEndpointActive, setEndpointInactive } from "./reduxes/appSlice";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { useMetaMask } from "./reduxes/metamaskActions";
import { setHasProvider } from "./reduxes/metaMaskSlice";

function App() {
  const dispatch = useDispatch();
  const { connectMetaMask, checkMetaMaskProvider } = useMetaMask();
  // eslint-disable-next-line no-unused-vars
  const endpointStatusQuery = useQuery({
    queryKey: ["enpoint"],
    queryFn: () => checkEndpointStatus(),
    refetchIntervalInBackground: false,
    refetchOnMount: false,
    refetchOnReconnect: false,
    refetchOnWindowFocus: false,
    enabled: true,
    retry: false,
    onSuccess: () => {
      dispatch(setEndpointActive());
    },
    onError: () => {
      dispatch(setEndpointInactive());
    },
  });

  // Check if there are a metamask provider
  useEffect(() => {
    const provider = checkMetaMaskProvider();
    if (provider) {
      connectMetaMask();
    } else {
      dispatch(setHasProvider(false));
    }
  }, []);

  return (
    <Layout>
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/details/:id" element={<Details />} />
      </Routes>
    </Layout>
  );
}

export default App;
