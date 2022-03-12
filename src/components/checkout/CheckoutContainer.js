import React from "react";
import Checkout from "./Checkout";

const CheckoutContainer = () => {
	const formControls = [
		{
			label: "Name",
			name: "name",
			type: "text",
			placeholder: "Name",
		},
		{
			label: "Phone",
			name: "phone",
			type: "number",
			placeholder: "Phone Number",
		},
		{
			label: "Email",
			name: "email",
			type: "email",
			placeholder: "name@domain.com",
		},
	];

	return <Checkout formControls={formControls} />;
};

export default CheckoutContainer;
