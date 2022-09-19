import styled, { createGlobalStyle } from "styled-components";

const GlogalStyle = createGlobalStyle`
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}
`;

const AppContainer = styled.div`

`;

function App() {
	return (
		<AppContainer>
			<GlogalStyle />
		</AppContainer>
	);
}

export default App;
