import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
	apiKey: "AIzaSyBrFNnJlfITF3lPHl2nxBtTsUoXp8wafUI",
	authDomain: "mi-centro-de-luz.firebaseapp.com",
	projectId: "mi-centro-de-luz",
	storageBucket: "mi-centro-de-luz.appspot.com",
	messagingSenderId: "798175950879",
	appId: "1:798175950879:web:8b13dee25c639a117a3d2a",
};

initializeApp(firebaseConfig);

ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
