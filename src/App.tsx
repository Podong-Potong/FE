import { GlobalStyle } from "./styles/GlobalStyle";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";
import { RouterProvider } from "react-router-dom";
import { router } from "./router/router";

const App = () => {
	return (
		<ThemeProvider theme={theme}>
			<GlobalStyle />
			<RouterProvider router={router} />
		</ThemeProvider>
	);
};
export default App;
