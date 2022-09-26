import styled from "styled-components";

export const HomeWrapper = styled.div`
	padding: 0 16px;
	padding-bottom: 40px;
	height: 100%;
	font-family: "Inter", sans-serif;
	main {
		margin-top: 40px;
		#code-editor {
			display: flex;
			flex-direction: column;
			div {
				display: flex;
				justify-content: center;
				align-items: center;
				flex-wrap: wrap;
				width: 100%;
				height: 492px;
				border-radius: 8px;
				background-color: #6BD1FF;
				padding: 0 32px;
				div {
					display: block;
					color: #FFF;
					border-radius: 8px;
					background-color: #141414;
					height: 428px;
					padding: 16px;
					font-size: ${({ theme }) => theme.fonts.md};
					pre {
						white-space: pre-wrap;
						code {
							outline: none;
						}
					}
					
				}
			}
			button {
				margin-top: 32px;
				color: #FFF;
				background-color: #5081FB14;
				padding: 16px;
				border: none;
				border-radius: 8px;
				outline: none;
				font-size: ${({ theme }) => theme.fonts.lg};
			}
		}
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
					flex: 1 1 56px;
				}
				textarea {
					outline: none;
					border: none;
					background-color: #FFFFFF29;
					color: #FFF;
					padding: 16px 14px;
					border-radius: 8px;
					flex: 1 1 80px;
					font-family: inherit;
					resize: none;
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
						height: 56px;
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
				margin-top: 32px;
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
	@media screen and (min-width: 768px) {
		padding: 0 32px;
		padding-bottom: 40px;
		main {
			#code-editor {
				div {
					height: 366px;
					div {
						height: 302px;
					}
				}
			}
			form {
				#language {
					div {
						flex-direction: row;
						align-items: center;
						input {
							flex: 1;
							height: 56px;
						}
					}
				}
			}
		}
	}
	@media screen and (min-width: 1024px) {
		main {
			display: flex;
			justify-content: space-between;
			gap: 40px;
			#code-editor {
				width: 752px;
			}
			form {
				width: 272px;
				#projects {
					margin-top: 0;
				}
				#language {
					div {
						flex-direction: column;
						align-items: initial;
						input {
							flex-basis: auto;
						}
					}
				}
				button {
					height: 56px;
					flex-grow: 0;
				}
			}
		}
	}
`;