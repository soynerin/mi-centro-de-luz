import { useState } from "react";
import { Card, Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

const ItemCount = ({ stock, onAdd }) => {
	const [quantity, setQuantity] = useState(0);
	const [messageInfo, setMessageInfo] = useState("");

	const incrementQuantity = () => {
		if (quantity >= stock) {
			setMessageInfo("Alcanzo el limite disponible");

			return;
		}

		setQuantity(quantity + 1);
	};

	const decrementQuantity = () => {
		setMessageInfo("");

		if (quantity <= 0) return;

		setQuantity(quantity - 1);
	};

	return (
		<Card className="text-center border-light" style={{ backgroundColor: "#F3F2FC" }}>
			<Card.Body>
				<div className="d-inline-flex justify-content-center">
					<Button variant="light border border-2" onClick={decrementQuantity}>
						<i className="lni lni-minus" onClick={decrementQuantity}></i>
					</Button>
					<Form.Text className="text-center align-middle px-5 fs-5">{quantity}</Form.Text>
					<Button variant="light border border-2" onClick={incrementQuantity}>
						<i className="lni lni-plus" onClick={incrementQuantity}></i>
					</Button>
				</div>
				<div className="mt-5">
					<Button
						variant={`dark text-uppercase ${quantity > 0 ? "" : "disabled"}`}
						onClick={() => {
							onAdd(quantity);
						}}
					>
						Agregar al carrito
					</Button>
				</div>
			</Card.Body>
		</Card>
	);
};

export default ItemCount;
