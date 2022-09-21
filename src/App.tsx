import { createGlobalStyle, ThemeProvider } from "styled-components";
import { Home } from "./screen/Home";

const GlogalStyle = createGlobalStyle`
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
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

function App() {
	return (
		<ThemeProvider theme={theme}>
				<GlogalStyle />
				<Home />
		</ThemeProvider>
	);
}

export default App;
