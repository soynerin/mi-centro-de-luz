import React from "react";
import { Card, Col, Button, Badge } from "react-bootstrap";
import { Link } from "react-router-dom";

const Item = ({ id, title, description, price, imageUrl, stock }) => {
	return (
		<Col>
			<Card className="shadow p-3 mb-5 bg-body rounded" style={{ width: "auto" }}>
				<Card.Img variant="top" src={imageUrl} />
				<Card.Body>
					<Card.Title>{title}</Card.Title>
					<Card.Text>{description}</Card.Text>
                    <div className="d-flex justify-content-between align-items-center">
                        <Badge bg="info">$ {price}</Badge>{' '}
						<Link to={`/item/${id}`}>
	                        <Button variant="outline-primary">Ver mas</Button>
						</Link>
                    </div>
				</Card.Body>
				<Card.Footer className="text-muted text-center">Stock disponible: {stock}</Card.Footer>
			</Card>
		</Col>
	);
};

export default Item;
