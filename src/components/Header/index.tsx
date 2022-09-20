import styled from "styled-components";
import logo from "../../assets/logo-alura-dev.svg";

const HeaderContainer = styled.header`

`;

export function Header() {
	return (
		<HeaderContainer>
			<img src={logo} alt="Logo" />
		</HeaderContainer>
	);
}