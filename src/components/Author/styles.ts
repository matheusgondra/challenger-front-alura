import styled from "styled-components";

export const AuthorWrapper = styled.div`
	display: none;
	@media screen and (min-width: 1024px) {
		display: flex;
		align-items: center;
		img {
			width: 32px;
			height: 32px;
			border-radius: 50%;
			margin-right: 8px;
		}
		span {
			color: #fff;
		}
	}
`;
