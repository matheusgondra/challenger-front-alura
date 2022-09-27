import styled from "styled-components";

interface Props {
	colorEditor: string;
}

export const CodeEditorWrapper = styled.div<Props>`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-wrap: wrap;
	width: 100%;
	height: 492px;
	border-radius: 8px;
	background-color: ${(props) => props.colorEditor};
	padding: 0 32px;
	div {
		display: block;
		color: #fff;
		width: 100%;
		border-radius: 8px;
		background-color: #141414;
		height: 428px;
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
		height: 366px;
		div {
			height: 302px;
		}
	}
`;
