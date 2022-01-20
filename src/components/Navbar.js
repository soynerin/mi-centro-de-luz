import React from "react";
import { Navbar as BTNavbar, Container, Nav } from "react-bootstrap";

const Navbar = () => {
	return (
		<BTNavbar bg="light" expand="lg">
			<Container>
				<BTNavbar.Brand href="#home">
					<img
						src="../images/logo.png"
						width="60"
						height="60"
						className="d-inline-block align-top"
						alt="React Bootstrap logo"
					/>
				</BTNavbar.Brand>
				<BTNavbar.Toggle aria-controls="basic-navbar-nav" />
				<BTNavbar.Collapse id="basic-navbar-nav">
					<Nav className="me-auto">
						<Nav.Link href="#inicio" className="text-uppercase fs-5 fw-bolder">Inicio</Nav.Link>
						<Nav.Link href="#tienda" className="text-uppercase fs-5 fw-bolder">Tienda</Nav.Link>
						<Nav.Link href="#acerca" className="text-uppercase fs-5 fw-bolder">Acerca de Mi</Nav.Link>
					</Nav>
				</BTNavbar.Collapse>
			</Container>
		</BTNavbar>
	);
};

export default Navbar;
