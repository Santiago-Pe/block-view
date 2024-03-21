import { Routes, Route } from "react-router-dom";
import "./App.css";
import { Details, Home, Profile } from "./pages";
import Layout from "./layout/layout";
import { useQuery } from "@tanstack/react-query";
import { checkEndpointStatus } from "./services/services";
import { setEndpointActive, setEndpointInactive } from "./reduxes/appReducer";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();
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

  console.log(endpointStatusQuery);
  return (
    <Layout>
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/details/:id" element={<Details />} />
      </Routes>
    </Layout>
  );
}

export default App;
