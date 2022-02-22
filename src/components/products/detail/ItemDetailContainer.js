import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SpinnerLoader from "../../widgets/SpinnerLoader";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
	const { id } = useParams();
	const [producto, setProducto] = useState({});
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const productJson = {
			id: id,
			title: `Producto ${id}`,
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed cursus lacinia velit. Aliquam at purus mollis nisi porttitor dignissim. In tincidunt ligula in nibh aliquet placerat. Mauris feugiat nec tellus id fringilla. Cras mattis mauris non neque luctus, sed consectetur. ",
			price: 5000,
			imageUrl: "https://tacm.com/wp-content/uploads/2018/01/no-image-available.jpeg",
			stock: 20,
		};

		const getProductItem = new Promise((resolve) => {
			setTimeout(() => {
				resolve(productJson);
			}, 2000);
		});

		getProductItem
			.then(
				(productItem) => {
					setProducto(productItem);
				},
				(err) => {
					console.error(err);
				}
			)
			.finally(() => {
				console.info("Consulta del Producto finalizada");
				setIsLoading(false);
			});
	}, [id]);

	return <> {isLoading ? <SpinnerLoader /> : <ItemDetail producto={producto} />} </>;
};

export default ItemDetailContainer;
