import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/navbar/Navbar";
import ItemListContainer from "./components/products/list/ItemListContainer";
import ItemDetailContainer from "./components/products/detail/ItemDetailContainer";
import ItemCartContainer from "./components/cartShopping/ItemCartContainer";
import { Route, Routes } from "react-router-dom";
import { CartProvider } from "./context/cart/CartContext";

const styleBg = {
	backgroundColor: "#F3F2FC",
	minHeight: "100vh",
};

function App() {
	return (
		<>
			<CartProvider>
				<Navbar />
				<Routes>
					<Route
						path="/"
						element={<ItemListContainer headerTitle={"Productos Destacados"} styleBg={styleBg} />}
					></Route>
					<Route path="category/:id" element={<ItemListContainer styleBg={styleBg} />}></Route>
					<Route path="item/:id" element={<ItemDetailContainer />}></Route>
					<Route path="cart" element={<ItemCartContainer />}></Route>
				</Routes>
			</CartProvider>
		</>
	);
}

export default App;
