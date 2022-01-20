import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import { Container } from 'react-bootstrap';

const styleBg = {
	backgroundImage: 'url(../images/bg.jpeg)', 
	backgroundPosition: 'center center', 
	backgroundSize: 'cover'
}

let styles = {
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'start',
  fontSize: 'calc(2em + 2vmin)',
  color: 'white',
  paddingTop: 'calc(5em + 2vmin)'
}

function App() {
	return (
		<>
			<Navbar />
			<main style={ styleBg }>
				<Container>
						<Container>
				      		<h1 style={ styles }> Mi centro de Luz </h1>  
						</Container>
				</Container>
			</main>
		</>
	);
}

export default App;
