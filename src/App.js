import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import { Container, Row } from 'react-bootstrap';
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";

const styleBg = {
	backgroundImage: 'url(../images/bg.jpeg)', 
	backgroundPosition: 'center center', 
	backgroundSize: 'cover',
	minHeight: '100vh',
}

function App() {

	return (
		<>
			<Navbar />
			<main style={ styleBg }>
				<Container>
					<Row>
				    	<h1 className="text-white text-center text-uppercase py-5"> Mi centro de Luz </h1>  
					</Row>
					<Row>
						<ItemListContainer saludo="Aqui debera ir un listado de productos" />
					</Row>
					<Row>		
						<ItemDetailContainer />
					</Row>
				</Container>
			</main>
		</>
	);
}

export default App;
