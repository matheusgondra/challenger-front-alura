import styled from "styled-components";
import logo from "../../assets/logo-alura-dev.svg";

const HeaderContainer = styled.header`
	display: flex;
	align-items: center;
	justify-content: space-between;

	input {
		display: none;
		@media screen and (min-width: 768px) {
			display: initial;
			color: #fff;
			font-family: inherit;
			opacity: 0.64;
			padding: 16px 14px;
			background-color: #ffffff29;
			border: none;
			border-radius: 8px;
			outline: none;
			width: 431px;
			height: 56px;

			&:hover {
				background-color: #ffffff3d;
			}
		}

		@media screen and (min-width: 1024px) {
			width: 752px;
		}
	}
`;

export function Header() {
	return (
		<HeaderContainer>
			<img src={logo} alt="Logo" />
			<input placeholder="Busque por algo" />
		</HeaderContainer>
	);
}