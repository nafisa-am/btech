import React from "react";
// import Auth from "../../utils/auth";
import { Link } from "react-router-dom";
import BtechLogo from "../../assets/logo2.png";
import "../../index.css";
import "../MyAccount/my-account.css";

function Account() {
	// if (Auth.loggedIn()) {
	return (
		<form>
			<h1>My Account</h1>
			<div class="form-group">
				<label for="exampleInputEmail1">First Name</label>
				<input
					type="name"
					class="form-control"
					id="exampleNameInput"
					aria-describedby="Name"
					placeholder="Enter Name"
				></input>
			</div>
			<div class="form-group">
				<label for="exampleInputEmail1">Last Name</label>
				<input
					type="name"
					class="form-control"
					id="exampleNameInput"
					aria-describedby="Name"
					placeholder="Enter Name"
				></input>
			</div>
			<div class="form-group">
				<label for="exampleInputEmail1">Email address</label>
				<input
					type="email"
					class="form-control"
					id="exampleInputEmail1"
					aria-describedby="emailHelp"
					placeholder="Enter email"
				></input>
				<small id="emailHelp" class="form-text text-muted">
					We'll never share your email with anyone else.
				</small>
			</div>
			<div class="form-group">
				<h5>Password Changes</h5>
				<label for="exampleInputPassword1">Current Password</label>
				<input
					type="password"
					class="form-control"
					id="exampleInputPassword1"
					placeholder="Password"
				></input>
				<label for="exampleInputPassword1">New Password</label>
				<input
					type="password"
					class="form-control"
					id="exampleInputPassword1"
					placeholder="Password"
				></input>
			</div>
			{/* <div class="form-group">
				<label for="exampleInputPassword1">New Password</label>
				<input
					type="password"
					class="form-control"
					id="exampleInputPassword1"
					placeholder="Password"
				></input>
			</div> */}

			<button type="submit" class="btn btn-primary">
				Submit
			</button>
		</form>

		// <div>
		// 	<h6 className="heading-small text-muted mb-4">User information</h6>
		// 	<div className="pl-lg-4">
		// 		<div className="row">
		// 			<div className="col-lg-6">
		// 				<div className="form-group focused">
		// 					<label className="form-control-label" htmlFor="input-username">
		// 						Username
		// 					</label>
		// 					<input
		// 						type="text"
		// 						id="input-username"
		// 						className="form-control form-control-alternative"
		// 						placeholder="Username"
		// 						value="lucky.jesse"
		// 					>
		// 						{" "}
		// 					</input>
		// 				</div>
		// 			</div>
		// 			<div className="col-lg-6">
		// 				<div className="form-group">
		// 					<label className="form-control-label" htmlFor="input-email">
		// 						Email address
		// 					</label>
		// 					<input
		// 						type="email"
		// 						id="input-email"
		// 						className="form-control form-control-alternative"
		// 						placeholder="jesse@example.com"
		// 					/>
		// 				</div>
		// 			</div>
		// 		</div>
		// 		<div className="row">
		// 			<div className="col-lg-6">
		// 				<div className="form-group focused">
		// 					<label className="form-control-label" htmlFor="input-first-name">
		// 						First name
		// 					</label>
		// 					<input
		// 						type="text"
		// 						id="input-first-name"
		// 						className="form-control form-control-alternative"
		// 						placeholder="First name"
		// 						value="Lucky"
		// 					>
		// 						{" "}
		// 					</input>
		// 				</div>
		// 			</div>
		// 			<div className="col-lg-6">
		// 				<div className="form-group focused">
		// 					<label className="form-control-label" htmlFor="input-last-name">
		// 						Last name
		// 					</label>
		// 					<input
		// 						type="text"
		// 						id="input-last-name"
		// 						className="form-control form-control-alternative"
		// 						placeholder="Last name"
		// 						value="Jesse"
		// 					>
		// 						{" "}
		// 					</input>
		// 				</div>
		// 			</div>
		// 		</div>
		// 	</div>
		// 	<hr className="my-4"></hr>
		// 	{/* <!-- Address --> */}
		// 	<h6 className="heading-small text-muted mb-4">Contact information</h6>
		// 	<div className="pl-lg-4">
		// 		<div className="row">
		// 			<div className="col-md-12">
		// 				<div className="form-group focused">
		// 					<label className="form-control-label" htmlFor="input-address">
		// 						Address
		// 					</label>
		// 					<input
		// 						id="input-address"
		// 						className="form-control form-control-alternative"
		// 						placeholder="Home Address"
		// 						value="Bld Mihail Kogalniceanu, nr. 8 Bl 1, Sc 1, Ap 09"
		// 						type="text"
		// 					>
		// 						{" "}
		// 					</input>
		// 				</div>
		// 			</div>
		// 		</div>
		// 		<div className="row">
		// 			<div className="col-lg-4">
		// 				<div className="form-group focused">
		// 					<label className="form-control-label" htmlFor="input-city">
		// 						City
		// 					</label>
		// 					<input
		// 						type="text"
		// 						id="input-city"
		// 						className="form-control form-control-alternative"
		// 						placeholder="City"
		// 						value="New York"
		// 					></input>
		// 				</div>
		// 			</div>
		// 			<div className="col-lg-4">
		// 				<div className="form-group focused">
		// 					<label className="form-control-label" htmlFor="input-country">
		// 						Country
		// 					</label>
		// 					<input
		// 						type="text"
		// 						id="input-country"
		// 						className="form-control form-control-alternative"
		// 						placeholder="Country"
		// 						value="United States"
		// 					>
		// 						{" "}
		// 					</input>
		// 				</div>
		// 			</div>
		// 			<div className="col-lg-4">
		// 				<div className="form-group">
		// 					<label className="form-control-label" htmlFor="input-country">
		// 						Postal code
		// 					</label>
		// 					<input
		// 						type="number"
		// 						id="input-postal-code"
		// 						className="form-control form-control-alternative"
		// 						placeholder="Postal code"
		// 					>
		// 						{" "}
		// 					</input>
		// 				</div>
		// 			</div>
		// 		</div>
		// 	</div>
		// 	<hr className="my-4" />
		// 	{/* <!-- Description --> */}
		// 	<h6 className="heading-small text-muted mb-4">About me</h6>
		// 	<div className="pl-lg-4">
		// 		<div className="form-group focused">
		// 			<label>About Me</label>
		// 			<defaultValue
		// 				rows="4"
		// 				className="form-control form-control-alternative"
		// 				placeholder="A few words about you ..."
		// 			>
		// 				A beautiful Dashboard htmlFor Bootstrap 4. It is Free and Open
		// 				Source.
		// 			</defaultValue>
		// 		</div>
		// 	</div>
		// </div>
	);
}

export default Account;
