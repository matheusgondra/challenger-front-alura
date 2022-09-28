import styled from "styled-components";

export const HeaderContainer = styled.header`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding-top: 27px;
	gap: 40px;
	input {
		display: none;
	}
	.mobile-buttons {
		display: flex;
		align-items: center;
		button {
			background-color: transparent;
			border: none;
			border-radius: 16px;
			padding: 12px;
			gap: 8px;
			&:hover {
				background-color: #5081FB14;
			}
			&:active {
				background-color: #5081FB29;
			}
		}
	}
	@media screen and (min-width: 768px) {
		padding-top: 32px;
		input {
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
		.mobile-buttons {
			button {
				&:first-child {
					display: none;
				}
			}
		}
	}
	@media screen and (min-width: 1024px) {
		input {
			width: 752px;
			margin-right: 120px;
		}
		.mobile-buttons {
			display: none;
		}
	}
`;