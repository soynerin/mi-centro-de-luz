import React from "react";
import { Navbar as BTNavbar, Container, Nav } from 'react-bootstrap';

const Navbar = () => {
	return (
		<BTNavbar bg="dark" variant="dark" expand="lg">
			<Container>
				<BTNavbar.Brand href="#home">Mi Centro de Luz</BTNavbar.Brand>
				<BTNavbar.Toggle aria-controls="basic-navbar-nav" />
				<BTNavbar.Collapse id="basic-navbar-nav">
					<Nav className="me-auto">
						<Nav.Link href="#inicio">Inicio</Nav.Link>
						<Nav.Link href="#tienda">Tienda</Nav.Link>
						<Nav.Link href="#acerca">Acerca de Mi</Nav.Link>
					</Nav>
				</BTNavbar.Collapse>
			</Container>
		</BTNavbar>
	);
};

export default Navbar;
