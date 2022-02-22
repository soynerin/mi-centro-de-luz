import React from "react";
import { Spinner } from "react-bootstrap";

const SpinnerLoader = () => {
	const spinnerStyle = {
		width: "4rem",
		height: "4rem",
	};

	return (
		<div className="d-flex justify-content-center align-content-center">
			<Spinner animation="grow" role="status" variant="success" style={spinnerStyle}>
				<span className="visually-hidden">Loading...</span>
			</Spinner>
		</div>
	);
};

export default SpinnerLoader;
