import React from "react";
import { Navbar as BTNavbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import CartWidget from "./widgets/CartWidget";

const Navbar = () => {

	const navLinkStyle = {
		textTransform: "uppercase",
		fontSize: "1.25rem",
		fontWeight: "bolder",
		textDecoration: "none",
		display: "block",
		padding: ".5rem 1rem",
		color: "rgba(0,0,0,.55)",
		transition: "color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out",
	}

	return (
		<BTNavbar bg="light" expand="lg">
			<Container>
				<BTNavbar.Brand>
					<Link to="/">
						<img
							src="../images/logo.png"
							width="60"
							height="60"
							className="d-inline-block align-top"
							alt="React Bootstrap logo"
							/>
					</Link>
				</BTNavbar.Brand>
				<BTNavbar.Toggle aria-controls="basic-navbar-nav" />
				<BTNavbar.Collapse id="basic-navbar-nav">
					<Nav className="me-auto">						
						<Link to="/" style={navLinkStyle} >
							Inicio
						</Link>
						<NavDropdown title="Categorias" id="basic-nav-dropdown">
							<Link to="category/1">
								Categoria 1
							</Link>
							<br />
							<Link to="category/2">
								Categoria 2
							</Link>
						</NavDropdown>
					</Nav>
					<CartWidget />
				</BTNavbar.Collapse>
			</Container>
		</BTNavbar>
	);
};

export default Navbar;
