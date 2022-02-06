import { useEffect, useState } from "react";
import { Alert, Row } from "react-bootstrap";
import ItemCount from "./ItemCount";
import ItemList from "./ItemList";

const ItemListContainer = ({saludo}) => {

	const availableStock = 15;

    const productosJson = [
        {
            id: 1,
            title: "Producto 1",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed cursus lacinia velit. Aliquam at purus mollis nisi porttitor dignissim. In tincidunt ligula in nibh aliquet placerat. Mauris feugiat nec tellus id fringilla. Cras mattis mauris non neque luctus, sed consectetur. ",
            price: 5000,
            imageUrl: "https://radiogamasi.com/wp-content/uploads/2017/07/img_not_available.png",
            stock: 20
        },
        {
            id: 2,
            title: "Producto 2",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed cursus lacinia velit. Aliquam at purus mollis nisi porttitor dignissim. In tincidunt ligula in nibh aliquet placerat. Mauris feugiat nec tellus id fringilla. Cras mattis mauris non neque luctus, sed consectetur. ",            
            price: 7500,
            imageUrl: "https://radiogamasi.com/wp-content/uploads/2017/07/img_not_available.png",
            stock: 10
        },
        {
            id: 3,
            title: "Producto 3",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed cursus lacinia velit. Aliquam at purus mollis nisi porttitor dignissim. In tincidunt ligula in nibh aliquet placerat. Mauris feugiat nec tellus id fringilla. Cras mattis mauris non neque luctus, sed consectetur. ",            
            price: 9000,
            imageUrl: "https://radiogamasi.com/wp-content/uploads/2017/07/img_not_available.png",
            stock: 2
        },
        {
            id: 4,
            title: "Producto 4",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed cursus lacinia velit. Aliquam at purus mollis nisi porttitor dignissim. In tincidunt ligula in nibh aliquet placerat. Mauris feugiat nec tellus id fringilla. Cras mattis mauris non neque luctus, sed consectetur. ",            
            price: 3200,
            imageUrl: "https://radiogamasi.com/wp-content/uploads/2017/07/img_not_available.png",
            stock: 100
        },
        {
            id: 5,
            title: "Producto 5",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed cursus lacinia velit. Aliquam at purus mollis nisi porttitor dignissim. In tincidunt ligula in nibh aliquet placerat. Mauris feugiat nec tellus id fringilla. Cras mattis mauris non neque luctus, sed consectetur. ",            
            price: 13300,
            imageUrl: "https://radiogamasi.com/wp-content/uploads/2017/07/img_not_available.png",
            stock: 15
        },
    ]

    const [productos, setProductos] = useState([]);

	useEffect(() => {
		const task = new Promise((resolve, reject) => {          
            setTimeout(() => {
                resolve();                
            }, 2000);
		});

        task.then(() => {
            setProductos(productosJson);
        }, err => {
            console.error(err);
        })
        .finally(() => {
            console.info("Consulta de Productos finalizada");
        });
	}, []);	

	return (
		<>
			<Alert variant="light" className="mt-5 text-center">
                <Row>
				    <Alert.Heading>{saludo}</Alert.Heading>
				    <hr />
                </Row>
                <Row>
				    <ItemCount stock={availableStock} />
                </Row>
                <Row>
				    <ItemList productos={productos} />
                </Row>
			</Alert>
			<ItemList />
		</>
	);
};

export default ItemListContainer;
