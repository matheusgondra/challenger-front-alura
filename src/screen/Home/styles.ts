import styled from "styled-components";

export const HomeWrapper = styled.div`
	background-color: ${props => props.theme.colors.blue[800]};
	padding: 0 16px;
	height: 100vh;
	font-family: "Inter", sans-serif;
	main {
		form {
			display: flex;
			flex-direction: column;
			#projects {
				display: flex;
				flex-direction: column;
				gap: 16px;
				margin-top: 40px;
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
			#language {
				display: flex;
				flex-direction: column;
				gap: 16px;
				margin-top: 40px;
				h2 {
					font-size: ${({ theme }) => theme.fonts.sm};
					line-height: 18px;
					letter-spacing: .4rem;
					color: #FFF;
					font-weight: 400;
					text-transform: uppercase;
				}
				div {
					display: flex;
					flex-direction: column;
					gap: 16px;
					select {
						flex: 1;
						padding: 16px 14px;
						background-color: #FFFFFF29;
						color: #FFF;
						opacity: .64;
						font-family: inherit;
						border: none;
						border-radius: 8px;
						option {
							color: #FFF;
							background-color: ${({ theme}) => theme.colors.blue[800]};
							opacity: .64;
						}
					}
					input {
						width: 100%;
						height: 40px;
						border: none;
						border-radius: 4px;
					}
				}
			}
			button {
				flex: 1;
				margin-top: 40px;
				padding: 16px 0;
				border: none;
				border-radius: 8px;
				outline: none;
				background-color: ${({ theme }) => theme.colors.blue[300]};
				font-size: ${({ theme }) => theme.fonts.lg};
				line-height: 24px;
				color: #051D3B;
			}
		}
	}
`;