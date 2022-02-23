import React, { createContext, useState } from "react";

export const CartContext = createContext([]);

export const CartProvider = ({ children }) => {
	const [cartItems, setCartItems] = useState([]);
	const [isItemInCart, setIsItemInCart] = useState(false);

	const addItemToCart = (currentProduct) => {
		if (cartItems.some((item) => item["producto"]["id"] === currentProduct["producto"]["id"])) {
			return;
		}

		setCartItems([...cartItems, currentProduct]);
	};

	const removeItemOfCart = (itemId) => {
		const itemsfiltered = cartItems.filter((e) => e["producto"]["id"] !== itemId);

		setCartItems(itemsfiltered);
	};

	const clearCart = () => {};

	const handleSetIsItemInCart = () => {
		setIsItemInCart(true);
	};

	return (
		<CartContext.Provider
			value={{ cartItems, addItemToCart, removeItemOfCart, clearCart, handleSetIsItemInCart, isItemInCart }}
		>
			{children}
		</CartContext.Provider>
	);
};
