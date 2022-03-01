import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import { CartContext } from "../../context/cart/CartContext";
import Checkout from "../checkout/Checkout";

const Cart = ({ cartItems, removeItemOfCart }) => {
	const { getTotalPriceCart } = useContext(CartContext);

	const handleRemovoItemOfCart = (itemId) => {
		removeItemOfCart(itemId);
	};

	return (
		<div className="p-5 min-vh-100" style={{ backgroundColor: "#F3F2FC" }}>
			<h1 className="text-uppercase fs-3 fw-light mb-5"> Carrito </h1>
			<ol className="list-group">
				{cartItems &&
					cartItems.map((item, position) => (
						<li
							key={position}
							className="list-group-item d-flex justify-content-between align-items-start shadow-sm p-3 mb-5 bg-body rounded"
						>
							<div className="ms-2 me-auto">
								<div className="fw-bold mb-4">{item["producto"]["title"]}</div>
								<div className="d-flex w-100 justify-content-between">
									<span className="w-75">{item["producto"]["description"]}</span>
									<span className="w-25 fs-4 fw-bold">$ {item["producto"]["price"]}</span>
								</div>
								<div className="w-100 mt-4">
									<Button
										variant="danger"
										onClick={() => handleRemovoItemOfCart(item["producto"]["id"])}
									>
										Eliminar
									</Button>
								</div>
							</div>
							<span className="badge bg-primary rounded-pill fs-6">{item["productQauntityCart"]}</span>
						</li>
					))}
			</ol>

			<hr />

			<div className="d-flex flex-row-reverse">
				<p className="text-uppercase fs-4 fw-bold pe-5">
					Total <span className="ps-5">$ {getTotalPriceCart()}</span>{" "}
				</p>
			</div>

			<Checkout />
		</div>
	);
};

export default Cart;
