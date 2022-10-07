import styled from "styled-components";

interface CardProjectWrapperProps {
    colorEditor: string;
}

export const CardProjectWrapper = styled.div<CardProjectWrapperProps>`
    .codeEditor {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        width: 100%;
        height: 402px;
        border-radius: 8px;
        background-color: ${(props) => props.colorEditor};
        padding: 0 32px;
        div {
            display: block;
            color: #fff;
            width: 100%;
            border-radius: 8px;
            background-color: #141414;
            height: 354px;
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
    }
    .content {
        padding: 24px;
        h2 {
            font-size: ${({ theme }) => theme.fonts.xl};
            line-height: 32px;
        }
        p {
            line-height: 24px;
            opacity: .8;
        }
    }
    .actions {
        display: flex;
        justify-content: space-between;
        padding: 32px;
        padding-top: 0;
        .icons {
            display: flex;
            gap: 18px;
            div {
                display: flex;
                align-items: center;
                gap: 10px;
                padding: 8px;
                border-radius: 16px;
                cursor: pointer;
                &:hover {
                    background-color: #FFFFFF14;
                }
                &:active {
                    background-color: #FFFFFF29;
                }
            }
        }
    }
	@media screen and (min-width: 768px) {
		.codeEditor {
            height: 342px;
            div {
                height: 294px;
            }
        }
	}
    @media screen and (min-width: 1440px){
		main {
			#cards {
				div {
					width: 520px;
				}
			}
		}
	}
`;