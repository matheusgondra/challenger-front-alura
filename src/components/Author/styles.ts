import styled from "styled-components";

interface Props {
	isVisible: boolean;
}

export const AuthorWrapper = styled.div<Props>`
	display: ${props => props.isVisible ? "flex" : "none"};
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
	@media screen and (min-width: 1024px) {
		display: flex;
	}
`;
