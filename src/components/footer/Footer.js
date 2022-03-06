import React from "react";
import { Container } from "react-bootstrap";

const Footer = () => {
	return (
		<Container>
			<footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
				<div className="col-md-4 d-flex align-items-center">
					<a href="/" className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
						<i class="lni lni-bootstrap"></i>
					</a>
					<span className="text-muted">&copy; {new Date().getFullYear()} soyNerin </span>
				</div>

				<ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
					<li className="ms-3">
						<a className="text-muted" href="https://github.com/soynerin" target="_blank" rel="noreferrer">
							<i class="lni lni-github"></i>
						</a>
					</li>
					<li className="ms-3">
						<a
							className="text-muted"
							href="https://www.linkedin.com/in/neri-espinola/"
							target="_blank"
							rel="noreferrer"
						>
							<i class="lni lni-linkedin"></i>
						</a>
					</li>
				</ul>
			</footer>
		</Container>
	);
};

export default Footer;
