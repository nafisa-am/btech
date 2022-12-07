import React from "react";
// import Auth from "../../utils/auth";
import { Link, BrowserRouter } from "react-router-dom";
import BtechLogo from "../../assets/logo2.png";
import "./index.css";

function Nav() {
	// if (Auth.loggedIn()) {
	return (
		<BrowserRouter>
			{/* Logo */}
			<div className="navbar">
				<div className="logo">
					<img style={{ width: "200px", height: "200px" }} src={BtechLogo} />
				</div>
				<div class="collapse" id="navbarToggleExternalContent">
					<div class="bg-dark p-4">
						<h5 class="text-white h4">Collapsed content</h5>
						<span class="text-muted">Toggleable via the navbar brand.</span>
					</div>
				</div>

				{/* Search bar */}
				<div class="container-search">
					<form class="d-flex input-group w-auto">
						<input
							type="search"
							class="form-control rounded"
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
					<div class="container-user">
						<ul class="navbar-nav d-flex flex-row">
							<li class="nav-item me-3 me-lg-0">
								<a class="nav-link" href="/cart">
									<i class="fas fa-shopping-cart"></i>
								</a>
							</li>
							<li class="nav-item me-3 me-lg-0">
								<a class="nav-link" href="/twitter">
									<i class="fab fa-twitter"></i>
								</a>
							</li>

							<li class="nav-item me-3 me-lg-0 dropdown">
								<li className="mx-1">
									<i class="fas fa-user"></i>

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
								</li>
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
