import React, { useContext, useState } from "react";
import { Button, Col, Container, Form, ListGroup, Row, Table } from "react-bootstrap";
import { CartContext } from "../../context/cart/CartContext";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import SpinnerLoader from "../widgets/SpinnerLoader";

const Checkout = () => {
	const [buyer, setBuyer] = useState({
		name: "",
		phone: "",
		email: "",
	});

	const [orderId, setOrderId] = useState(null);

	const [isLoading, setIsLoading] = useState(false);

	const { cartItems, getTotalPriceCart } = useContext(CartContext);

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
				<>
					<div className="alert alert-success alert-dismissible fade show mt-5" role="alert">
						<strong>Orden generada exitosamente!!</strong> Se genero la orden con ID: {orderId}
						<button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
					</div>
				</>
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
							<Form.Label>Name</Form.Label>
							<Form.Control
								type="text"
								placeholder="Name"
								value={buyer.name}
								name="name"
								onChange={(e) => {
									setBuyer({ ...buyer, name: e.target.value });
								}}
							/>

							<Form.Label>Phone</Form.Label>
							<Form.Control
								type="number"
								placeholder="Phone Number"
								value={buyer.phone}
								name="phone"
								onChange={(e) => {
									setBuyer({ ...buyer, phone: e.target.value });
								}}
							/>

							<Form.Label>Email</Form.Label>
							<Form.Control
								type="email"
								placeholder="Email"
								value={buyer.email}
								name="email"
								onChange={(e) => {
									setBuyer({ ...buyer, email: e.target.value });
								}}
							/>
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
									{cartItems.map(({ producto, productQauntityCart }) => {
										return (
											<tr>
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
