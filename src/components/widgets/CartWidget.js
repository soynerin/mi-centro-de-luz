import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const CartWidget = () => {
	return (
		<Nav>
			<Link to="/cart">
				<img src="../icons/cart.svg" width="32" height="32" alt="carticon" />
			</Link>
		</Nav>
	);
};

export default CartWidget;
