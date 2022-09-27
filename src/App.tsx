import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { Community } from "./screen/Community";
import { Home } from "./screen/Home";

const GlogalStyle = createGlobalStyle`
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}
	body {
		background-color: #051D3B;
	}
`;

const theme = {
	colors: {
		blue: {
			100: "#96B9FD",
			200: "#7BA4FC",
			300: "#5081FB",
			800: "#051D3B"
		}
	},
	fonts: {
		sm: "12px",
		md: "14px",
		lg: "16px",
		xl: "21px"
	}
}

const router = createBrowserRouter([
	{ path: "/", element: <Home /> },
	{ path: "comunidade", element: <Community /> }
]);

function App() {
	return (
		<ThemeProvider theme={theme}>
				<GlogalStyle />
				<RouterProvider router={router} />
		</ThemeProvider>
	);
}

export default App;
