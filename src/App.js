import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/navbar/Navbar";
import ItemListContainer from "./components/products/list/ItemListContainer";
import ItemDetailContainer from "./components/products/detail/ItemDetailContainer";
import ItemCartContainer from "./components/cartShopping/ItemCartContainer";
import { Route, Routes } from "react-router-dom";
import { CartProvider } from "./context/cart/CartContext";
import Footer from "./components/footer/Footer";

const styleBg = {
	minHeight: "100vh",
	backgroundImage: "linear-gradient(to top, #e6e9f0 0%, #eef1f5 100%)",
};

function App() {
	return (
		<CartProvider>
			<Navbar />
			<Routes>
				<Route
					path="/"
					element={<ItemListContainer headerTitle={"Productos Destacados"} styleBg={styleBg} />}
				></Route>
				<Route path="category/:id" element={<ItemListContainer styleBg={styleBg} />}></Route>
				<Route path="item/:id" element={<ItemDetailContainer styleBg={styleBg} />}></Route>
				<Route path="cart" element={<ItemCartContainer styleBg={styleBg} />}></Route>
			</Routes>
			<Footer />
		</CartProvider>
	);
}

export default App;
