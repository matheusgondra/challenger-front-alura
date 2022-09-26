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
	div {
		button {
			background-color: transparent;
			border: none;
			&:last-child {
				margin-left: 36px;
				margin-right: 14px;
			}
		}
	}
	.user {
		display: none;
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
		div {
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
		div {
			display: none;
		}
		.user {
			display: flex;
			align-items: center;
			img {
				width: 32px;
				height: 32px;
				border-radius: 50%;
				margin-right: 8px
			}
			span {
				color: #FFF
			}
		}
	}
`;