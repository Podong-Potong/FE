import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import GlobalStyles from "./styles/globalStyle";

serviceWorkerRegistration.register();

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
	<React.StrictMode>
		<GlobalStyles />
		<App />
	</React.StrictMode>
);
