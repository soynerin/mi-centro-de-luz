import { useState } from "react";
import { Card, Button, Form } from "react-bootstrap";

const ItemCount = ({stock}) => {

    const [quantity, setQuantity] = useState(0);
    const [messageInfo, setMessageInfo] = useState("");

    const incrementQuantity = () => {
        if (quantity >= stock) {
            setMessageInfo("Alcanzo el limite disponible");

            return;
        };

        setQuantity(quantity + 1);
    }

    const decrementQuantity = () => {

        setMessageInfo("");

        if (quantity <= 0) return;

        setQuantity(quantity - 1);
    }


	return (
		<Card className="text-center">
			<Card.Header className="text-uppercase fs-4">Contador</Card.Header>
			<Card.Body>
				<Card.Title></Card.Title>
				<Card.Text>
				</Card.Text>
                <div className="d-inline-flex justify-content-center">
                    <Button variant="light border border-2" onClick={decrementQuantity}><i className="lni lni-minus" onClick={decrementQuantity}></i></Button>
                    <Form.Text  className="text-center align-middle px-5 fs-5">{quantity}</Form.Text>
                    <Button variant="light border border-2" onClick={incrementQuantity}><i className="lni lni-plus" onClick={incrementQuantity}></i></Button>
                </div>
                <div className="d-flex justify-content-center mt-5">
                    <Button variant="dark text-uppercase" onClick={() => { setQuantity(0); alert("Item agregado al Carrito")}}>Agregar al carrito</Button>                
                </div>
			</Card.Body>
			<Card.Footer className="text-info fs-5">{messageInfo}</Card.Footer>
		</Card>
	);
};

export default ItemCount;
