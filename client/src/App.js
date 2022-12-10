// import logo from "./logo.svg";
import "./App.css";
// import Data from "../mock-data.json";

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <Nav />
      <Router>
        {/* HEADER */}
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="loginSignup" element={<LoginSignup />} /> */}
        </Routes>
        {/* FOOTER */}
      </Router>
    </div>
  );
}

export default App;
