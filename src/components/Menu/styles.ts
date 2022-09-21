import styled from "styled-components";

export const MenuWrapper = styled.section`
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
    margin-top: 40px;
    
    section {
        @media screen and (min-width: 1024px){
            h2 {
                font-size: ${({ theme }) => theme.fonts.sm};
                color: #FFF;
                letter-spacing: .4rem;
                font-weight: 400;
                text-transform: uppercase;
                margin-bottom: 16px
            }
            nav {
                ul {
                    list-style: none;
                    li {
                        display: flex;
                        align-items: center;
                        gap: 16px;
                        width: 189px;
                        text-align: center;
                        margin-bottom: 16px;
                        cursor: pointer;
                        &:hover {
                            div {
                                background-color: ${({theme}) => theme.colors.blue[200]};
                            }
                        }
                        div {
                            width: 48px;
                            height: 48px;
                            border-radius: 16px;
                            background-color: ${({ theme }) => theme.colors.blue[300]};
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            
                            &:active {
                                border: 4px solid rgba(80, 129, 251, 0.72);
                            }
                        }
    
                        span {
                            color: #FFF;
                            flex: 1;
                        }
                    }
                    .off {
                        opacity: 0.56;
                    }
                }
            }
        }
    }
`;