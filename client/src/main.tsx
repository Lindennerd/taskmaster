import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { RouterProvider } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { router } from "./Routes";
import { ThemeContextProvider } from "./context/ThemeContext";

const apolloClient = new ApolloClient({
  uri: import.meta.env.GRAPHQL_SERVER,
  cache: new InMemoryCache(),
});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ApolloProvider client={apolloClient}>
      <ThemeContextProvider>
        <RouterProvider router={router} />
      </ThemeContextProvider>
    </ApolloProvider>
  </React.StrictMode>
);
