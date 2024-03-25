import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import { BreadCrumbProvider } from "./context/breadcrumbContext.jsx";
import appStore from "./reduxes/appStore.js";
import { MobileProvider } from "./context/mobileContext.jsx";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={appStore}>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <MobileProvider>
            <BreadCrumbProvider>
              <App />
            </BreadCrumbProvider>
          </MobileProvider>
        </BrowserRouter>
      </QueryClientProvider>
    </Provider>
  </React.StrictMode>
);
