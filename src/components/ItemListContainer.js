import { Alert } from "react-bootstrap";
import ItemCount from "./ItemCount";

const ItemListContainer = ({saludo}) => {

	const availableStock = 15;

	return (
		<Alert variant="light" className="mt-5 text-center">
			<Alert.Heading>{saludo}</Alert.Heading>
			<hr />
			<ItemCount stock={availableStock} />
		</Alert>
	);
};

export default ItemListContainer;
