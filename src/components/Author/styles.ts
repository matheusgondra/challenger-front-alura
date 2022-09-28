import styled from "styled-components";

interface Props {
	isVisible: boolean;
}

export const AuthorWrapper = styled.div<Props>`
	display: ${props => props.isVisible ? "flex" : "none"};
	align-items: center;
	border-radius: 8px;
	padding: ${props => props.isVisible ? "8px" : "12px"};
	cursor: pointer;
	&:hover {
		background-color: #FFFFFF14;
	}
	img {
		width: ${props => props.isVisible ? "24px" : "32px"};
		height: ${props => props.isVisible ? "24px" : "32px"};
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
