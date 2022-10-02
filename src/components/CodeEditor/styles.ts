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
	height: ${(props) => (props.type === "primary" ? "492px" : "402px")};
	border-radius: 8px;
	background-color: ${(props) => props.colorEditor};
	padding: 0 32px;
	div {
		display: block;
		color: #fff;
		width: 100%;
		border-radius: 8px;
		background-color: #141414;
		height: ${(props) => (props.type === "primary" ? "428px" : "354px")};
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
		height: ${(props) => (props.type === "primary" ? "366px" : "342px")};
		div {
			height: ${(props) => (props.type === "primary" ? "302px" : "294px")};
		}
	}
`;

export const Highlight = styled.pre`
	/* Tomorrow Night Bright Theme */
	/* Original theme - https://github.com/chriskempson/tomorrow-theme */
	/* http://jmblog.github.com/color-themes-for-google-code-highlightjs */

	/* Tomorrow Comment */
	.hljs-comment,
	.hljs-quote {
		color: #969896;
	}

	/* Tomorrow Red */
	.hljs-variable,
	.hljs-template-variable,
	.hljs-tag,
	.hljs-name,
	.hljs-selector-id,
	.hljs-selector-class,
	.hljs-regexp,
	.hljs-deletion {
		color: #d54e53;
	}

	/* Tomorrow Orange */
	.hljs-number,
	.hljs-built_in,
	.hljs-literal,
	.hljs-type,
	.hljs-params,
	.hljs-meta,
	.hljs-link {
		color: #e78c45;
	}

	/* Tomorrow Yellow */
	.hljs-attribute {
		color: #e7c547;
	}

	/* Tomorrow Green */
	.hljs-string,
	.hljs-symbol,
	.hljs-bullet,
	.hljs-addition {
		color: #b9ca4a;
	}

	/* Tomorrow Blue */
	.hljs-title,
	.hljs-section {
		color: #7aa6da;
	}

	/* Tomorrow Purple */
	.hljs-keyword,
	.hljs-selector-tag {
		color: #c397d8;
	}

	.hljs {
		background: black;
		color: #eaeaea;
	}

	.hljs-emphasis {
		font-style: italic;
	}

	.hljs-strong {
		font-weight: bold;
	}
`;
