import { getFirestore, getDocs, collection, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import SpinnerLoader from "../../widgets/SpinnerLoader";
import ItemList from "./ItemList";

const ItemListContainer = ({ headerTitle, styleBg }) => {
	const { id } = useParams();
	const [products, setProducts] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	const getCategoryDescription = () => {
		const categoryFiltered = products.find((element) => element.category.id === parseInt(id));
		return categoryFiltered?.category.description;
	};

	useEffect(() => {
		const db = getFirestore();
		const items = collection(db, "items");

		const getProductsByCategory = () => {
			const q = query(collection(db, "items"), where("category.id", "==", id));
			getDocs(q)
				.then((snapshot) => {
					setProducts(
						snapshot.docs.map((doc) => ({
							id: doc.id,
							...doc.data(),
						}))
					);
				})
				.finally(() => {
					setIsLoading(false);
				});
		};

		if (id) {
			setIsLoading(true);
			getProductsByCategory();

			return;
		}

		getDocs(items)
			.then((snapshot) => {
				setProducts(
					snapshot.docs.map((doc) => ({
						id: doc.id,
						...doc.data(),
					}))
				);
			})
			.finally(() => {
				setIsLoading(false);
			});
	}, [id]);

	return (
		<main style={styleBg}>
			<Container>
				<Row>
					<h1 className="text-center text-uppercase py-5 fw-bold"> Mi centro de Luz </h1>
				</Row>
				<Row>
					<h2 className="text-uppercase fs-3 fw-light m-0">{headerTitle}</h2>{" "}
					<span className="fs-3 fw-normal m-0">{getCategoryDescription()}</span>
					{isLoading ? <SpinnerLoader /> : <ItemList productos={products} />}
				</Row>
			</Container>
		</main>
	);
};

export default ItemListContainer;
