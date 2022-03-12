import { useContext } from "react";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/cart/CartContext";

const CartWidget = () => {
	const { cartItems, isItemInCart } = useContext(CartContext);

	const itemCartCount = cartItems.length;

	return (
		<Nav>
			<Link to="/cart">
				<div className="position-relative">
					<img src="../icons/cart.svg" width="32" height="32" alt="carticon" />
					{isItemInCart && (
						<span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-secondary">
							{itemCartCount} <span className="visually-hidden">Items in Cart </span>
						</span>
					)}
				</div>
			</Link>
		</Nav>
	);
};

export default CartWidget;
