import React, { useContext, useState } from "react";
import { Button, Col, Container, Form, Row, Table } from "react-bootstrap";
import { CartContext } from "../../context/cart/CartContext";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import SpinnerLoader from "../widgets/SpinnerLoader";
import { Link } from "react-router-dom";

const Checkout = ({ formControls }) => {
	const [buyer, setBuyer] = useState({
		name: "",
		phone: "",
		email: "",
	});

	const [orderId, setOrderId] = useState(null);

	const [isLoading, setIsLoading] = useState(false);

	const { cartItems, getTotalPriceCart, clearCart } = useContext(CartContext);

	const sendOrder = () => {
		setIsLoading(true);

		const order = {
			buyer,
			items: cartItems.map(({ producto }) => producto),
			total: getTotalPriceCart(),
		};

		const db = getFirestore();
		const ordersCollection = collection(db, "orders");

		addDoc(ordersCollection, order)
			.then(({ id }) => {
				setOrderId(id);
			})
			.catch((error) => {
				console.error(error);
			})
			.finally(() => {
				setIsLoading(false);
			});
	};

	return (
		<>
			{orderId && (
				<div className="alert alert-success alert-dismissible fade show mt-5" role="alert">
					<strong>Orden generada exitosamente!!</strong> Se genero la orden con ID: {orderId}
					<button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
					<hr></hr>
					<div className="d-flex flex-row-reverse bd-highligh">
						<Link to="/">
							<Button
								variant="secondary"
								onClick={() => {
									clearCart();
								}}
							>
								Ir al Inicio
							</Button>{" "}
						</Link>
					</div>
				</div>
			)}

			{isLoading && <SpinnerLoader />}

			<Row className="mt-5">
				<Col>
					<Row>
						<h2 className="fw-bold">Billing Details</h2>
					</Row>

					<hr className="my-5"></hr>

					<Container>
						<Form.Group className="mb-3" controlId="formBasicEmail">
							{formControls.map(({ label, name, type, placeholder }, index) => {
								return (
									<div key={index}>
										<Form.Label>{label}</Form.Label>
										<Form.Control
											type={type}
											value={buyer[name]}
											name={name}
											placeholder={placeholder}
											onChange={(e) => {
												setBuyer({ ...buyer, [e.target.name]: e.target.value });
											}}
										/>
									</div>
								);
							})}
						</Form.Group>
					</Container>
				</Col>
				<Col>
					<Row>
						<h2 className="fw-bold">Your order</h2>
					</Row>

					<hr className="my-5"></hr>

					<Container>
						<div className="d-grid gap-2">
							<Table bordered>
								<thead>
									<tr>
										<th>Product</th>
										<th>Total</th>
									</tr>
								</thead>
								<tbody>
									{cartItems.map(({ producto, productQauntityCart }, index) => {
										return (
											<tr key={index}>
												<td>$ {producto.title}</td>
												<td>$ {producto.price * productQauntityCart}</td>
											</tr>
										);
									})}

									<tr>
										<td>Total</td>
										<td>$ {getTotalPriceCart()}</td>
									</tr>
								</tbody>
							</Table>
							<Button
								variant="success"
								size="lg"
								onClick={() => {
									sendOrder();
								}}
							>
								Place Order
							</Button>
						</div>
					</Container>
				</Col>
			</Row>
		</>
	);
};

export default Checkout;
