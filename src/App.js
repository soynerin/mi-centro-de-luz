import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/navbar/Navbar";
import ItemListContainer from "./components/products/list/ItemListContainer";
import ItemDetailContainer from "./components/products/detail/ItemDetailContainer";
import { Route, Routes } from "react-router-dom";

const styleBg = {
	backgroundColor: "#F3F2FC",
	minHeight: '100vh',
}

function App() {

	return (
		<>
			<Navbar />		
			<Routes>
				<Route path="/" element={<ItemListContainer styleBg={styleBg} />} ></Route>
				<Route path="category/:id" element={<ItemListContainer styleBg={styleBg} />}></Route>
				<Route path="item/:id" element={<ItemDetailContainer />}></Route>
			</Routes>
		</>
	);
}

export default App;
