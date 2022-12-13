import React from "react";
import { Routes, Route } from "react-router-dom";
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
import LoginSignup from "./pages/LoginSignup";
import SearchBar from "./pages/SearchResults";

const httpLink = createHttpLink({
  uri: process.env.GRAPHQL_URL || "/graphql",
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
    <ApolloProvider client={client}>
      <UserProvider>
        <div className="App">
          <Nav />
          {/* HEADER */}
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/about" element={<Products />} />
            <Route exact path="/search" element={<SearchBar />} />
            <Route path="/loginSignup" element={<LoginSignup />} />
          </Routes>
          {/* FOOTER */}
        </div>
      </UserProvider>
    </ApolloProvider>
  );
}

export default App;
