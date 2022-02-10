import { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";

const ItemListContainer = ({ headerTitle, styleBg }) => {
	const { id } = useParams();
	const [productos, setProductos] = useState([]);

	const getCategoryDescription = () => {
		const categoryFiltered = productos.find(element => element.category.id === parseInt(id));
		return categoryFiltered?.category.description
	}

	useEffect(() => {
		const productsJson = [
			{
				id: 1,
				title: "Sahumerios Resina Natural Sagrada Madre",
				description:
					"Sahumerios Artesanales Naturales Línea Sagrada Madre. Fabricados con resinas naturales, producto 100 % ecológico.	Ideal para limpieza energética de todos tus ambientes. EXTRA DURACIÓN - CALIDAD PREMIUM",
				price: 260,
				imageUrl: "https://d3ugyf2ht6aenh.cloudfront.net/stores/054/907/products/catalogo-sahumerio-21-a4bbbfa40c998328f716256665419372-640-0.jpeg",
				stock: 200,
				category: {
					id: 1,
					description: "Sahumerios",
				},
			},
			{
				id: 2,
				title: "Sahumerios 7 Arcángeles",
				description: "Incienso de los 7 Arcángeles",
				price: 340,
				imageUrl: "https://d3ugyf2ht6aenh.cloudfront.net/stores/054/907/products/catalogo-sahumerio-21-a4bbbfa40c998328f716256665419372-640-0.jpeg",
				stock: 200,
				category: {
					id: 1,
					description: "Sahumerios",
				},				
			},
			{
				id: 3,
				title: "Sahumerios Artesanales",
				description: "Sahumerios Artesanales para uso con fines específicos",
				price: 1900,
				imageUrl: "https://d3ugyf2ht6aenh.cloudfront.net/stores/054/907/products/catalogo-sahumerio-21-a4bbbfa40c998328f716256665419372-640-0.jpeg",
				stock: 100,
				category: {
					id: 1,
					description: "Sahumerios",
				},				
			},
			{
				id: 4,
				title: "Agua Chamánica - Protección & Limpieza",
				description: "Protector de energías externas, limpia el cuerpo físico y los cuerpos astrales. ",
				price: 560,
				imageUrl: "https://d22fxaf9t8d39k.cloudfront.net/04d10b594718b682388f51adce4dfe197ad0ab28c6db5c47b925956ebf16783c29407.jpeg",
				stock: 50,				
				category: {
					id: 2,
					description: "Lociones áuricas",
				},					
			},
			{
				id: 5,
				title: "Agua de Jazmín - Intuición",
				description: "Es estimulante, anima a la actividad, produce mayor confianza y serenidad, estimula la actividad del 3er ojo",
				price: 560,
				imageUrl: "https://d22fxaf9t8d39k.cloudfront.net/04d10b594718b682388f51adce4dfe197ad0ab28c6db5c47b925956ebf16783c29407.jpeg",
				stock: 50,
				category: {
					id: 2,
					description: "Lociones áuricas",
				},					
			},
			{
				id: 6,
				title: "Agua de Rosas - Amor & Compasión",
				description: "La Colonia de Rosas es afrodisíaca, potencia los sentimientos de paz, armonía y amor.",
				price: 560,
				imageUrl: "https://d22fxaf9t8d39k.cloudfront.net/04d10b594718b682388f51adce4dfe197ad0ab28c6db5c47b925956ebf16783c29407.jpeg",
				stock: 50,
				category: {
					id: 2,
					description: "Lociones áuricas",
				},				
			},
			{
				id: 7,
				title: "Pirámide Egipcia Grande (Pasta De Turmalina Y Aluminio)",
				description:
					"El orgón u orgonita se le llama a los filtros de energía electro-magnética, que descubrió el investigador Dr. Wilhelm Reich, en la década de 1930.",
				price: 1110,
				imageUrl: "https://m.media-amazon.com/images/I/91d7BTR92HL._AC_SL1500_.jpg",
				stock: 10,
				category: {
					id: 3,
					description: "Orgones",
				},				
			},
			{
				id: 8,
				title: "Pirámide Tetraédrica Chica Violeta Cristal De Amatista",
				description:
					"Pirámide Tetraédrica Chica Violeta Cristal De Amatista Se recomienda ubicarla en la mesita de luz de la habitación o debajo de la cama, ya que mantiene un sueño profundo, con un efecto para los niños. Activa los sueños lucidos. Perfecto complemento con otras pirámides sobre todo para en salas de meditación.",
				price: 1110,
				imageUrl: "https://m.media-amazon.com/images/I/91d7BTR92HL._AC_SL1500_.jpg",
				stock: 10,
				category: {
					id: 3,
					description: "Orgones",
				},				
			},
		];

		const getProducts = new Promise((resolve, reject) => {
			setTimeout(() => {

				const productsFiltered = productsJson.filter(p => p.category.id === parseInt(id));

				if (productsFiltered.length > 0) {					
					resolve(productsFiltered);

					return;
				}

				resolve(productsJson);

			}, 2000);
		});

		getProducts
			.then(
				(productsList) => {
					setProductos(productsList);
				},
				(err) => {
					console.error(err);
				}
			)
			.finally(() => {
				console.info("Consulta de Productos finalizada");
			});
	}, [id]);	

	return (
		<>
			<main style={styleBg}>
				<Container>
					<Row>
						<h1 className="text-center text-uppercase py-5 fw-bold"> Mi centro de Luz </h1>
					</Row>
					<Row>
						<h2 className="text-uppercase fs-3 fw-light m-0">{ headerTitle }</h2> <span className="fs-3 fw-normal m-0">{ getCategoryDescription() }</span>
						<ItemList productos={productos} />
					</Row>
				</Container>
			</main>
		</>
	);
};

export default ItemListContainer;
