import styled from "styled-components";

export const HeaderContainer = styled.header`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding-top: 27px;

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

	div {
		button {
			background-color: transparent;
			border: none;
			&:last-child {
				margin-left: 36px;
				margin-right: 14px;
			}
			@media screen and (min-width: 768px) {
				&:first-child {
					display: none;
				}
			}
		}
		
		@media screen and (min-width: 1024px) {
			display: none;
		}
	}

	.user {
		display: none;
		@media screen and (min-width: 1024px) {
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