import styled, { css } from "styled-components";

import { customMedia } from "../../styles/customMedia";

export const Wrapper = styled.div`
    ${({theme}) => css`
        margin-bottom: 6rem;
        position: relative;
        z-index: 2;
    
        h1 {
            letter-spacing: -0.025em;
            font-weight: 800;
            color: ${theme.colors.textWhite};
            font-size: 3rem /* 48px */;
            line-height: 1;
        }

        span {
            color: ${theme.colors.purple500};
        }

        p {
            color: ${theme.colors.textWhite};
            margin-top: 0.75rem;
            font-size: 1.5rem /* 24px */;
            line-height: 2rem /* 32px */;
        }

        ${customMedia.greaterThan('sm')`
            h1 {
                font-size: 3rem /* 48px */;
                line-height: 1;
            }

            p {
                margin-top: 1.25rem;
                max-width: 36rem;
            }
        `}

        ${customMedia.greaterThan('sm')`
            h1 {
                font-size: 3.75rem /* 60px */;
                line-height: 1;
            }

            p {
                margin-top: 1.25rem;
            }
        `}

        ${customMedia.greaterThan('md')`
            text-align: left;

            h1 {
                font-size: 4.5rem /* 72px */;
                line-height: 1;            
            }

            span {
                padding-left: 0.5rem;
            }
        
            p {
                margin-left: 0px;
                margin-right: 0px;
            }
        `}

        ${customMedia.greaterThan('lg')`
            span {
                display: inline;
            }
        `}
    `}
`