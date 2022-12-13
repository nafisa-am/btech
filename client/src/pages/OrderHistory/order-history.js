import React from "react";
// import Auth from "../../utils/auth";
import { Link } from "react-router-dom";
import BtechLogo from "../../assets/logo2.png";
import "../../index.css";
import "../OrderHistory/order-history.css";

function Order() {
	return (
		<div class="container mt-5">
			<div class="d-flex justify-content-center row">
				<div class="col-md-10">
					<div class="rounded">
						<div class="table-responsive table-borderless">
							<table class="table">
								<thead>
									<tr>
										<th class="text-center">
											{/* <div class="toggle-btn">
												<div class="inner-circle"></div>
											</div> */}
										</th>
										<th>Order #</th>
										<th>Product name</th>
										<th>Status</th>
										<th>Total</th>
										<th>Created</th>
										<th></th>
									</tr>
								</thead>
								<tbody class="table-body">
									<tr class="cell-1">
										<td class="text-center">
											<div class="toggle-btn">
												<div class="inner-circle"></div>
											</div>
										</td>
										<td>#SO-13487</td>
										<td>Dell</td>
										<td>
											<span class="badge badge-success">Fullfilled</span>
										</td>
										<td>$2674.00</td>
										<td>Today</td>
										<td>
											<i class="fa fa-ellipsis-h text-black-50"></i>
										</td>
									</tr>
									<tr class="cell-1">
										<td class="text-center">
											<div class="toggle-btn">
												<div class="inner-circle"></div>
											</div>
										</td>
										<td>#SO-13453</td>
										<td>HP</td>
										<td>
											<span class="badge badge-info">Confirmed</span>
										</td>
										<td>$3454.00</td>
										<td>Yesterday</td>
										<td>
											<i class="fa fa-ellipsis-h text-black-50"></i>
										</td>
									</tr>
									<tr class="cell-1">
										<td class="text-center">
											<div class="toggle-btn">
												<div class="inner-circle"></div>
											</div>
										</td>
										<td>#SO-13498</td>
										<td>Apple</td>
										<td>
											<span class="badge badge-danger">Partially shipped</span>
										</td>
										<td>$6274.00</td>
										<td>November 12,2022</td>
										<td>
											<i class="fa fa-ellipsis-h text-black-50"></i>
										</td>
									</tr>
									<tr class="cell-1">
										<td class="text-center">
											<div class="toggle-btn">
												<div class="inner-circle"></div>
											</div>
										</td>
										<td>#SO-16499</td>
										<td>Lenova</td>
										<td>
											<span class="badge badge-success">Fullfilled</span>
										</td>
										<td>$6375.00</td>
										<td>April 11,2021</td>
										<td>
											<i class="fa fa-ellipsis-h text-black-50"></i>
										</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Order;
