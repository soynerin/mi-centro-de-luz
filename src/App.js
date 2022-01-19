import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import { Container } from 'react-bootstrap';

let styles = {
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: 'calc(10px + 2vmin)',
  color: 'black'
}

function App() {
	return (
		<div>
			<Navbar />
			<main>
				<Container>
						<Container>
				      <h1 style={ styles }> Mi centro de Luz - CODEROUSE </h1>  
						</Container>
				</Container>
			</main>
		</div>
	);
}

export default App;
