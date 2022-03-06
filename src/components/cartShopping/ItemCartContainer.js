import React, { useContext } from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/cart/CartContext";
import Cart from "./Cart";

const ItemCartContainer = ({ styleBg }) => {
	const { cartItems, removeItemOfCart } = useContext(CartContext);

	return (
		<div style={styleBg}>
			<Container>
				{cartItems.length > 0 ? (
					<Cart cartItems={cartItems} removeItemOfCart={removeItemOfCart} />
				) : (
					<div className="p-5 min-vh-100">
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
			</Container>
		</div>
	);
};

export default ItemCartContainer;
