import styled, { css } from "styled-components";
import { customMedia } from "../../styles/customMedia";

export const Wrapper = styled.main`

`

export const ImageContainer = styled.div`
    position: absolute;
    top: 0px;
    z-index: 1;
    right: 15%;
`

export const CardLayout = styled.div`
    display: grid;
    grid-template-columns: repeat(1, minmax(0, 1fr));
    column-gap: 1.5rem /* 24px */;
    row-gap: 1.5rem /* 24px */;

    ${customMedia.greaterThan('sm')`
        grid-template-columns: repeat(2, minmax(0, 1fr));
    `}

    ${customMedia.greaterThan('lg')`
        grid-template-columns: repeat(3, minmax(0, 1fr));
    `}
`

export const SectionWrapper = styled.section`
    margin-top: 5rem;
`

export const SectionTitle = styled.h2`
    ${({theme}) => css`
        font-size: 2.25rem;
        line-height: 2.5rem;
        padding-bottom: 2rem;
        margin-top: 2rem;
        color: ${theme.colors.textWhite}
    `}  
`