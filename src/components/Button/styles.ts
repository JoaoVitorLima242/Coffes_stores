import styled, { css } from "styled-components";
import { customMedia } from "../../styles/customMedia";

type TWrapper = {
    size: 'medium' | 'small'
}

const wrapperModifiers = {
    medium: () => css`
        padding: 1rem 2.5rem/* 16px 40px*/;
        padding: 1rem /* 16px */;
        font-size: 1.125rem /* 18px */;
        line-height: 1.75rem /* 28px */;
    `,
    small: () => css`
        width: fit-content;
        margin-top: 1rem /* 16px */;
        margin-bottom: 1rem /* 16px */;
        padding: 0.8rem;
    `
}

export const Wrapper = styled.button<TWrapper>`
    ${({theme, size}) => css`
        background-color: ${theme.colors.purple500};
        cursor: pointer;
        color: white;
        outline: 0;
        border: 0px;

        :hover {
            background-color: ${theme.colors.purple500};
        }

        :focus {
            outline: 1px dotted;
            outline: 5px auto -webkit-focus-ring-color;
        }

        ${!!size && wrapperModifiers[size]}

    `}
`