import Item from "./Item";
import { Row } from "react-bootstrap";

const ItemList = ({productos}) => {

	return (
        <Row xs={1} md={4} className="g-4">
            { productos && productos.map( p =>             
                <Item 
                    key={p.id} 
                    title={p.title} 
                    description={p.description} 
                    price={p.price} 
                    imageUrl={p.imageUrl} 
                    stock={p.stock} />
            ) }
        </Row>
    );
};

export default ItemList;
