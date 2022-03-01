import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/cart/CartContext";
import Cart from "./Cart";

const ItemCartContainer = () => {
	const { cartItems, removeItemOfCart } = useContext(CartContext);

	return (
		<>
			{cartItems.length > 0 ? (
				<>
					<Cart cartItems={cartItems} removeItemOfCart={removeItemOfCart} />
				</>
			) : (
				<div className="p-5 min-vh-100" style={{ backgroundColor: "#F3F2FC" }}>
					<div className="alert alert-primary text-center fs-4" role="alert">
						No hay nada en el carrito
					</div>
					<div className="d-grid gap-2 d-md-flex justify-content-md-end">
						<Link to="/">
							<button className="btn btn-outline-primary me-md-2 p-2" type="button">
								Buscar algo para comprar
							</button>
						</Link>
					</div>
				</div>
			)}
		</>
	);
};

export default ItemCartContainer;
