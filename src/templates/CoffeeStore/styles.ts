import Image from "next/image";
import styled, { css } from "styled-components";
import { GlassContainer } from "../../styles/GlassContainer";
import { customMedia } from "../../styles/customMedia";

export const Wrapper = styled.main`
    display: grid;
    padding: 1.75rem /* 28px */;
    
    padding-right: 0.75rem /* 12px */;

    ${customMedia.greaterThan('lg')`
        grid-template-columns: repeat(2, minmax(0, 1fr));
    `}

    ${customMedia.greaterThan('sm')`
        width: 100%;
    `}
`

export const Layout = styled.div`
    height: 100%;

    ${customMedia.greaterThan('lg')`
        padding: 0 2.5rem /* 0 40px */;
        height: 100vh;
    `}

    ${customMedia.greaterThan('sm')`
        padding: 0 1rem /* 0 16px */;
    `}
`

export const Col1 = styled.div`
    place-self: center;
`

export const BackToHomeLink = styled.div`
    margin-top: 6rem /* 96px */;
    font-size: 1.125rem /* 18px */;
    line-height: 1.75rem /* 28px */;
    margin-bottom: 0.5rem /* 8px */;
    font-weight: 700;
`

export const NameWrapper = styled.div`
    margin-bottom: 1rem /* 16px */;
    margin-top: 1rem /* 16px */;
`

export const Name = styled.h1`
    ${({theme}) => css`
        color: ${theme.colors.text}
        font-size: 2.25rem /* 36px */;
        line-height: 2.5rem /* 40px */;
        text-overflow: ellipsis;
        white-space: normal;
        overflow: hidden;    
    `}
`

export const ImageUrlWrapper = styled.div`
    padding-top: 1rem /* 16px */;
    padding-bottom: 1rem /* 16px */;
`

export const ImageUrl = styled(Image)`
    shadow: var(0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 #0000),
    0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 #0000,
    0 25px 50px -12px rgba(0, 0, 0, 0.25);
    border-radius: 0.75rem /* 12px */;
    max-width: 100%;
    height: auto;
    vertical-align: middle;
    border-style: none;
`

export const Col2 = styled(GlassContainer)`
    border-radius: 1rem /* 16px */;
    padding: 1rem /* 16px */;
    display: flex;
    flex-direction: column;
    margin-left: 1rem /* 8px */;
    align-self: center;
    margin-top: 4rem /* 64px */;
    color: rgba(55, 59, 100, 1);

    ${customMedia.greaterThan('lg')`
        width: 75%;;
    `}
`

export const IconWrapper = styled.div`
    display: flex;
    margin-bottom: 1rem /* 16px */;
`

export const Text = styled.p`
    padding-left: 0.5rem /* 8px */;
    font-size: 1.5rem /* 24px */;
    line-height: 2rem /* 32px */;
    margin: 0;
    font-weight: 700;
`