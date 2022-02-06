import React from "react";
import {
	Badge,
	Button,
	Card,
	Carousel,
	Col,
	Container,
	Row,
} from "react-bootstrap";
import ItemCount from "./ItemCount";

const ItemDetail = ({ producto }) => {

	const formatNumber = (amount) => {
		const numberFormat = new Intl.NumberFormat('es-AR', { style: 'currency', currency: 'ARS' });

		return numberFormat.format(amount)
	}	

	return (
		<div className="p-5" style={{ backgroundColor: "#F3F2FC" }}>
			<Container className="col-xxl-8 px-4 py-5">
				<Row className="flex-lg-row-reverse align-items-center g-5 py-5">
					<Col sm={8} lg={6}>
						<img
							src={producto.imageUrl} 
							className="d-block mx-lg-auto img-fluid"
							width="auto"
							height="auto"
							loading="lazy"
							alt={producto.title}
						/>
						<br />
						<img src={producto.imageUrl} class="img-thumbnail rounded mx-auto d-block" alt={producto.title}  />
					</Col>
					<Col sm={4} lg={6}>
						<Row>
							<h1 className="display-5 fw-bold lh-1 mb-5">
								{producto.title}
							</h1>
						</Row>
						<Row>
							<span className="fs-1 d-block"> { formatNumber(parseInt(producto.price)) }</span>
							<span> en 12x { formatNumber(parseInt(producto.price) / 12) }</span>
							<button type="button" className="btn btn-link d-flex">Ver medios de pago</button>
						</Row>
						<Row className="mt-4">
							<p className="fw-lighter">
								{producto.description}
							</p>
						</Row>
						<Row className="mt-4">
							<button type="button" className="btn btn-outline-dark">Ver mas caracteristicas</button>
						</Row>
					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default ItemDetail;
