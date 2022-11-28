import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container, Modal, Tab } from "react-bootstrap";
// import SignUpForm from "./SignupForm";
// import LoginForm from "./LoginForm";

import Auth from "../utils/auth";

const AppNavbar = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      {Auth.loggedIn() ? (
        <>
          <Nav.Link as={Link} to="/saved">
            See Your Books
          </Nav.Link>
          <Nav.Link onClick={Auth.logout}>Logout</Nav.Link>
        </>
      ) : (
        <Nav.Link onClick={() => setShowModal(true)}>Login/Sign Up</Nav.Link>
      )}
    </>
  );
};

export default AppNavbar;
