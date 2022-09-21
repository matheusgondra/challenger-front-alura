import styled from "styled-components";

export const HomeWrapper = styled.div`
	background-color: ${props => props.theme.colors.blue[800]};
	padding: 0 16px;
	height: 100vh;
	font-family: "Inter", sans-serif;
	main {
		#projects {
			display: flex;
			flex-direction: column;
			gap: 16px;
			h2 {
				font-size: ${({ theme }) => theme.fonts.sm};
				line-height: 18px;
				letter-spacing: .4rem;
				color: #FFF;
				font-weight: 400;
				text-transform: uppercase;
			}

			input {
				outline: none;
				border: none;
				background-color: #FFFFFF29;
				color: #FFF;
				padding: 16px 14px;
				border-radius: 8px;
				flex: 1;
			}
			textarea {
				outline: none;
				border: none;
				background-color: #FFFFFF29;
				color: #FFF;
				padding: 16px 0;
				padding-left: 14px;
				border-radius: 8px;
				flex: 1;
				font-family: inherit;
			}
		}
	}
`;