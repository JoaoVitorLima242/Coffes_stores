import styled, { css } from "styled-components";
import { customMedia } from "../../styles/customMedia";

export const Wrapper = styled.button`
    ${({theme}) => css`
        background-color: ${theme.colors.purple500};
        cursor: pointer;
        color: white;
        outline: 0;
        border: 0px;

        padding-top: 1rem /* 16px */;
        padding-bottom: 1rem /* 16px */;
        font-size: 1.125rem /* 18px */;
        line-height: 1.75rem /* 28px */;
        padding-left: 2.5rem /* 40px */;
        padding-right: 2.5rem /* 40px */;

        :hover {
            background-color: ${theme.colors.purple500};
        }

        :focus {
            outline: 1px dotted;
            outline: 5px auto -webkit-focus-ring-color;
        }

        ${customMedia.greaterThan('sm')`
            padding-top: 1rem /* 16px */;
            padding-bottom: 1rem /* 16px */;
            font-size: 1.125rem /* 18px */;
            line-height: 1.75rem /* 28px */;
            padding-left: 2.5rem /* 40px */;
            padding-right: 2.5rem /* 40px */;
        `}
    `}
`