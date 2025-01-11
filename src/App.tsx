import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";
import { RouterProvider } from "react-router-dom";
import { router } from "./router/router";
import { QueryClient, QueryClientProvider } from "react-query";

const App = () => {
	const queryClient = new QueryClient();
	return (
		<QueryClientProvider client={queryClient}>
			<ThemeProvider theme={theme}>
				<RouterProvider router={router} />
			</ThemeProvider>
		</QueryClientProvider>
	);
};
export default App;
