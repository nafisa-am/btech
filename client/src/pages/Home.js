import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>HOME</h1>
      {/* Splash */}
      {/* link to products */}
      {/* link to login signup */}
      <Link to="/loginSignup">Go to Login</Link>
    </div>
  );
};

export default Home;
