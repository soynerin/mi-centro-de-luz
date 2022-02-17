import React, { useContext } from "react";
import { CartContext } from "../../context/cart/CartContext";

const ItemCartContainer = () => {
	const { cartItems } = useContext(CartContext);

	return (
		<div className="p-5 min-vh-100" style={{ backgroundColor: "#F3F2FC" }}>
			<h1 className="text-uppercase fs-3 fw-light mb-5"> Carrito </h1>
			<ol className="list-group">
				{cartItems.map((item) => (
					<li className="list-group-item d-flex justify-content-between align-items-start">
						<div className="ms-2 me-auto">
							<div className="fw-bold">{item["producto"]["title"]}</div>
							{item["producto"]["description"]}
						</div>
						<span className="badge bg-primary rounded-pill">{item["productQauntityCart"]}</span>
					</li>
				))}
			</ol>
		</div>
	);
};

export default ItemCartContainer;
