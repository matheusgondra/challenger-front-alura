import styled from "styled-components";

interface Props {
	colorEditor: string;
	type: "primary" | "secondary";
}

export const CodeEditorWrapper = styled.div<Props>`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-wrap: wrap;
	width: 100%;
	height: ${props => props.type === "primary" ? "492px" : "402px"};
	border-radius: 8px;
	background-color: ${(props) => props.colorEditor};
	padding: 0 32px;
	div {
		display: block;
		color: #fff;
		width: 100%;
		border-radius: 8px;
		background-color: #141414;
		height: ${props => props.type === "primary" ? "428px" : "354px"};
		padding: 16px;
		font-size: ${({ theme }) => theme.fonts.md};
		img {
			margin-bottom: 24px;
		}
		pre {
			white-space: pre-wrap;
			code {
				outline: none;
			}
		}
	}
	@media screen and (min-width: 768px) {
		height: ${props => props.type === "primary" ? "366px" : "342px"};
		div {
			height: ${props => props.type === "primary" ? "302px" : "294px"};
		}
	}
`;
