import Item from "../item/Item";
import { Row } from "react-bootstrap";

const ItemList = ({ productos }) => {
	return (
		<Row xs={1} md={2} lg={3} className="g-4">
			{productos &&
				productos.map(({ id, title, description, price, imageUrl, stock, category }) => (
					<Item
						key={id}
						id={id}
						title={title}
						description={description}
						price={price}
						imageUrl={imageUrl}
						stock={stock}
						category={category.description}
					/>
				))}
		</Row>
	);
};

export default ItemList;
