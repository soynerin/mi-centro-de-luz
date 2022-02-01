import React from "react";
import { Card, Col, Button, Badge } from "react-bootstrap";

const Item = ({ title, description, price, imageUrl, stock }) => {
	return (
		<Col>
			<Card style={{ width: "auto" }}>
				<Card.Img variant="top" src={imageUrl} />
				<Card.Body>
					<Card.Title>{title}</Card.Title>
					<Card.Text>{description}</Card.Text>
                    <div className="d-flex justify-content-between align-items-center">
                        <Badge bg="info">$ {price}</Badge>{' '}
                        <Button variant="outline-primary">Ver mas</Button>
                    </div>
				</Card.Body>
				<Card.Footer className="text-muted text-center">Stock disponible: {stock}</Card.Footer>
			</Card>
		</Col>
	);
};

export default Item;
