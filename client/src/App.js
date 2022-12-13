import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

import "./App.css";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Products from "./components/ProductList";
import UserProvider from "./contexts/UserProvider";
import Cart from "./pages/Cart";
import AppRoutes from "./Routes";
import Navtwo from "./components/Nav/Navtwo";

const httpLink = createHttpLink({
  uri: process.env.GRAPHQL_URL || "http://localhost:3001/graphql",
});

const authLink = setContext((_, { headers }) => {
  const user = JSON.parse(localStorage.getItem("user"));

  return {
    headers: {
      ...headers,
      authorization: user ? `Bearer ${user.token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <>
      <ApolloProvider client={client}>
        <UserProvider>
          <div className="App">
            <Navtwo />
            <Router>
              <AppRoutes />
            </Router>
            {/* FOOTER */}
          </div>
        </UserProvider>
      </ApolloProvider>
    </>
  );
}

export default App;
