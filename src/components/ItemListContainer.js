import { Alert } from "react-bootstrap";

const ItemListContainer = ({saludo}) => {
	return (
		<Alert variant="light" className="mt-5 text-center">
			<Alert.Heading>{saludo}</Alert.Heading>
		</Alert>
	);
};

export default ItemListContainer;
