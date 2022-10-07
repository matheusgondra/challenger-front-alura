import styled from "styled-components";

export const CommunityWrapper = styled.div`
	padding: 0 16px;
	padding-bottom: 40px;
	height: 100%;
	font-family: "Inter", sans-serif;
	main {
		margin-top: 40px;
		#cards {
			display: flex;
			flex-direction: column;
			/* /* gap: 32px; */
			.card {
				background-color: #00000029;
				color: #FFF;
				border-radius: 8px;
				div {
					.content {
						padding: 24px;
						h2 {
							font-size: ${({ theme }) => theme.fonts.xl};
							line-height: 32px;
						}
						p {
							line-height: 24px;
							opacity: .8;
						}
					}
					.actions {
						display: flex;
						justify-content: space-between;
						padding: 32px;
						padding-top: 0;
						.icons {
							display: flex;
							gap: 18px;
							div {
								display: flex;
								align-items: center;
								gap: 10px;
								padding: 8px;
								border-radius: 16px;
								cursor: pointer;
								&:hover {
									background-color: #FFFFFF14;
								}
								&:active {
									background-color: #FFFFFF29;
								}
							}
						}
					}
				}
			} */
		}
	}
	@media screen and (min-width: 768px) {
		padding: 0 32px;
		padding-bottom: 40px;
	}
	@media screen and (min-width: 1024px) {
		main {
			display: flex;
			#cards {
				flex-direction: row;
				flex-wrap: wrap;
				justify-content: flex-end;
			}
		}
	}
	@media screen and (min-width: 1440px){
		main {
			#cards {
				.card {
					width: 520px;
				}
			}
		}
	}
`;