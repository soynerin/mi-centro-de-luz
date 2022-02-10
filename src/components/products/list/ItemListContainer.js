import { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import ItemList from "./ItemList";

const ItemListContainer = ({ styleBg }) => {

	const [productos, setProductos] = useState([]);

	useEffect(() => {

		const productsJson = [
			{
				id: 1,
				title: "Producto 1",
				description:
					"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed cursus lacinia velit. Aliquam at purus mollis nisi porttitor dignissim. In tincidunt ligula in nibh aliquet placerat. Mauris feugiat nec tellus id fringilla. Cras mattis mauris non neque luctus, sed consectetur. ",
				price: 5000,
				imageUrl: "https://radiogamasi.com/wp-content/uploads/2017/07/img_not_available.png",
				stock: 20,
			},
			{
				id: 2,
				title: "Producto 2",
				description:
					"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed cursus lacinia velit. Aliquam at purus mollis nisi porttitor dignissim. In tincidunt ligula in nibh aliquet placerat. Mauris feugiat nec tellus id fringilla. Cras mattis mauris non neque luctus, sed consectetur. ",
				price: 7500,
				imageUrl: "https://radiogamasi.com/wp-content/uploads/2017/07/img_not_available.png",
				stock: 10,
			},
			{
				id: 3,
				title: "Producto 3",
				description:
					"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed cursus lacinia velit. Aliquam at purus mollis nisi porttitor dignissim. In tincidunt ligula in nibh aliquet placerat. Mauris feugiat nec tellus id fringilla. Cras mattis mauris non neque luctus, sed consectetur. ",
				price: 9000,
				imageUrl: "https://radiogamasi.com/wp-content/uploads/2017/07/img_not_available.png",
				stock: 2,
			},
			{
				id: 4,
				title: "Producto 4",
				description:
					"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed cursus lacinia velit. Aliquam at purus mollis nisi porttitor dignissim. In tincidunt ligula in nibh aliquet placerat. Mauris feugiat nec tellus id fringilla. Cras mattis mauris non neque luctus, sed consectetur. ",
				price: 3200,
				imageUrl: "https://radiogamasi.com/wp-content/uploads/2017/07/img_not_available.png",
				stock: 100,
			},
			{
				id: 5,
				title: "Producto 5",
				description:
					"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed cursus lacinia velit. Aliquam at purus mollis nisi porttitor dignissim. In tincidunt ligula in nibh aliquet placerat. Mauris feugiat nec tellus id fringilla. Cras mattis mauris non neque luctus, sed consectetur. ",
				price: 13300,
				imageUrl: "https://radiogamasi.com/wp-content/uploads/2017/07/img_not_available.png",
				stock: 15,
			},
			{
				id: 6,
				title: "Producto 6",
				description:
					"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed cursus lacinia velit. Aliquam at purus mollis nisi porttitor dignissim. In tincidunt ligula in nibh aliquet placerat. Mauris feugiat nec tellus id fringilla. Cras mattis mauris non neque luctus, sed consectetur. ",
				price: 300,
				imageUrl: "https://radiogamasi.com/wp-content/uploads/2017/07/img_not_available.png",
				stock: 5,
			},
			{
				id: 7,
				title: "Producto 7",
				description:
					"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed cursus lacinia velit. Aliquam at purus mollis nisi porttitor dignissim. In tincidunt ligula in nibh aliquet placerat. Mauris feugiat nec tellus id fringilla. Cras mattis mauris non neque luctus, sed consectetur. ",
				price: 3000,
				imageUrl: "https://radiogamasi.com/wp-content/uploads/2017/07/img_not_available.png",
				stock: 70,
			},
			{
				id: 8,
				title: "Producto 8",
				description:
					"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed cursus lacinia velit. Aliquam at purus mollis nisi porttitor dignissim. In tincidunt ligula in nibh aliquet placerat. Mauris feugiat nec tellus id fringilla. Cras mattis mauris non neque luctus, sed consectetur. ",
				price: 35000,
				imageUrl: "https://radiogamasi.com/wp-content/uploads/2017/07/img_not_available.png",
				stock: 18,
			},
		];		

		const getProducts = new Promise((resolve, reject) => {
			setTimeout(() => {
				resolve(productsJson);
			}, 2000);
		});

		getProducts.then(
			(productsList) => {
				setProductos(productsList);
			},
			(err) => {
				console.error(err);
			}
		).finally(() => {
			console.info("Consulta de Productos finalizada");
		});
	}, []);

	return (		
		<>
			<main style={ styleBg }>
				<Container>
					<Row>
				    	<h1 className="text-center text-uppercase py-5 fw-bold"> Mi centro de Luz </h1>  
					</Row>
					<Row>
						<h2 className="fw-light m-0">Ofertas</h2>
						<ItemList productos={productos} />
					</Row>
				</Container>
			</main>			
		</>
	);
};

export default ItemListContainer;
