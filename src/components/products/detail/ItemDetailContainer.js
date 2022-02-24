import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SpinnerLoader from "../../widgets/SpinnerLoader";
import ItemDetail from "./ItemDetail";
import { getFirestore, doc, getDoc } from "firebase/firestore";

const ItemDetailContainer = () => {
	const { id } = useParams();
	const [producto, setProducto] = useState({});
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const db = getFirestore();
		const itemRef = doc(db, "items", id);

		getDoc(itemRef)
			.then((snapshot) => {
				if (snapshot.exists()) {
					setProducto({ id: snapshot.id, ...snapshot.data() });
				}
			})
			.finally(() => {
				setIsLoading(false);
			});
	}, []);

	return <> {isLoading ? <SpinnerLoader /> : <ItemDetail producto={producto} />} </>;
};

export default ItemDetailContainer;
