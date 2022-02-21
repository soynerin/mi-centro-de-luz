import React, { useContext } from "react";
import { CartContext } from "../../context/cart/CartContext";
import Cart from "./Cart";

const ItemCartContainer = () => {
	const { cartItems } = useContext(CartContext);

	return <Cart cartItems={cartItems} />;
};

export default ItemCartContainer;
