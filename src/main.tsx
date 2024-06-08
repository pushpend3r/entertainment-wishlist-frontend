import React from "react";
import ReactDOM from "react-dom/client";
import { ApolloProvider } from "@apollo/client";
import { RouterProvider } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import "./global.css";

import apolloClient from "./apollo";
import { ToastContainer } from "react-toastify";
import router from "./router";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ApolloProvider client={apolloClient}>
      <ToastContainer autoClose={3000} />
      <RouterProvider router={router} />
    </ApolloProvider>
  </React.StrictMode>
);
