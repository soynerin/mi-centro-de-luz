import React, { createContext, useState } from "react";

export const CartContext = createContext([]);

export const CartProvider = ({ children }) => {
	const [cartItems, setCartItems] = useState([]);

	const addItemToCart = (currentProduct) => {
		if (cartItems.some((item) => item["producto"]["id"] === currentProduct["producto"]["id"])) {
			return;
		}

		setCartItems([...cartItems, currentProduct]);
	};

	const removeItemOfCart = (itemId) => {};

	const clearCart = () => {};

	const isItemInCart = () => {};

	return (
		<CartContext.Provider value={{ cartItems, addItemToCart, removeItemOfCart, clearCart, isItemInCart }}>
			{children}
		</CartContext.Provider>
	);
};
