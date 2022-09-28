import styled from "styled-components";

export const MenuWrapper = styled.section`
	display: none;
	@media screen and (min-width: 1024px) {
		display: block;
		h2 {
			font-size: ${({ theme }) => theme.fonts.sm};
			color: #fff;
			letter-spacing: 0.4rem;
			font-weight: 400;
			text-transform: uppercase;
			margin-bottom: 16px;
		}
		nav {
			ul {
				list-style: none;
				li {
					display: flex;
					width: 189px;
					text-align: center;
					margin-bottom: 16px;
					cursor: pointer;
					&:hover {
						opacity: .72;
					}
					&:focus {
						opacity: 1;
					}
					a {
						display: flex;
						align-items: center;
						gap: 16px;
						div {
							width: 48px;
							height: 48px;
							border-radius: 16px;
							background-color: ${({ theme }) => theme.colors.blue[300]};
							display: flex;
							align-items: center;
							justify-content: center;

							&:active {
								border: 4px solid rgba(80, 129, 251, 0.72);
							}
						}

						span {
							color: #fff;
							flex: 1;
						}
					}
				}
				.off {
					opacity: 0.56;
				}
			}
		}
	}
`;
