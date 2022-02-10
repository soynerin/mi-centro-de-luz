import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
	let { id } = useParams();

	const productoJson = {
		id: id,
		title: `Producto ${id}`,
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed cursus lacinia velit. Aliquam at purus mollis nisi porttitor dignissim. In tincidunt ligula in nibh aliquet placerat. Mauris feugiat nec tellus id fringilla. Cras mattis mauris non neque luctus, sed consectetur. ",
		price: 5000,
		imageUrl: "https://tacm.com/wp-content/uploads/2018/01/no-image-available.jpeg",
		stock: 20,
	};

	const [producto, setProducto] = useState({});

	useEffect(() => {
		const getItem = new Promise((resolve) => {
			setTimeout(() => {
				resolve();
			}, 2000);
		});

		getItem
			.then(
				() => {
					setProducto(productoJson);
				},
				(err) => {
					console.error(err);
				}
			)
			.finally(() => {
				console.info("Consulta del Producto finalizada");
			});
	}, []);

	return (
		<>
			{" "}
			<ItemDetail producto={producto} />
			{" "}
		</>
	);
};

export default ItemDetailContainer;
