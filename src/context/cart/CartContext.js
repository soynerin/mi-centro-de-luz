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

	const clearCart = () => {
		setCartItems([]);
	};

	const handleSetIsItemInCart = () => {
		setIsItemInCart(true);
	};

	const getTotalPriceCart = () => {
		const totalPrice = cartItems.reduce(
			(n, { producto, productQauntityCart }) => n + producto["price"] * productQauntityCart,
			0
		);

		return totalPrice;
	};

	return (
		<CartContext.Provider
			value={{
				cartItems,
				addItemToCart,
				removeItemOfCart,
				clearCart,
				handleSetIsItemInCart,
				isItemInCart,
				getTotalPriceCart,
			}}
		>
			{children}
		</CartContext.Provider>
	);
};
