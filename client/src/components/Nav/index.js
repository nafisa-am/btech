import React from "react";
// import Auth from "../../utils/auth";

import { Link } from "react-router-dom";

import BtechLogo from "../../assets/logo2.png";
import "./index.css";

function Nav() {
  // if (Auth.loggedIn()) {
  return (
    <div className="d-inline-flex w-100">
      {/* Logo */}
      <div>
        <img
          style={{ width: "200px", height: "200px", padding: "3px" }}
          src={BtechLogo}
        />
      </div>
      <div className="navbar navbar-expand-md">
        <div className="container-fluid">
          {/* Navigation links */}
          <ul>
            <li className="mx-1">
              <Link className="hyperlink" to="/home">
                Home
              </Link>
            </li>

            <li className="mx-1">
              <Link className="hyperlink" to="/about">
                About
              </Link>
            </li>

            {/* <li className="mx-1"> */}
            <div className="dropdown">
              <div
                className="hyperlink dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Products
              </div>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    Tablets
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Laptops
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Mobile
                  </a>
                </li>
              </ul>
            </div>
            <li className="mx-1">
              <Link className="hyperlink" to="/orderHistory">
                Order History
              </Link>
            </li>
          </ul>
          {/* Search bar */}
          <section className="d-inline-flex align-items-center">
            <div className="container-search p-3">
              <form className="d-flex input-group w-auto">
                <input
                  type="search"
                  className="form-control rounded"
                  placeholder="Search"
                  aria-label="Search"
                  aria-describedby="search-addon"
                />
              </form>
            </div>

            {/* User Icons */}

            <div className="nav-item me-3 me-lg-0 p-3">
              <a className="nav-link" href="/cart">
                <i className="fas fa-shopping-cart"></i>
              </a>
            </div>

            <div className="nav-item me-3 me-lg-0 dropdown d-inline-flex p-3">
              <i className="fas fa-user"></i>
              <div className="dropdown">
                <div
                  className="hyperlink dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <ul className="dropdown-menu" id="user">
                    <li>
                      <a className="dropdown-item" href="/my-account">
                        My Account
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
  // } else {
  // 	return (
  // 		<ul className="flex-row">
  // 			<li className="mx-1">
  // 				<Link to="/signup">Signup</Link>
  // 			</li>
  // 			<li className="mx-1">
  // 				<Link to="/login">Login</Link>
  // 			</li>
  // 		</ul>
  // 	);
  // }

  // return (
  // 	<header className="flex-row px-1">
  // 		<h1>
  // 			<Link to="/">
  // 				<span role="img" aria-label=""></span>
  // 				BTECH
  // 			</Link>
  // 		</h1>

  // 		<nav>{showNavigation()}</nav>
  // 	</header>
  // );
}

export default Nav;
