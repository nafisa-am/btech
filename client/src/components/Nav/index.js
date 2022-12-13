import { useState, useEffect } from "react"; // import Auth from "../../utils/auth";
import { Link, BrowserRouter } from "react-router-dom";
import BtechLogo from "../../assets/logo2.png";
import "./index.css";

function Nav() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("item"));
    if (items) {
      setItems(items);
    }
  }, []);
  console.log("items", items);
  var total = items.reduce((accum, item) => accum + item.cost, 0);
  console.log("navtotal", total);
  // if (Auth.loggedIn()) {
  return (
    <BrowserRouter>
      {/* Logo */}
      <div className="navbar">
        <div className="logo">
          <img style={{ width: "200px", height: "200px" }} src={BtechLogo} />
        </div>
        <div className="collapse" id="navbarToggleExternalContent">
          <div className="bg-dark p-4">
            <h5 className="text-white h4">Collapsed content</h5>
            <span className="text-muted">Toggleable via the navbar brand.</span>
          </div>
        </div>

        {/* Search bar */}
        <div className="container-search">
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

          <li className="mx-1">
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
          </li>

          <li className="mx-1">
            <Link className="hyperlink" to="/orderHistory">
              Order History
            </Link>
          </li>

          {/* User Icons */}
          <div className="container-user">
            <ul className="navbar-nav d-flex flex-row">
              <li className="nav-item me-3 me-lg-0">
                <a className="nav-link" href="/cart">
                  <i className="fas fa-shopping-cart"> cart total £{total}</i>
                </a>
              </li>
              <li className="nav-item me-3 me-lg-0">
                <a className="nav-link" href="/twitter">
                  <i className="fab fa-twitter"></i>
                </a>
              </li>

              <li className="nav-item me-3 me-lg-0 dropdown">
                <ul className="mx-1">
                  <i className="fas fa-user"></i>

                  <div className="dropdown">
                    <div
                      className="hyperlink dropdown-toggle"
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    ></div>
                    <ul className="dropdown-menu" id="user">
                      <li>
                        <a className="dropdown-item" href="/my-account">
                          My Account
                        </a>
                      </li>
                    </ul>
                  </div>
                </ul>
              </li>
            </ul>
          </div>

          <li className="mx-1">
            {/* this is not using the Link component to logout or user and then refresh the application to the start */}
            {/* <li className="mx-1">
							<Link className="hyperlink" to="/logout">
								Logout
							</Link>
						</li> */}
          </li>
        </ul>
      </div>
    </BrowserRouter>
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
