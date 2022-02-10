import { Nav } from "react-bootstrap";

const CartWidget = () => {
	return (

			<Nav>
				<Nav.Link href="#cart">
					<img
						src="../icons/cart.svg"
						width="32"
						height="32"
						alt="carticon"
					/>
				</Nav.Link>
			</Nav>

	);
};

export default CartWidget;
